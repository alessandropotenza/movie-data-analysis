import TextField from "@mui/material/TextField";

const TextInput = ({ label, value, onChange, index }) => {
  const style = {
    width: "100%",
    marginBottom: "30px",
    "& .MuiInputLabel-root": {
      color: value !== "" ? "black" : "grey",
      fontWeight: "400",
    },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { borderColor: "black", borderWidth: "1px" },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "black",
        borderWidth: "1.5px",
      },
    },
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "black",
        borderWidth: "1.5px",
      },
    },
  };
  return (
    <div style={{ margin: "0 7px" }}>
      <TextField
        label={label}
        variant="outlined"
        sx={style}
        size="small"
        multiline
        value={value}
        onChange={(evt) => onChange(evt, index)}
      />
    </div>
  );
};

export default TextInput;
