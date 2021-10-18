import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('services.json')
    .then(response => response.json())
    .then(data => console.log(data));
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
