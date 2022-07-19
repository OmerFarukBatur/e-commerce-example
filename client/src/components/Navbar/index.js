import styles from "./styles.module.css";
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

function Navbar() {

    const { loggedIn, user } = useAuth();
    const { items } = useBasket();
    

  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.logo}>
                <Link to='/'>e-Commerce</Link>
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link to='/'>Products</Link>
                </li>
            </ul>
        </div>
        <div className={styles.right}>
            {
                !loggedIn && (
                    <>
                        <Link to='/signin'>
                            <Button colorScheme='blue'>Login</Button>
                        </Link>
                        <Link to='/signup'>
                            <Button colorScheme='pink'>Register</Button>
                        </Link>  
                    </>
                )
            }  

            {
                
                user?.role === "admin" && (
                    <Link to="admin/">
                        <Button colorScheme="pink" variant="ghost">
                            Admin
                        </Button>
                    </Link>
                )
            }

            {
                loggedIn && (
                    <>
                        {
                            items.lenght > 0 && (
                                <Link to="/basket">
                                    <Button colorScheme="pink" variant="outline">
                                        Basket ({items.lenght})
                                    </Button>
                                </Link>
                            )
                        }

                        <Link to='/profile'>
                            <Button colorScheme='blue'>Profile</Button>
                        </Link>
                    </>
                )
            }           


        </div>          
        </nav>
  )
}

export default Navbar
