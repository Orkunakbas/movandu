"use client";
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
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [marginTopClass, setMarginTopClass] = useState("mt-40");
  const [logoWidth, setLogoWidth] = useState(250); // Başlangıç genişliği 250

  // Scroll eventini takip eden useEffect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Scroll Y konumuna göre className ve genişlik değiştir
      if (window.scrollY > 50) {
        setMarginTopClass("mt-5");
        setLogoWidth(160); // Scroll sonrası genişliği küçült
      } else {
        setMarginTopClass("mt-40");
        setLogoWidth(250); // Başlangıçta genişliği geri getir
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup işlemi, component unmount olursa event listener kaldırılır
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          width={logoWidth}// İstediğin genişlik
          height={150}
          className={`${marginTopClass} transition-all duration-500 ease-in-out will-change-transform`} 
        />
      </NavbarBrand>

      {/* Sağdaki butonlar */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
       
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
