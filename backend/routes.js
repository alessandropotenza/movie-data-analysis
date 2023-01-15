const express = require("express");
const router = express.Router();
const { performance } = require("perf_hooks");

const { poolPromise, sql } = require("./database");

router.get("/movies", async (req, res, next) => {
  let start, end;
  try {
    const pool = await poolPromise;
    start = performance.now();
    const result = await pool.query(
      "SELECT TOP(1000) * FROM Movies Order By movieID DESC"
    );
    end = performance.now();
    res
      .status(200)
      .json({ queryResponse: result.recordset, time: end - start });
  } catch (err) {
    next(err);
  }
});

router.get("/people", async (req, res, next) => {
  let start, end;
  try {
    const pool = await poolPromise;
    start = performance.now();
    const result = await pool.query("SELECT TOP (1000) * FROM People");
    end = performance.now();
    res
      .status(200)
      .json({ queryResponse: result.recordset, time: end - start });
  } catch (err) {
    next(err);
  }
});

router.get("/people/:name", async (req, res, next) => {
  const name = req.params.name;
  let start, end;
  try {
    if (!name) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("name", sql.VarChar(120));
    ps.prepare("select * from people p where p.name like @name", (err) => {
      if (err) throw err;
      start = performance.now();
      ps.execute(
        {
          name: "%" + name + "%",
        },
        (err, result) => {
          if (err) throw err;
          end = performance.now();
          res
            .status(200)
            .json({ queryResponse: result.recordset, time: end - start });
          ps.unprepare((err) => {
            if (err) throw err;
          });
        }
      );
    });
  } catch (err) {
    next(err);
  }
});

router.get("/movie/:title", async (req, res, next) => {
  const title = req.params.title;
  console.log(req.params);
  let start, end;
  try {
    if (!title) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("title", sql.VarChar(120));
    ps.prepare("select * from movies m where m.title like @title", (err) => {
      if (err) throw err;
      start = performance.now();
      ps.execute(
        {
          title: "%" + title + "%",
        },
        (err, result) => {
          if (err) throw err;
          end = performance.now();
          res
            .status(200)
            .json({ queryResponse: result.recordset, time: end - start });
          ps.unprepare((err) => {
            if (err) throw err;
          });
        }
      );
    });
  } catch (err) {
    next(err);
  }
});

