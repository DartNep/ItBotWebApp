import './App.css';
import{Route,Routes}from 'react-router-dom';
import Form1 from './components/form/Form1.jsx';
import Form2 from './components/form/Form2.jsx';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'form1'} element={<Form1/>}/>
            <Route path={'form2'} element={<Form2/>}/>
        </Routes>
    </div>
  );
}

export default App;
