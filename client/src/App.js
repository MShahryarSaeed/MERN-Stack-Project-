import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// Users Pages
import Users from './user/pages/Users';
// Places Pages
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
// Navigation
import MainNavigation from './shared/components/Navigation/MainNavigation';
function App() {
  return (
    <BrowserRouter>

      <MainNavigation />

      <main>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/:userId/places' element={<UserPlaces/>}/>
          <Route path='/places/new' element={<NewPlace />} />
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
