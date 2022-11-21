import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminMenuPage from './pages/AdminMenu';
import LoginPage from './pages/Login';
import MatchSetupPage from './umpire/MatchSetupPage';
import UmpireLoginPage from './umpire/UmpireLoginPage';
import UmpireMenuPage from './umpire/UmpireMenuPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path='/home' element={ <LoginPage /> } />
        <Route path='/admin-menu' element={ <AdminMenuPage /> } />
        <Route path='/umpire-login' element={ <UmpireLoginPage /> } />
        <Route path='/umpire-menu' element={ <UmpireMenuPage /> } />
        <Route path='/match-setup' element={ <MatchSetupPage /> } />
        <Route path='*' element={ <h2>Page does not exist.</h2> } />
      </Routes>
    </div>
  );
}

export default App;
