import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";

import {CartDropdown} from "./components/CartDropdown/CartDropdown";
import {HeaderContainer} from "./Header.styles";
import {Logo} from "./Header.styles";
import {CartIcon} from "./components/CartIcon/CartIcon";

export const Header = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen((prev) => !prev);
    }

    const closeCart = useCallback(() => {
        setCartOpen(false)
    }, []);

    return (
        <HeaderContainer>
            <Link to="/">
                <Logo>Simple online shop</Logo>
            </Link>

            <CartIcon toggleCart={toggleCart} />

            {cartOpen && <CartDropdown onClose={closeCart} />}
        </HeaderContainer>
    );
};
