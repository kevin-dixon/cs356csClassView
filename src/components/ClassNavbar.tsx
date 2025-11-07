import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@heroui/react";

export const ClassNavbar = () => {

    return (
        <Navbar>
            <NavbarBrand>
                <h1>BYU CS Classes — Visual Map</h1>
            </NavbarBrand>
            <NavbarContent justify="start">
                <NavbarItem>
                    <Link color="foreground" href="/">
                    Programs
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/classes">
                    Classes
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
