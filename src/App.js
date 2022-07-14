import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Pages/Navbar';
import Done from './Components/Pages/Done';
import All from './Components/Pages/All';
import Undone from './Components/Pages/Undone';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<All />} />
      <Route path='/done' element={<Done />} />
      <Route path='/undone' element={<Undone />} />
      
      </Routes>
    </div>
  );
}

export default App;
