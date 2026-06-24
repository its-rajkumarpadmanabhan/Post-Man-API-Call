import React, { useState, useEffect } from 'react';

function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/log?source=react');
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchHistory();
    const interval = setInterval(fetchHistory, 1000); // Check server every 1 second
    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: { fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '40px auto', padding: '20px' },
    table: { width: '100%', borderCollapse: 'collapse', marginTop: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
    th: { backgroundColor: '#2c3e50', color: 'white', padding: '12px', textTransform: 'uppercase', fontSize: '14px' },
    td: { padding: '12px', borderBottom: '1px solid #ddd', textAlign: 'center' },
    badge: (method) => {
      const colors = { GET: '#3498db', POST: '#2ecc71', PUT: '#f1c40f', DELETE: '#e74c3c' };
      return { backgroundColor: colors[method] || '#95a5a6', color: 'white', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold', fontSize: '12px' };
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>Postman Live API Logger</h2>
      <p style={{ textAlign: 'center', color: '#7f8c8d' }}>Send requests in Postman to see the table populate dynamically.</p>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Time</th>
            <th style={styles.th}>Method (GET / POST / PUT / DELETE)</th>
            <th style={styles.th}>Data Sent (Name)</th>
            <th style={styles.th}>Response Status</th>
          </tr>
        </thead>
        <tbody>
          {history.length === 0 ? (
            <tr>
              <td colSpan="4" style={styles.td}>No requests received yet. Fire up Postman!</td>
            </tr>
          ) : (
            history.map((log) => (
              <tr key={log.id}>
                <td style={styles.td}>{log.timestamp}</td>
                <td style={styles.td}>
                  <span style={styles.badge(log.method)}>{log.method}</span>
                </td>
                <td style={styles.td}><strong>{log.payload}</strong></td>
                <td style={styles.td}><span style={{color: '#27ae60', fontWeight: 'bold'}}>{log.status}</span></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;