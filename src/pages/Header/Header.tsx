import React from "react";
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

import {useCart} from "../../common/contexts/CartProvider/CartContext";

import {CartDropdown} from "./components/CartDropdown/CartDropdown";
import {HeaderContainer} from "./Header.styles";
import {PageWrapper} from "./Header.styles";
import {Logo} from "./Header.styles";
import {CartIcon} from "./components/CartIcon/CartIcon";
export const Header: React.FC = () => {
    const [state] = useCart();

    return (
        <PageWrapper>
            <HeaderContainer>
                <Link to="/">
                    <Logo>Simple online shop</Logo>
                </Link>
                <CartIcon />
                {state.isCartShown && <CartDropdown />}
            </HeaderContainer>
            <Outlet />
        </PageWrapper>
    );
};