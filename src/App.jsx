import './App.css';
import NavBar from "./components/NavBar/NavBar";
import MainContainer from './pages/MainContainer/MainContainer';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContainer/>
    </div>
  );
}
