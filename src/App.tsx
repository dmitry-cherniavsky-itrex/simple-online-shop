import React from 'react';

import {Route, Routes} from "react-router-dom";

import {Header} from "./pages/Header/Header";
import {Products} from "./pages/Products/Products";
import {Checkout} from "./pages/Checkout/Checkout";
import GlobalStyle from "./globalStyles";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Products/>}/>
                    <Route path="checkout" element={<Checkout/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
