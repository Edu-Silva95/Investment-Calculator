import Header from './components/Header/Header.jsx'
import UserInput from './components/UserInput.jsx'
import { useState } from 'react';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 150000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => ({
      ...prevState,
      [inputIdentifier]: +newValue
    }));
  }

  const isValid =  userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!isValid && <p style={{ textAlign: 'center', color: 'red' }}>Please enter a valid duration (1 year or more).</p>}
      {isValid && <Results input={userInput} />}
    </>
  )
}

export default App
