import "./Button.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Button = ({ onClick, loading }) => {
  return (
    <div
      className={`button ${loading && "loading-styles"}`}
      onClick={!loading ? onClick : undefined}
    >
      {loading ? <LoadingSpinner /> : <p className="button-text">Execute</p>}
    </div>
  );
};

export default Button;
