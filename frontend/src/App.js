import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// components
import TextInput from "./components/TextInput/TextInput";
import Dropdown from "./components/Dropdown/Dropdown";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import Popup from "./components/Popup/Popup";

import { queries } from "./Queries";

const serverURL = "http://localhost:8080";

const App = () => {
  const [queryIndex, setQueryIndex] = useState(-1);
  const [values, setValues] = useState([]);
  const [time, setTime] = useState(1);
  const [data, setData] = useState([]);
  const [didRequest, setDidRequest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rowData, setRowData] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const onClick = async () => {
    if (queryIndex !== -1) {
      setLoading((currLoading) => !currLoading);
      try {
        let route = serverURL + `/${queries[queryIndex].route}`;
        for (let i = 0; i < queries[queryIndex].params?.length; i++) {
          if (!values[i].value) {
            setLoading(false);
            return alert("Missing parameter: " + values[i].param);
          }
          route += `/${values[i].value}`;
        }
        console.log(route);
        const response = await axios.get(route);
        setData(response.data.queryResponse);
        setTime(response.data.time);
        setDidRequest(true);
        setLoading(false);
        console.log(response);
      } catch (err) {
        setLoading(false);
        console.log(err);
        alert("An error occurred while fetching, please try again!");
      }
    } else {
      alert("Please select a query!");
    }
  };

  useEffect(() => {
    console.log(rowData);
  }, [rowData]);

  const handleChange = (value) => setQueryIndex(value);

  useEffect(() => {
    console.log(queryIndex);
    setDidRequest(false);
    setValues([]);
    setData([]);
    if (queryIndex !== -1) {
      queries[queryIndex].params?.forEach((param) => {
        setValues((currValues) => [...currValues, { param, value: "" }]);
      });
    }
  }, [queryIndex]);

  const onChange = (evt, index) => {
    let newValues = [...values];
    newValues[index].value = evt.target.value;
    setValues(newValues);
  };

  const onRowClickedHandler = (rowData) => {
    setRowData(rowData);
    setPopupOpen(true);
  };

  return (
    <>
      <Popup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        data={rowData}
      />
      <div className="App">
        <div className="title-container">
          <p className="title">Pick a query!</p>
        </div>
        <div className="dropdown-container">
          <Dropdown handleChange={handleChange} />
        </div>
        <div className="search-container">
          {queries[queryIndex]?.params?.map((param, index) => {
            return (
              <TextInput
                key={index}
                label={param}
                value={values[index]?.value || ""}
                onChange={onChange}
                index={index}
              />
            );
          })}
        </div>
        <div className="button-container">
          <Button onClick={onClick} loading={loading} />
        </div>
        {queryIndex !== -1 && didRequest && (
          <div className="table-container">
            <Table
              columns={queries[queryIndex].columns}
              data={data}
              title={queries[queryIndex].name}
              time={time}
              onRowClicked={onRowClickedHandler}
            />
          </div>
        )}
      </div>
      <div className="footer">
        <p className="made-by">Made by Alessandro Potenza</p>
      </div>
    </>
  );
};

export default App;
