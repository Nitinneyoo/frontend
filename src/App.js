import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import AddSchool from './component/addSchool';
import ShowSchool from './component/showSchool';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowSchool/>} />
          <Route path="/addSchool" element={<AddSchool/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App