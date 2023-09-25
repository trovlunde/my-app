import React from "react";
import { Nav, NavLink, NavMenu }
    from "./types/navbarElements";
 
const Navbar = () => {
    const handleNavbarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // Prevent the event from reaching the container
        // Handle other navbar actions
      };
    return (
        <>
            <Nav>
                <NavMenu onClick={handleNavbarClick}>
                    <NavLink  to="/PopupTesting">
                    PopupTesting
                    </NavLink>
                    <NavLink to="/RandomUserDisp">
                    RandomUserDisp
                    </NavLink>
                    <NavLink to="/FancyAnimal">
                    FancyAnimal
                    </NavLink>
                    <NavLink to="/Logo">
                    Logo
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;