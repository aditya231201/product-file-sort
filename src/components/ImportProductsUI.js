import React, { useState } from 'react';
import Products from './Products';

const ImportProductsUI = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState('.csv');
  const [characterEncoding, setCharacterEncoding] = useState('UTF-8');
  const [delimiter, setDelimiter] = useState(',');
  const [showTable, setShowTable] = useState(false);
  const [displayFields, setDisplayFields] = useState([
    'Product Id',
    'Subcategory',
    'Title',
    'Price',
    'Popularity',
    'Description',
    'Rating',
    'UTM Source',
    'UTM Medium'
  ]);

  const handleFileChange = (event) => {
    setSelectedFile(selectedFile)
    setSelectedFile(event.target.files[0]);
  };

  if (showTable) {
    return <Products />;
  } else {
    return (
      <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <h2>Step 1: Select File</h2>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div style={{ flex: 1, padding: '20px' }}>
          <h2>Step 2: Specify Format</h2>
          <label>
            Choose file: <input type="file" />
          </label>
          <div>
            File Type: 
            <select value={fileType} onChange={(e) => setFileType(e.target.value)}>
              <option value=".csv">.CSV</option>
              <option value="json">JSON</option>
            </select>
          </div>
          <div>
            Character Encoding: 
            <select value={characterEncoding} onChange={(e) => setCharacterEncoding(e.target.value)}>
              <option value="UTF-8">UTF-8</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            Delimiter: 
            <select value={delimiter} onChange={(e) => setDelimiter(e.target.value)}>
              <option value=",">Comma</option>
              <option value=";">Semicolon</option>
              {/* Add other options as needed */}
            </select>
          </div>
        </div>
        <div style={{ flex: 2, padding: '20px' }}>
          <h2>Step 3: Display Handling</h2>
          <div><label>Select the fields to be displayed:</label></div>
          <select multiple value={displayFields} onChange={(e) => setDisplayFields(Array.from(e.target.selectedOptions, (option) => option.value))}>
            <option value="Product Id">Product ID</option>
            <option value="Subcategory">Subcategory</option>
            <option value="Title">Title</option>
            <option value="Price">Price</option>
            <option value="Popularity">Popularity</option>
            <option value="Description">Description</option>
            <option value="Rating">Rating</option>
            <option value="UTM Source">UTM Source</option>
            <option value="UTM Medium">UTM Medium</option>
          </select>
        </div>
      </div>
      <div >
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{ alignSelf: 'flex-end', padding: '20px' }}>
            <button onClick={() => setShowTable(true)}>Next</button>
        </div>
        
        <div style={{ alignSelf: 'flex-end', padding: '20px' }}>
            <button>Cancel</button>
        </div>
        </div>
      </div>
      </>
    );
  }
};

export default ImportProductsUI;
