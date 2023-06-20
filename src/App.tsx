import React from 'react';

import {Route, Routes} from "react-router-dom";

import {Header} from "./pages/Header/Header";
import {Products} from "./pages/Products/Products";
import {Checkout} from "./pages/Checkout/Checkout";
import GlobalStyle from "./globalStyles";
import {CartProvider} from "./common/contexts/CartProvider/CartContext";

function App() {
    return (
        <>
            <GlobalStyle/>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element={<Products/>}/>
                        <Route path="checkout" element={<Checkout/>}/>
                    </Route>
                </Routes>
            </CartProvider>
        </>
    );
}

export default App;
