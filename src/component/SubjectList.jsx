import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "subjects"));
        const subjectsList = [];
        querySnapshot.forEach((doc) => {
          subjectsList.push({ id: doc.id, ...doc.data() });
        });
        setSubjects(subjectsList);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'subjectName', headerName: 'Subject Name', width: 200 },
    { field: 'className', headerName: 'Class', width: 120 },
    { field: 'group', headerName: 'Group', width: 180 },
  ];

  const handleAddSubjectClick = () => {
    navigate('/subjects/add');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '80%', maxWidth: '1000px' }}>
        <h2 style={{ textAlign: 'center' }}>Subject List</h2>

        <div style={{ marginBottom: '20px', textAlign: 'right' }}>
          <button
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            onClick={handleAddSubjectClick}
          >
            Add Subject
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={subjects}
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
};

export default SubjectList;
