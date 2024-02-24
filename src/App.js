import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Footer from "./components/Pages/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const showToast = () =>{
    toast("Awesomee !");
     
    };
 
  
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
           
          </Routes>
         
        </div>
      
      </Router>
      <div>
        <button className='bg-blue-500 p-3 text-white' onClick={showToast}>Notify</button>
        <ToastContainer />







        
       </div>
     
       
      
     <Footer />
     
       
  </>
  );
}

export default App;
