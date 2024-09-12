import React, { useState, useEffect } from 'react';

function Medication() {
  const [medications, setMedications] = useState([
    { id: 1, name: 'Aspirin', dosage: '2 tablets per day' },
    { id: 2, name: 'Ibuprofen', dosage: '1 tablet per day' }
  ]);

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

export default Medication;
