import { Button, Input, InputLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import BasicTable from "./basicTable";
import TableComponent from "./tableComponent";
const Base = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === "application/vnd.ms-excel") {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file types");
        setExcelFile(null);
      }
    }
  };
  const handleClick = () => {
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      const tempArray =
        data.length > 0 &&
        data.map((item) => {
          return {
            player: item.Player,
            team: item["ï»¿Team"],
            tournament:item.Tournament,
            matches:item.Matches,
            runs:item["Runds Scored"],
            wickets:item["Wickets Taken"],
            catches:item["Catches Taken"],
            highestRuns:item["Highest Score"],
            fifties:item["50"],
            hundreds:item["100"],          
          };
        });
      setExcelData(tempArray);
    } else {
      setExcelData(null);
    }
  };

  return (
    <article className="main">
      {/* upload file */}
      <div className="input_form">
        <InputLabel>
          <h2>Upload Excel file</h2>
        </InputLabel>
        <input
          type="file"
          className="upload"
          onChange={handleChange}
          required
        />
        {excelFileError ? <div className="error">{excelFileError}</div> : null}
        <Button variant="contained" color="success" onClick={handleClick}>
          submit
        </Button>
      </div>

      {/* view file */}
      <div className="output">
        <h2>Converted File:</h2>
        <BasicTable data={excelData} />
      </div>
    </article>
  );
};

export default Base;
