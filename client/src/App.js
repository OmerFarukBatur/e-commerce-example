import './App.css';
import {  BrowserRouter as Router, Routes, Route, Link ,useMatch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products/index";
import ProductDetail from "./pages/ProductDetail/index";
import Profile from './pages/Profile';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import Admin from './pages/Admin';
/* import ProtectedRoute from './pages/ProtectedRoute'; */

function App() {
  return (
    <div>      
      <Router>
        <Navbar/>
        <div id='content'>
          <Routes>
            <Route path="/" exact element={ <Products />}> </Route>
            <Route path="/product/:product_id" element={ <ProductDetail />}> </Route>
            <Route path="/signin" element={ <Signin />}> </Route>
            <Route path="/signup" element={ <Signup />}> </Route>
            <Route path="/profile/*" element={ <Profile />}> </Route>
            {/* <Route path="/profile/*" element={ <ProtectedRoute><Profile/></ProtectedRoute>}/>  */}
            <Route path="/basket" element={ <Basket />}> </Route>
            <Route path="*" element={ <Error404 />}> </Route>
            <Route path="/admin/*" element={ <Admin />} admin={true}> </Route>
          </Routes>
        </div>      
      </Router>
    </div>
  );
}




export default App;
