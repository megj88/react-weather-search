import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <div className="container">

      <Weather defaultCity="Bari" />
      <footer>This project was coded by <a href="https://github.com/megj88/react-weather-search" target="_blank">Megan Jones</a> and is open-sourced.</footer>
      
    </div>
    </div>
  );
}

export default App;
