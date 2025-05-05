import './App.css';
import{Route,Routes}from 'react-router-dom';
import Form1 from './components/Form/Form1.jsx';
import Form2 from './components/Form/Form2.jsx';
import Entry from "./components/Form/Entry";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={''} element={<Entry/>}/>
            <Route path={'form1'} element={<Form1/>}/>
            <Route path={'form2'} element={<Form2/>}/>
        </Routes>
    </div>
  );
}
export default App;
