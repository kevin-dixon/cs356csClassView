import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@heroui/react";

export const ClassNavbar = () => {

    return (
        <Navbar className="border-b border-solid border-2 border-[#eee] bg-[#fafafa] navbar-container max-w-[2048] gap-4">
            <NavbarBrand className="grow-[0.5] navbar-brand">
                <Link color="foreground" className="font-bold text-xl" href="/">
                    BYU CS Classes — Visual Map
                </Link>
            </NavbarBrand>
            <NavbarContent className="gap-16">
                <NavbarItem data-justify>
                    <Link color="foreground" href="/">
                    Programs
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color="foreground" href="/classes">
                    Classes
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
