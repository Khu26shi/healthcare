import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Dashboard() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('age',   
 age);
    formData.append('file',   
 file);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);   

    }
  };

  return (
    <div className='container'>
        <div>
        <div className="shape"></div>
        <div className="shape"></div></div>
      
      <form onSubmit={handleSubmit} className='form'>
      <h1 className='heading'>Healthcare Dashboard</h1>
        <div className='name'>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
        </div>
        <div className='age'>
          <label>Age:</label>   

          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age'/>
        </div>
        <div className='file'>
          <label>Upload:</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default Dashboard;