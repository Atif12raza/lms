import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const SyllabusList = () => {
  const [syllabuses, setSyllabuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSyllabuses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'syllabuses'));
        const syllabusesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSyllabuses(syllabusesData);
      } catch (error) {
        console.error('Error fetching syllabus data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSyllabuses();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'subject', headerName: 'Subject Name', width: 200 },
    { field: 'className', headerName: 'Class', width: 150 },
    { field: 'pdf', headerName: 'PDF Link', width: 300}
  ];

  const handleAddSyllabusClick = () => {
    navigate('/syllabus/add');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '80%', maxWidth: '1000px' }}>
        <h2 style={{ textAlign: 'center' }}>Syllabus List</h2>

        <div style={{ marginBottom: '20px', textAlign: 'right' }}>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#4caf50',
              color: 'white',
              cursor: 'pointer',
              border: 'none',
              borderRadius: '4px',
            }}
            onClick={handleAddSyllabusClick}
          >
            Add Syllabus
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Paper sx={{ padding: '20px', height: 'auto', width: '100%' }}>
            <DataGrid
              rows={syllabuses}
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

export default SyllabusList;
