import React from 'react';
import {Products} from "./pages/Products/Products";
import GlobalStyle from "./globalStyles";

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Products></Products>
        </div>
    );
}

export default App;
