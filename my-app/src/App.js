import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreetings';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
