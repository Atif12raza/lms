import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

function TeacherList() {
  const [teachers, setTeachers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const nav = useNavigate(); 

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'teachers')); 
        const teacherList = [];
        querySnapshot.forEach((doc) => {
          teacherList.push({ id: doc.id, ...doc.data() }); 
        });
        setTeachers(teacherList); 
      } catch (error) {
        console.error('Error fetching teachers:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchTeachers(); 
  }, []); 

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'firstName', headerName: 'First Name', width: 180 },
    { field: 'lastName', headerName: 'Last Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'subject', headerName: 'Subject', width: 180 },
    { field: 'gender', headerName: 'Gender', width: 130 },
  ];

  if (loading) {
    return <p>Loading...</p>;
  }
  const navigation =()=>{
    nav('/teachers/add')
  }
  return (
    <div style={{ padding: '20px' }}>
      <h2>Teacher List</h2>

      <div style={{ marginBottom: '20px', textAlign: 'right' }}>
          <button 
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }} 
            onClick={navigation}  
          >
            Add Student
          </button>
          <br /><br />
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={teachers} 
          columns={columns}  
          pageSize={5} 
          rowsPerPageOptions={[5, 10]} 
          checkboxSelection 
          disableSelectionOnClick 
        />
      </Paper>
      </div>
    </div>
  );
}

export default TeacherList;
