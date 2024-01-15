import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// Users Pages
import Users from './user/pages/Users';
// Places Pages
import NewPlace from './places/pages/NewPlace';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/places/new' element={<NewPlace/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
