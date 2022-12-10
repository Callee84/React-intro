import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps name="Hanna" age="32" greeting="Nice to meet you!" />
    </div>
  );
}

export default App;
