
import './App.css';
import { BrowserRouter as Router , Route,Routes } from "react-router-dom"
import Dashboard from './components/Dashboard';
import Calendrier from './components/Calendrier';
import Utilisateurs from './components/Utilisateurs';
import FormulaireUtilisateur from './components/FormulaireUtilisateur';
import Header  from './components/Header';  
import Navbar  from './components/Navbar';
import Login from './components/Login';
import CreerCompte from './components/CreerCompte';
function App() {
  return (
    <>
    <Utilisateurs/>
    </>
  );
}

export default App;
