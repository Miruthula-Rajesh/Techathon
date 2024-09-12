import React, { useState, useEffect } from 'react';

function PatientHistory() {
  const [history, setHistory] = useState([
    { id: 1, date: '2024-01-01', notes: 'Routine check-up' },
    { id: 2, date: '2024-02-14', notes: 'Blood test results' }
  ]);

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
