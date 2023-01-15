export const queries = [
  {
    name: '1. Records from "Movies" table (1000)',
    route: "movies",
    columns: [
      {
        name: "Movie ID",
        selector: (row) => row.movieID,
        width: "120px",
        sortable: true,
      },
      {
        name: "Title",
        selector: (row) => row.title,
        width: "220px",
        sortable: true,
      },
      {
        name: "Collection ID",
        selector: (row) => row.collectionID,
        width: "120px",
        sortable: true,
      },
      {
        name: "Budget",
        selector: (row) => row.budget,
        width: "120px",
        sortable: true,
      },
      {
        name: "Runtime",
        selector: (row) => row.runtime,
        width: "120px",
        sortable: true,
      },
      {
        name: "Release Date",
        selector: (row) => row.release_date,
        width: "220px",
        sortable: true,
      },
      {
        name: "Revenue",
        selector: (row) => row.revenue,
        width: "120px",
        sortable: true,
      },
      {
        name: "Popularity",
        selector: (row) => row.popularity,
        width: "120px",
        sortable: true,
      },
      {
        name: "Tagline",
        selector: (row) => row.tagline,
        width: "220px",
        sortable: true,
      },
      {
        name: "Overview",
        selector: (row) => row.overview,
        width: "220px",
        sortable: true,
      },
      {
        name: "Poster Path",
        selector: (row) => row.poster_path,
        width: "220px",
        sortable: true,
      },
    ],
  },
  {
    name: '2. Records from "People" table (1000)',
    route: "people",
    columns: [
      {
        name: "Person ID",
        selector: (row) => row.personID,
        width: "120px",
        sortable: true,
      },
      {
        name: "Name",
        selector: (row) => row.name,
        width: "220px",
        sortable: true,
      },
      {
        name: "Birthdate",
        selector: (row) => row.birthdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Deathdate",
        selector: (row) => row.deathdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Gender",
        selector: (row) => row.gender,
        width: "100px",
        sortable: true,
      },
      {
        name: "Birthplace",
        selector: (row) => row.birthplace,
        width: "220px",
        sortable: true,
      },
      {
        name: "Popularity",
        selector: (row) => row.popularity,
        width: "120px",
        sortable: true,
      },
      {
        name: "imageURL",
        selector: (row) => row.imageURL,
        width: "120px",
        sortable: true,
      },
    ],
  },
  {
    name: "3. Get movie by title (matches any substring)",
    route: "movie",
    params: ["Title"],
    columns: [
      {
        name: "Movie ID",
        selector: (row) => row.movieID,
        width: "120px",
        sortable: true,
      },
      {
        name: "Title",
        selector: (row) => row.title,
        width: "220px",
        sortable: true,
      },
      {
        name: "Collection ID",
        selector: (row) => row.collectionID,
        width: "120px",
        sortable: true,
      },
      {
        name: "Budget",
        selector: (row) => row.budget,
        width: "120px",
        sortable: true,
      },
      {
        name: "Runtime",
        selector: (row) => row.runtime,
        width: "120px",
        sortable: true,
      },
      {
        name: "Release Date",
        selector: (row) => row.release_date,
        width: "220px",
        sortable: true,
      },
      {
        name: "Revenue",
        selector: (row) => row.revenue,
        width: "120px",
        sortable: true,
      },
      {
        name: "Popularity",
        selector: (row) => row.popularity,
        width: "120px",
        sortable: true,
      },
      {
        name: "Tagline",
        selector: (row) => row.tagline,
        width: "220px",
        sortable: true,
      },
      {
        name: "Overview",
        selector: (row) => row.overview,
        width: "220px",
        sortable: true,
      },
      {
        name: "Poster Path",
        selector: (row) => row.poster_path,
        width: "220px",
        sortable: true,
      },
    ],
  },
  {
    name: "4. Get actor/crew by name (matches any substring)",
    route: "people",
    params: ["Name"],
    columns: [
      {
        name: "Person ID",
        selector: (row) => row.personID,
        width: "120px",
        sortable: true,
      },
      {
        name: "Name",
        selector: (row) => row.name,
        width: "220px",
        sortable: true,
      },
      {
        name: "Birthdate",
        selector: (row) => row.birthdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Deathdate",
        selector: (row) => row.deathdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Gender",
        selector: (row) => row.gender,
        width: "100px",
        sortable: true,
      },
      {
        name: "Birthplace",
        selector: (row) => row.birthplace,
        width: "220px",
        sortable: true,
      },
      {
        name: "Popularity",
        selector: (row) => row.popularity,
        width: "120px",
        sortable: true,
      },
      {
        name: "imageURL",
        selector: (row) => row.imageURL,
        width: "120px",
        sortable: true,
      },
    ],
  },
  {
    name: "5. All keywords that describe a movie",
    route: "allKeywords",
    params: ["Movie name"],
    columns: [
      {
        name: "Keyword",
        selector: (row) => row.keyword,
        width: "220px",
        sortable: true,
      },
    ],
  },
  {
    name: "6. All production companies that were involved in a movie",
    route: "allProductionCompanies",
    params: ["Movie name"],
    columns: [
      {
        name: "Production Company",
        selector: (row) => row.company,
        width: "220px",
        sortable: true,
      },
    ],
  },
  {
    name: "7. All characters played by an actor and the movie it was in",
    route: "allCharacters",
    params: ["Actor Full Name"],
    columns: [
      {
        name: "Chatacter",
        selector: (row) => row.character,
        width: "220px",
        sortable: true,
      },
      {
        name: "Title",
        selector: (row) => row.title,
        width: "220px",
        sortable: true,
      },
      {
        name: "Release Date",
        selector: (row) => row.release_date,
        width: "220px",
        sortable: true,
      },
      {
        name: "Tagline",
        selector: (row) => row.tagline,
        width: "220px",
        sortable: true,
      },
      {
        name: "Overview",
        selector: (row) => row.overview,
        width: "220px",
        sortable: true,
      },
      {
        name: "Poster Path",
        selector: (row) => row.poster_path,
        width: "220px",
        sortable: true,
      },
    ],
  },
  {
    name: "8. Most popular movies that aren't described by a keyword",
    route: "notKeyword",
    params: ["Keyword"],
    columns: [
      {
        name: "Title",
        selector: (row) => row.title,
        width: "220px",
        sortable: true,
      },
      {
        name: "Release Date",
        selector: (row) => row.release_date,
        width: "220px",
        sortable: true,
      },
      {
        name: "Popularity",
        selector: (row) => row.popularity,
        width: "220px",
        sortable: true,
      },
      {
        name: "Tagline",
        selector: (row) => row.tagline,
        width: "220px",
        sortable: true,
      },
      {
        name: "Overview",
        selector: (row) => row.overview,
        width: "220px",
        sortable: true,
      },
      {
        name: "Poster Path",
        selector: (row) => row.poster_path,
        width: "220px",
        sortable: true,
      },
    ],
  },
  {
    name: "9. Actors who have appeared in films in the most distinct languages",
    route: "mostLangs",
    columns: [
      {
        name: "Name",
        selector: (row) => row.name,
        width: "220px",
        sortable: true,
      },
      {
        name: "Number of Languages",
        selector: (row) => row.numLangs,
        width: "250px",
        sortable: true,
      },
      {
        name: "Birthdate",
        selector: (row) => row.birthdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Deathdate",
        selector: (row) => row.deathdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Gender",
        selector: (row) => row.gender,
        width: "100px",
        sortable: true,
      },
      {
        name: "imageURL",
        selector: (row) => row.imageURL,
        width: "120px",
        sortable: true,
      },
    ],
  },
  {
    name: "10. Most common language for a keyword",
    route: "keywordLang",
    params: ["Keyword"],
    columns: [
      {
        name: "Language",
        selector: (row) => row.langName,
        width: "220px",
        sortable: true,
      },
      {
        name: "Number of Movies",
        selector: (row) => row.numMovies,
        width: "250px",
        sortable: true,
      },
    ],
  },
  {
    name: "11. Actors born in a certain date range, ordered by popularity",
    route: "personDateRange",
    params: ["Low (Year or YYYY-MM-DD)", "High (Year or YYYY-MM-DD)"],
    columns: [
      {
        name: "Person ID",
        selector: (row) => row.personID,
        width: "120px",
        sortable: true,
      },
      {
        name: "Name",
        selector: (row) => row.name,
        width: "220px",
        sortable: true,
      },
      {
        name: "Birthdate",
        selector: (row) => row.birthdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Deathdate",
        selector: (row) => row.deathdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Gender",
        selector: (row) => row.gender,
        width: "100px",
        sortable: true,
      },
      {
        name: "Popularity",
        selector: (row) => row.popularity,
        width: "120px",
        sortable: true,
      },
      {
        name: "imageURL",
        selector: (row) => row.imageURL,
        width: "120px",
        sortable: true,
      },
    ],
  },
  {
    name: "12. Movies released in a certain date range, ordered by popularity",
    route: "movieDateRange",
    params: ["Low (Year or YYYY-MM-DD)", "High (Year or YYYY-MM-DD)"],
    columns: [
      {
        name: "Title",
        selector: (row) => row.title,
        width: "220px",
        sortable: true,
      },
      {
        name: "Release Date",
        selector: (row) => row.release_date,
        width: "220px",
        sortable: true,
      },
      {
        name: "Popularity",
        selector: (row) => row.popularity,
        width: "120px",
        sortable: true,
      },
      {
        name: "Tagline",
        selector: (row) => row.tagline,
        width: "220px",
        sortable: true,
      },
      {
        name: "Overview",
        selector: (row) => row.overview,
        width: "220px",
        sortable: true,
      },
      {
        name: "Poster Path",
        selector: (row) => row.poster_path,
        width: "220px",
        sortable: true,
      },
    ],
  },
  {
    name: "13. Actors who have acted in the greatest number of distinct genres",
    route: "mostGenres",
    columns: [
      {
        name: "Name",
        selector: (row) => row.name,
        width: "220px",
        sortable: true,
      },
      {
        name: "Number of genres",
        selector: (row) => row.numGenres,
        width: "220px",
        sortable: true,
      },
      {
        name: "Birthdate",
        selector: (row) => row.birthdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Deathdate",
        selector: (row) => row.deathdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Gender",
        selector: (row) => row.gender,
        width: "100px",
        sortable: true,
      },
      {
        name: "Popularity",
        selector: (row) => row.popularity,
        width: "120px",
        sortable: true,
      },
      {
        name: "imageURL",
        selector: (row) => row.imageURL,
        width: "120px",
        sortable: true,
      },
    ],
  },
  {
    name: "14. Crew members that have worked on the most movies",
    route: "crewMovies",
    columns: [
      {
        name: "Name",
        selector: (row) => row.name,
        width: "220px",
        sortable: true,
      },
      {
        name: "Number of Movies",
        selector: (row) => row.numMovies,
        width: "220px",
        sortable: true,
      },
      {
        name: "Birthdate",
        selector: (row) => row.birthdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Deathdate",
        selector: (row) => row.deathdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Gender",
        selector: (row) => row.gender,
        width: "100px",
        sortable: true,
      },
      {
        name: "imageURL",
        selector: (row) => row.imageURL,
        width: "120px",
        sortable: true,
      },
    ],
  },
  {
    name: "15. All jobs worked by a crew member and for how many movies",
    route: "jobsWorked",
    params: ["Full name"],
    columns: [
      {
        name: "Job",
        selector: (row) => row.job,
        width: "220px",
        sortable: true,
      },
      {
        name: "Number of Movies",
        selector: (row) => row.numMovies,
        width: "220px",
        sortable: true,
      },
    ],
  },
  {
    name: "16. Most profitable movies filmed in a specific country",
    route: "profitable",
    params: ["Country"],
    columns: [
      {
        name: "Title",
        selector: (row) => row.title,
        width: "220px",
        sortable: true,
      },
      {
        name: "Profit",
        selector: (row) => row.profit,
        width: "120px",
        sortable: true,
      },
      {
        name: "Budget",
        selector: (row) => row.budget,
        width: "120px",
        sortable: true,
      },
      {
        name: "Revenue",
        selector: (row) => row.revenue,
        width: "120px",
        sortable: true,
      },
      {
        name: "Release Date",
        selector: (row) => row.release_date,
        width: "220px",
        sortable: true,
      },
      {
        name: "Tagline",
        selector: (row) => row.tagline,
        width: "220px",
        sortable: true,
      },
      {
        name: "Overview",
        selector: (row) => row.overview,
        width: "220px",
        sortable: true,
      },
      {
        name: "Poster Path",
        selector: (row) => row.poster_path,
        width: "220px",
        sortable: true,
      },
    ],
  },
  {
    name: "17. Actors that a specific actor has been in the most movies with",
    route: "mostMoviesWith",
    params: ["Actor's full name"],
    columns: [
      {
        name: "Name",
        selector: (row) => row.name,
        width: "220px",
        sortable: true,
      },
      {
        name: "Number of movies",
        selector: (row) => row.numMovies,
        width: "220px",
        sortable: true,
      },
      {
        name: "Birthdate",
        selector: (row) => row.birthdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Deathdate",
        selector: (row) => row.deathdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Gender",
        selector: (row) => row.gender,
        width: "100px",
        sortable: true,
      },
      {
        name: "imageURL",
        selector: (row) => row.imageURL,
        width: "120px",
        sortable: true,
      },
    ],
  },
  {
    name: "18. People who have filmed the most in a specific country",
    route: "mostInCountry",
    params: ["Country"],
    columns: [
      {
        name: "Name",
        selector: (row) => row.name,
        width: "220px",
        sortable: true,
      },
      {
        name: "Number of movies",
        selector: (row) => row.numMovies,
        width: "220px",
        sortable: true,
      },
      {
        name: "Birthdate",
        selector: (row) => row.birthdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Deathdate",
        selector: (row) => row.deathdate,
        width: "220px",
        sortable: true,
      },
      {
        name: "Gender",
        selector: (row) => row.gender,
        width: "100px",
        sortable: true,
      },
      {
        name: "imageURL",
        selector: (row) => row.imageURL,
        width: "120px",
        sortable: true,
      },
    ],
  },
  {
    name: "19. Collections with the most movies",
    route: "mostInCollection",
    columns: [
      {
        name: "Collection",
        selector: (row) => row.collectionName,
        width: "300px",
        sortable: true,
      },
      {
        name: "Number of movies",
        selector: (row) => row.numMovies,
        width: "220px",
        sortable: true,
      },
      {
        name: "Poster Path",
        selector: (row) => row.poster_path,
        width: "220px",
        sortable: true,
      },
    ],
  },
];