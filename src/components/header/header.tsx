"use client";

import styles from "@/components/header/header.module.css";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  primary,
  secondary,
  textPrimary,
  textSecondary,
} from "../../../constants/colors";
import { cn } from "../../../lib/utils";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes somos", href: "/quienes-somos" },
    { name: "Qué ofrecemos", href: "/que-ofrecemos" },
    { name: "Objetivos", href: "/objetivos" },
    { name: "Misión y Visión", href: "/mision-vision" },
    { name: "Valores", href: "/valores" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header
      className="fixed top-0 z-50 w-full border-b shadow-sm"
      style={{ backgroundColor: "#FFFBF0" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <div className="flex h-full w-full items-center justify-center">
                  <Image src={"/logo.jpeg"} alt="logo" fill />
                </div>
              </div>
              <span
                className="ml-2 text-xl font-bold"
                style={{ color: textPrimary }}
              >
                A.U.R.A
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:underline"
                    style={{
                      color: textSecondary,
                      textDecorationColor: primary,
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2"
              style={{ color: textPrimary }}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}
        style={{ backgroundColor: secondary }}
      >
        <div className="space-y-1 px-4 pb-3 pt-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block rounded-md px-3 py-2 text-base font-medium ${styles.linkHover}`}
              style={{ color: "white" }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
