import Home from "./myKitchen/home";
import FAQ from "./myKitchen/page/faq";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
const App1=()=>(
  <>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home/faqs" element={<FAQ/>}/>
      
      

    </Routes>
  </BrowserRouter>
</>
);
export default App1;