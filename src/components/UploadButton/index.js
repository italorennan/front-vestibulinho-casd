import React, { useState, useEffect } from 'react';


//https://stackoverflow.com/questions/11832930/html-input-file-accept-attribute-file-type-csv

function UploadButton() {
  const [fileUpload, setFileUpload] = useState({});

  function handleUploadFile(e) {
    setFileUpload(e.target.files[0]);
  }

  useEffect(() => {
    console.log('fileUpload', fileUpload);
  }, [fileUpload, setFileUpload]);

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