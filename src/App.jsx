import './App.css'
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )    
  }

  return (
    <h2>Tours Project Setup</h2>
  )

}

export default App
