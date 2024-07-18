import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import AddSchool from './components/AddSchool';
import ShowSchool from './components/ShowSchool';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/addSchool" element={<AddSchool/>} />
          <Route path="/showSchool" element={<ShowSchool/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App