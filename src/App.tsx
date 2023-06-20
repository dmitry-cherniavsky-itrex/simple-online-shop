import {Route, Routes, Navigate} from "react-router-dom";

import {Header} from "./pages/Header/Header";
import {Products} from "./pages/Products/Products";
import {Checkout} from "./pages/Checkout/Checkout";
import {Confirmation} from "./pages/Confirmation/Confirmation";
import {CartProvider} from "./common/contexts/CartProvider/CartContext";

import {PageWrapper} from "./App.styles";
import GlobalStyle from "./globalStyles";

function App() {
    return (
        <>
            <GlobalStyle />
            <CartProvider>
                <PageWrapper>
                    <Header />

                    <Routes>
                        <Route index element={<Products />}/>
                        <Route path="checkout" element={<Checkout />}/>
                        <Route path="confirmation" element={<Confirmation />}/>
                        <Route path='*' element={<Navigate to="/" replace />} />
                    </Routes>
                </PageWrapper>
            </CartProvider>
        </>
    );
}

export default App;
