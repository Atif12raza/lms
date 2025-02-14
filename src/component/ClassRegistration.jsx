import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const ClassRegistration = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Class Form')); // Same collection as ClassForm
        const registrationsList = [];
        querySnapshot.forEach((doc) => {
          registrationsList.push({ id: doc.id, ...doc.data() });
        });
        setRegistrations(registrationsList);
      } catch (error) {
        console.error('Error fetching class registrations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'First Name', width: 200 },
    { field: 'lastName', headerName: 'Last Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 180 },
    { field: 'dob', headerName: 'Date of Birth', width: 150 },
    { field: 'qualification', headerName: 'Qualification', width: 200 },
    { field: 'gender', headerName: 'Gender', width: 150 },
  ];

  const handleAddRegistrationClick = () => {
    navigate('/class/form'); // Navigate to add new registration
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '80%', maxWidth: '1000px' }}>
        <h2 style={{ textAlign: 'center' }}>Class Registration List</h2>

        <div style={{ marginBottom: '20px', textAlign: 'right' }}>
          <button
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            onClick={handleAddRegistrationClick}
          >
            Add Registration
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={registrations}
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

export default ClassRegistration;
