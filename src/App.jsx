import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Sections/Home";
import Header from "./Components/Header";
const App = () => {
  return(

<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Header" element={<Header />} />

  
</Routes>
</BrowserRouter>

    
  ) 
}

export default App
