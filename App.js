import React from 'react';
import LoginPage from './components/LoginPage';
import AppointmentScheduler from './components/AppointmentScheduler';
import PatientChatbot from './components/PatientChatbot';
import DoctorAvailability from './components/DoctorAvailability';
import Medication from './components/Medication';
import PatientHistory from './components/PatientHistory';

function App() {
  return (
    <div className="App">
      <h1>Patient Engagement App</h1>
      <LoginPage />
      <AppointmentScheduler />
      <PatientChatbot />
      <DoctorAvailability />
      <Medication />
      <PatientHistory />
    </div>
  );
}

export default App;
