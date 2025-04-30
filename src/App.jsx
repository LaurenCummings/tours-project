import './App.css'
import { useState } from 'react';
import Tours from './components/Tours';
import data from './Tours';

function App() {
  const [tours, setTours] = useState(data);
  console.log(tours);

  return (
    <main>
      <Tours tours={tours} />
    </main>
  )

}

export default App
