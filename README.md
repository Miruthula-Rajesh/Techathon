import React, { useState } from 'react';

function AppointmentScheduler() {
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState('');

  const handleSchedule = () => {
    // handle appointment scheduling functionality here
  };

  return (
    <div>
      <h2>Schedule Appointment</h2>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <select value={doctor} onChange={e => setDoctor(e.target.value)}>
        <option value="Doctor A">Doctor A</option>
        <option value="Doctor B">Doctor B</option>
      </select>
      <button onClick={handleSchedule}>Schedule</button>
    </div>
  );
}

export default AppointmentScheduler;
import React from 'react';
import { Chatbot } from 'react-chatbot-kit'; // Example chatbot library

function PatientChatbot() {
  const handleChatResponse = (message) => {
    // Handle chatbot response
  };

  return (
    <div>
      <h2>Ask a question</h2>
      <Chatbot onMessage={handleChatResponse} />
    </div>
  );
}

export default PatientChatbot;
import React, { useEffect, useState } from 'react';

function DoctorAvailability() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctor availability from backend
    fetch('/api/doctors')
      .then(response => response.json())
      .then(data => setDoctors(data));
  }, []);

  return (
    <div>
      <h2>Doctor Availability</h2>
      {doctors.map(doctor => (
        <div key={doctor.id}>
          <p>{doctor.name} - {doctor.available ? 'Available' : 'Not Available'}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorAvailability;
import React, { useEffect, useState } from 'react';

function DoctorAvailability() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctor availability from backend
    fetch('/api/doctors')
      .then(response => response.json())
      .then(data => setDoctors(data));
  }, []);

  return (
    <div>
      <h2>Doctor Availability</h2>
      {doctors.map(doctor => (
        <div key={doctor.id}>
          <p>{doctor.name} - {doctor.available ? 'Available' : 'Not Available'}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorAvailability;
import React, { useState, useEffect } from 'react';

function Medication() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    // Fetch medication info from backend
    fetch('/api/medications')
      .then(response => response.json())
      .then(data => setMedications(data));
  }, []);

  return (
    <div>
      <h2>Your Medications</h2>
      {medications.map(medication => (
        <div key={medication.id}>
          <p>{medication.name} - {medication.dosage}</p>
        </div>
      ))}
    </div>
  );
}

export default Medication;

function PatientHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch patient history from backend
    fetch('/api/patient-history')
      .then(response => response.json())
      .then(data => setHistory(data));
  }, []);

  return (
    <div>
      <h2>Patient History</h2>
      {history.map(record => (
        <div key={record.id}>
          <p>{record.date} - {record.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default PatientHistory;
