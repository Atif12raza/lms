import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom'; 

export default function StudentList() {
  const [students, setStudents] = useState([]); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'students')); 
        const studentList = [];
        querySnapshot.forEach((doc) => {
          studentList.push({ id: doc.id, ...doc.data() });
        });
        setStudents(studentList); 
      } catch (error) {
        console.error('Error fetching students:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchStudents(); 
  }, []); 

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 }, 
    { field: 'firstName', headerName: 'First Name', width: 180 },
    { field: 'lastName', headerName: 'Last Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'className', headerName: 'Class', width: 120 },
    { field: 'gender', headerName: 'Gender', width: 120 },
  ];

  const handleAddStudentClick = () => {
    navigate('/students/add'); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '80%', maxWidth: '1000px' }}>
        <h2 style={{ textAlign: 'center' }}>Student List</h2>

        <div style={{ marginBottom: '20px', textAlign: 'right' }}>
          <button 
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }} 
            onClick={handleAddStudentClick}  
          >
            Add Student
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={students}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
            />
          </Paper>
        )}
      </div>
    </div>
  );
}
