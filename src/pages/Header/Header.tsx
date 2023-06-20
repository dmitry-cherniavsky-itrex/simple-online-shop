import React from "react";
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

import {HeaderContainer} from "./Header.styles";
import {PageWrapper} from "./Header.styles";
import {Logo} from "./Header.styles";
export const Header: React.FC = () => {
    return (
        <PageWrapper>
            <HeaderContainer>
                <Link to="/">
                    <Logo>Simple online shop</Logo>
                </Link>
            </HeaderContainer>
            <Outlet />
        </PageWrapper>
    );
};