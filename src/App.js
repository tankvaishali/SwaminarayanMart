import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from "./Component/Homepage";

function App() {
  return (
    <>
<BrowserRouter>
<Routes>

  <Route path='/' element={<Homepage/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
