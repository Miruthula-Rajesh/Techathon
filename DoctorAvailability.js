import React, { useState, useEffect } from 'react';

function DoctorAvailability() {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. Smith', available: true },
    { id: 2, name: 'Dr. Johnson', available: false },
  ]);

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
