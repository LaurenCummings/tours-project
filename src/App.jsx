import './App.css'
import { useState } from 'react';
import Tours from './components/Tours';
import data from './Tours';


function App() {
  const [tours, setTours] = useState(data);

  return (
    <main>
      <Tours />
    </main>
  )

}

export default App
