import { Box } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router ,Link, Route, Routes, useMatch } from "react-router-dom";
import "./styles.css";
import Home from "./Home/index";
import Products from "./Products/index";
import Orders from "./Orders/index";
import ProductDetail from './ProductDetail';
import NewProduct from './Products/newProduct';

function Admin() {

    const {path, url} = useMatch();
    console.log(path);

  return (
    <div>
      
      <nav>
        <ul className='admin-menu'>
            <li>
                <Link to={url}>Home</Link>
            </li>
            <li>
                <Link to={`${url}/orders`}>Orders</Link>
            </li>
            <li>
                <Link to={`${url}/products`}>Product</Link>
            </li>
        </ul>

      </nav>

       <Box mt={10}>
        <Routes>
            <Route exact path={path}  element={ <Home />}> </Route>  
            <Route path={`${path}/orders` }  element={ <Orders />}> </Route>
            <Route exact path={`${path}/products` }  element={ <Products />}> </Route>    
            <Route path={`${path}/products/:product_id` }  element={ <ProductDetail />}> </Route>
            <Route path={`${path}/products/new` }  element={ <NewProduct />}> </Route>      
        </Routes>
      </Box> 
    </div>
  )
}

export default Admin
