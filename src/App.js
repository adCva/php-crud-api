import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListUser from './Components/ListUser';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <p>CRUD With React & PHP</p>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="./create">Create</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListUser />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/edit/:id" element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;