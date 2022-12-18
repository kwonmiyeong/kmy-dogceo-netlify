
import './App.css';
import Header from './components/Header.js';
import DogInput from './components/DogInput.js';
import DogResult from './components/DogResult.js';
import Footer from './components/Footer.js';
import { useState } from 'react';

function App() {
  const [dogImg,setDogImg]=useState('')
  const [dogType, setDogType] = useState('')
  
  return (
    <div className="App">
        <Header/>
          <DogInput
          setDogImg={setDogImg}
          setDogType={setDogType} />
          <DogResult dogImg={dogImg}
          dogType={dogType}/>
        <Footer/>
    </div>
  );
}

export default App;
