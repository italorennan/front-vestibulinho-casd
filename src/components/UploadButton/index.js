import React, { useState, useEffect } from 'react';
import XLSX from 'xlsx';

function UploadButton() {
  const [jsonFile, setJsonFile] = useState({});

  function handleUploadFile(e) {
    convertExcelToJSON(e.target.files[0]);
  }

  function convertExcelToJSON(excelFile) {
    const reader = new FileReader();
    reader.onload = (evt) => { 
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, {type:'binary'});
      
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      
      const data = XLSX.utils.sheet_to_json(ws, {header:1});
      setJsonFile(data);
    };
    reader.readAsBinaryString(excelFile);
  }
  
  useEffect(() => console.log('jsonFile', jsonFile), [jsonFile, setJsonFile]);

  return (
    <>
      <p>Aceita .xlsx .xls e .csv</p>
      <input 
        type="file" 
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={handleUploadFile}
      />  
    </>
  );
}
export default UploadButton;