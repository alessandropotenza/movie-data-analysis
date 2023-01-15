import "./Popup.css";
import ClearIcon from "@mui/icons-material/Clear";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const genders = {
  0: "Not specified",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};

const Popup = ({ open, onClose, data }) => {
  const image = data.poster_path || data.imageURL;

  // movie info
  const title = data.title;
  const tagline = data.tagline;
  const overview = data.overview;

  // collection info
  const collectionName = data.collectionName;
  const numMovies = data.numMovies;

  // people info
  const name = data.name;
  const birthdate = data.birthdate?.substring(0, 10) || "N/A";
  const deathdate = data.deathdate?.substring(0, 10) || "N/A";
  const birthplace = data.birthplace;
  const gender = data.gender;

  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      closeIcon={<ClearIcon />}
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
    >
      <div className="content-container">
        {image && (
          <img
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt="No cover image available"
            className="image"
          />
        )}
        <div className="info-container">
          {data.title && (
            <>
              <p className="popupTitle">{title}</p>
              <p className="tagline">{tagline}</p>
              {overview !== null && <p className="subtitle">Overview:</p>}
              <p className="overview">{overview}</p>
            </>
          )}
          {data.name && (
            <>
              <p className="popupTitle">{name}</p>
              <p className="date">{`Birthdate: ${birthdate}`}</p>
              <p className="date">{`Deathdate: ${deathdate}`}</p>
              <p className="date">{`Birthplace: ${birthplace}`}</p>
              <p className="gender">{`Gender: ${genders[gender]}`}</p>
            </>
          )}
          {data.collectionName && (
            <>
              <p className="popupTitle">{collectionName}</p>
              <p className="subtitle">Number of Movies:</p>
              <p className="overview">{numMovies}</p>
            </>
          )}
          {!data.name && !data.title && !data.collectionName && (
            <p>No information to display for this row</p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
