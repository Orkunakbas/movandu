import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "./logo.png"; // Logoyu import ettik

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        {/* Mobil menü için toggle butonu */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        {/* Sol menüler */}
        <div className="hidden sm:flex gap-4">
          <NavbarItem>
            <Link className="header-item" href="#">
            Unsere Fahrzeuge
            </Link>
          </NavbarItem>
          <NavbarItem >
          <Link className="header-item" href="#">
            Umzug berechnen
            </Link>
          </NavbarItem>
          <NavbarItem>
          <Link className="header-item" href="#">
            Geschäftsadresse
            </Link>
          </NavbarItem>
    
        </div>
      </NavbarContent>

      {/* Orta logo */}
      <NavbarBrand className="flex justify-center w-full sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <Image
          src={logo} // Import ettiğimiz logoyu src olarak kullanıyoruz
          alt="Logo"
          width={200} // İstediğin genişlik
          height={150}
          className="mt-40"
        />
      </NavbarBrand>

      {/* Sağdaki butonlar */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button className="header-button" disableRipple="true"  href="#" color="primary" variant="shadow">
            Prices
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobil menü */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
