import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";

import { queries } from "../../Queries";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "white",
      overflowX: "scroll",
    },
  },
};

const BootstrapInput = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 15px",
    backgroundImage: "linear-gradient(120deg, #BDCEFC, #F6A1A5);",
    borderRadius: 6,
    borderWidth: 0,
    position: "relative",
    fontSize: 16,
    padding: "12px 26px 12px 15px",
  },
}));

export default function Dropdown({ handleChange }) {
  const [chosenQuery, setChosenQuery] = useState(-1);

  const onChange = (event) => {
    setChosenQuery(event.target.value);
    handleChange(event.target.value);
  };
  return (
    <div>
      <FormControl fullWidth>
        <Select
          value={chosenQuery}
          onChange={onChange}
          input={<BootstrapInput />}
          displayEmpty
          MenuProps={MenuProps}
        >
          <MenuItem value={-1}>
            <p style={{ margin: 0, color: "rgba(0, 0, 0, 0.7)" }}>
              Select a query...
            </p>
          </MenuItem>
          {queries.map((query, index) => (
            <MenuItem key={index} value={index}>
              {query.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