router.get("/allKeywords/:title", async (req, res, next) => {
  const title = req.params.title;
  let start, end;
  try {
    if (!title) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("title", sql.VarChar(120));
    ps.prepare(
      `select k.keyword from MovieKeywords mk
    join movies m on mk.movieID = m.movieID
    join keywords k on mk.keywordID = k.keywordID
    where m.title=@title`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            title: title,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/allProductionCompanies/:title", async (req, res, next) => {
  const title = req.params.title;
  let start, end;
  try {
    if (!title) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("title", sql.VarChar(120));
    ps.prepare(
      `select company from movies m
      join FilmedBy f on m.movieID = f.movieID
      join ProductionCompanies pc on f.companyID = pc.companyID
      where m.title=@title`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            title: title,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/notKeyword/:keyword", async (req, res, next) => {
  const keyword = req.params.keyword;
  let start, end;
  try {
    if (!keyword) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("keyword", sql.VarChar(120));
    ps.prepare(
      `select m.title, m.release_date, m.popularity, m.tagline, m.overview, m.poster_path from potenzaa.Movies m
      where m.MovieID not in (
        select movieID from potenzaa.MovieKeywords mk
        join potenzaa.Keywords k on k.keywordID=mk.keywordID
        where k.keyword=@keyword
      )
      order by m.popularity desc`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            keyword: keyword,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/allCharacters/:actor", async (req, res, next) => {
  const actor = req.params.actor;
  let start, end;
  try {
    if (!actor) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("actorName", sql.NVarChar(500));
    ps.prepare(
      `select c.character, m.title, m.release_date, m.poster_path, m.tagline, m.overview from People p
      join Casts c on p.personID=c.personID
      join Movies m on c.movieID=m.movieID
      where p.name=@actorName`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            actorName: actor,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/mostLangs", async (req, res, next) => {
  let start, end;
  try {
    const pool = await poolPromise;
    start = performance.now();
    const result =
      await pool.query(`select p.name as 'name', count(distinct l.languageID) as 'numLangs', p.birthdate, p.deathdate, p.gender, p.imageURL from people p
    join Casts c on c.personID=p.personID
    join Movies m on m.movieID=c.movieID
    join MovieLanguages ml on ml.movieID=m.movieID
    join Languages l on l.languageID=ml.languageID
    group by p.personID, p.name, p.birthdate, p.deathdate, p.gender, p.imageURL
    order by count(distinct ml.languageID) desc`);
    end = performance.now();
    res
      .status(200)
      .json({ queryResponse: result.recordset, time: end - start });
  } catch (err) {
    next(err);
  }
});

router.get("/keywordLang/:keyword", async (req, res, next) => {
  const keyword = req.params.keyword;
  console.log(req.params);
  let start, end;
  try {
    if (!keyword) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("keyword", sql.VarChar(120));
    ps.prepare(
      `select l.name as langName, count(m.movieID) AS numMovies from Languages l 
    join MovieLanguages ml on ml.languageID=l.languageID
    join Movies m on m.movieID=ml.movieID
    join MovieKeywords mk on mk.movieID=m.movieID
    join Keywords k on k.keywordID = mk.keywordID
    where k.keyword = @keyword
    group by l.languageID, l.name
    order by count(m.movieID) desc`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            keyword: keyword,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/personDateRange/:earlyDate/:lateDate", async (req, res, next) => {
  const earlyDate = req.params.earlyDate;
  const lateDate = req.params.lateDate;
  console.log(req.params);
  let start, end;
  try {
    if (!earlyDate || !lateDate) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("earlyDate", sql.Date);
    ps.input("lateDate", sql.Date);
    ps.prepare(
      `select distinct p.personID, p.name, p.birthdate, p.deathdate, p.gender, p.imageURL, p.popularity from People p join Casts c on p.personID=c.personID
      where @earlyDate <= p.birthdate and p.birthdate <= @lateDate
      order by p.popularity desc`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            earlyDate: earlyDate,
            lateDate: lateDate,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/movieDateRange/:earlyDate/:lateDate", async (req, res, next) => {
  const earlyDate = req.params.earlyDate;
  const lateDate = req.params.lateDate;
  console.log(req.params);
  let start, end;
  try {
    if (!earlyDate || !lateDate) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("earlyDate", sql.Date);
    ps.input("lateDate", sql.Date);
    ps.prepare(
      `select m.title, m.release_date, m.poster_path, m.tagline, m.overview, m.popularity from Movies m
      where @earlyDate <= m.release_date and m.release_date <= @lateDate
      order by m.popularity desc`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            earlyDate: earlyDate,
            lateDate: lateDate,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/mostGenres", async (req, res, next) => {
  let start, end;
  try {
    const pool = await poolPromise;
    start = performance.now();
    const result =
      await pool.query(`select p.name, count(distinct g.genre) as 'numGenres', p.birthdate, p.deathdate, p.gender, p.imageURL from people p
      join Casts c on c.personID=p.personID
      join Movies m on m.movieID=c.movieID
      join MovieGenres mg on mg.movieID=m.movieID
      join Genres g on g.genreID=mg.genreID
      group by p.personID, p.name, p.birthdate, p.deathdate, p.gender, p.imageURL
      order by count(distinct g.genreID) desc`);
    end = performance.now();
    res
      .status(200)
      .json({ queryResponse: result.recordset, time: end - start });
  } catch (err) {
    next(err);
  }
});

router.get("/crewMovies", async (req, res, next) => {
  let start, end;
  try {
    const pool = await poolPromise;
    start = performance.now();
    const result =
      await pool.query(`select top 1000 p.name, p.birthdate, p.deathdate, p.birthplace, p.gender, p.imageURL, count(m.movieID) as 'numMovies' from People p
      join Crews c on c.personID=p.personID
      join Movies m on m.movieID=c.movieID
      group by p.personID, p.name, p.birthdate, p.deathdate, p.birthplace, p.gender, p.imageURL
      order by count(m.movieID) desc`);
    end = performance.now();
    res
      .status(200)
      .json({ queryResponse: result.recordset, time: end - start });
  } catch (err) {
    next(err);
  }
});

router.get("/jobsWorked/:crewName", async (req, res, next) => {
  const crewName = req.params.crewName;
  let start, end;
  try {
    if (!crewName) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("crewName", sql.NVarChar(120));
    ps.prepare(
      `select c.job, count(c.movieID) as 'numMovies' from People p
      join Crews c on c.personID=p.personID
      where p.name = @crewName
      group by c.job
      order by count(c.movieID) desc`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            crewName: crewName,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/profitable/:country", async (req, res, next) => {
  const country = req.params.country;
  let start, end;
  try {
    if (!country) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("countryName", sql.VarChar(50));
    ps.prepare(
      `select m.title, (m.revenue-m.budget) as 'profit', m.budget, m.revenue, m.release_date, m.poster_path, m.tagline, m.overview from Countries c
      join FilmedIn fi on fi.countryID=c.countryID
      join Movies m on m.movieID=fi.movieID
      where c.name = @countryName
      order by 'Profit' desc`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            countryName: country,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/mostMoviesWith/:actor", async (req, res, next) => {
  const actor = req.params.actor;
  let start, end;
  try {
    if (!actor) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("actorName", sql.NVarChar(120));
    ps.prepare(
      `select p2.name, count(m.movieID) as 'numMovies', p2.birthdate, p2.deathdate, p2.gender, p2.imageURL from People p1
      join Casts c1 on c1.personID=p1.personID
      join Movies m on m.movieID=c1.movieID
      join Casts c2 on c2.movieID=m.movieID
      join People p2 on p2.personID=c2.personID
      where c1.personID != c2.personID and p1.name=@actorName
      group by p2.personID, p2.name, p2.birthdate, p2.deathdate, p2.gender, p2.imageURL
      order by count(m.movieID) desc`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            actorName: actor,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/mostInCountry/:country", async (req, res, next) => {
  const country = req.params.country;
  let start, end;
  try {
    if (!country) throw new Error();
    const pool = await poolPromise;
    const ps = new sql.PreparedStatement(pool);
    ps.input("countryName", sql.VarChar(50));
    ps.prepare(
      `select p.name, count(m.movieID) as 'numMovies', p.birthdate, p.deathdate, p.gender, p.imageURL from Countries countries
      join FilmedIn fi on fi.countryID=countries.countryID
      join Movies m on m.movieID=fi.movieID
      join Casts c on c.movieID=m.movieID
      join People p on p.personID=c.personID
      where countries.name=@countryName
      group by p.personID, p.name, p.birthdate, p.deathdate, p.gender, p.imageURL
      order by count(distinct m.movieID) desc`,
      (err) => {
        if (err) throw err;
        start = performance.now();
        ps.execute(
          {
            countryName: country,
          },
          (err, result) => {
            if (err) throw err;
            end = performance.now();
            res
              .status(200)
              .json({ queryResponse: result.recordset, time: end - start });
            ps.unprepare((err) => {
              if (err) throw err;
            });
          }
        );
      }
    );
  } catch (err) {
    next(err);
  }
});

router.get("/mostInCollection", async (req, res, next) => {
  let start, end;
  try {
    const pool = await poolPromise;
    start = performance.now();
    const result =
      await pool.query(`select top 1000 c.collectionName, count(m.movieID) as 'numMovies', c.poster_path from Collections c
      join Movies m on m.collectionID=c.collectionID
      group by c.collectionID, c.collectionName, c.poster_path
      order by count(m.movieID) desc`);
    end = performance.now();
    res
      .status(200)
      .json({ queryResponse: result.recordset, time: end - start });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
