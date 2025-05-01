import './App.css'
import { useState } from 'react';
import Tours from './components/Tours';
import data from './Tours';

function App() {
  const [tours, setTours] = useState(data);

  const removeTour = ((id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  })

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )

}

export default App
