import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Create from './component/Create'
import Edit from './component/Edit'
import NotFound from './component/NotFound';
const App=()=>{
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-data" element={<Create />} />
        <Route path="/edit-data" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  </>
  )
}
export default App
