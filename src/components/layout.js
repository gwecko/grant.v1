import React from "react";
import * as Styles from '../styles/style.module.css';
import Navbar from './navbar';


const Layout = ({children}) => {
    return (
        <div>
            <title>Grant Wecker</title>
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout;