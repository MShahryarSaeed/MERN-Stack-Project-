import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Users Pages
import Users from './user/pages/Users';
// Places Pages
import NewPlace from './places/pages/NewPlace';
// Navigation
import MainNavigation from './shared/components/Navigation/MainNavigation';
function App() {
  return (
    <BrowserRouter>

      <MainNavigation />

      <main>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/places/new' element={<NewPlace />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
