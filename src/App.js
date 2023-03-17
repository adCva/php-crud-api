import "./Scss/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicNavbar from './Components/Nav';
import List from './Components/List';
import Create from './Components/Create';
import Edit from './Components/Edit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BasicNavbar />
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;