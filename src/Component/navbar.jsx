import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    // NavBtnLink,
} from './NavbarElements.jsx';


const Navbar = () => {

    console.log("dsjhhxs", NavLink)
    return (
        <>
            <Nav>
                <Bars />

                <NavBtn>
                    <NavLink to='/home' activeStyle>
                        {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
                        dFuse
                    </NavLink>
                </NavBtn>

                <NavMenu>

                    <NavLink
                        to={{
                            pathname: '/home',
                            hash: '#HowItWorks',
                            state: { isAdmin: true }
                        }}
                        activeStyle
                    >
                        About
                    </NavLink>

                    <NavLink
                        to={{
                            pathname: '/home',
                            hash: '#Strategies',
                            state: { isAdmin: true }
                        }}
                        activeStyle
                    >
                        Strategies
                    </NavLink>

                    <NavLink
                        to={{
                            pathname: '/home',
                            hash: '#Risk_Parity',
                            state: { isAdmin: true }
                        }}
                        activeStyle
                    >
                        Risk Parity
                    </NavLink>

                    <NavLink
                        to={{
                            pathname: '/home',
                            hash: '#Tokenomics',
                            state: { isAdmin: true }
                        }}
                        activeStyle
                    >
                        Tokenomics
                    </NavLink>
                    <NavLink
                        to={{
                            pathname: '/home',
                            hash: '#Teams',
                            state: { isAdmin: true }
                        }}
                        activeStyle
                    >
                        Teams
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
