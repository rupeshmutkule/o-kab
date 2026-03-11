"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const openMenu = () => setMobileMenuOpen(true);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu((prev) => (prev === name ? null : name));
  };

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── MOBILE TOP HEADER ── */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 bg-white h-14"
        style={{ zIndex: 300, boxShadow: "0 1px 8px rgba(0,0,0,0.10)" }}
      >
        <div className="flex items-center justify-between px-4 h-full">
          {/* Hamburger */}
          <button
            type="button"
            onClick={openMenu}
            className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
            aria-label="Open menu"
          >
            <i className="fa fa-bars text-lg"></i>
          </button>

          {/* Centered Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="absolute left-1/2 top-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <img
              src="/images/okab_ecommerce_logo.png"
              alt="Okab Logo"
              style={{ height: "28px", width: "auto", objectFit: "contain", maxWidth: "90px" }}
            />
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
            >
              <i className="fa fa-search text-base"></i>
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
              style={{ position: "relative" }}
            >
              <i className="fa fa-shopping-cart text-base"></i>
              <span
                className="absolute bg-red-500 text-white rounded-full flex items-center justify-center font-bold"
                style={{ fontSize: "9px", width: "15px", height: "15px", top: "4px", right: "4px", lineHeight: 1 }}
              >
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── OVERLAY ── */}
      {/* Rendered only when open so it never blocks clicks when closed */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0"
          style={{ zIndex: 400, background: "rgba(0,0,0,0.5)" }}
          onClick={closeMenu}
        />
      )}

      {/* ── DRAWER ── */}
      {/* Uses CSS class-based open/close — NOT inline transform — 
          so globals.css transform:none cannot override it */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-white overflow-y-auto mobile-drawer${mobileMenuOpen ? " mobile-drawer--open" : ""}`}
        style={{ zIndex: 500, width: "80%", maxWidth: "300px", boxShadow: "4px 0 24px rgba(0,0,0,0.15)" }}
      >
        {/* ── Drawer Header ── */}
        <div
          className="flex items-center justify-between bg-white"
          style={{
            padding: "18px 20px",
            borderBottom: "1px solid #f0f0f0",
            position: "sticky",
            top: 0,
            zIndex: 501,
          }}
        >
          <Link href="/" onClick={closeMenu}>
            <img
              src="/images/okab_ecommerce_logo.png"
              alt="Okab Logo"
              style={{ height: "28px", width: "auto", objectFit: "contain", maxWidth: "90px" }}
            />
          </Link>

          {/* Close Button */}
          <button
            type="button"
            onClick={closeMenu}
            className="flex items-center justify-center rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors"
            style={{ width: "40px", height: "40px", border: "none", background: "transparent", cursor: "pointer", flexShrink: 0 }}
            aria-label="Close menu"
          >
            <i className="fa fa-times" style={{ fontSize: "18px", pointerEvents: "none" }}></i>
          </button>
        </div>

        {/* ── Contact Info ── */}
        <div style={{ background: "#f8fffe", borderBottom: "1px solid #e8f8f7", padding: "14px 20px" }}>
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-3 text-gray-600 hover:text-cyan-500 transition-colors"
            style={{ padding: "6px 0" }}
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full text-cyan-500" style={{ background: "#e6faf9", fontSize: "12px", flexShrink: 0 }}>
              <i className="fa fa-map-marker" style={{ pointerEvents: "none" }}></i>
            </span>
            <span style={{ fontSize: "12.5px" }}>Bluett Avenue Seaview USA</span>
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-3 text-gray-600 hover:text-cyan-500 transition-colors"
            style={{ padding: "6px 0" }}
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full text-cyan-500" style={{ background: "#e6faf9", fontSize: "12px", flexShrink: 0 }}>
              <i className="fa fa-phone" style={{ pointerEvents: "none" }}></i>
            </span>
            <span style={{ fontSize: "12.5px" }}>+213 2020 555013</span>
          </a>
        </div>

        {/* ── Nav Links ── */}
        <nav style={{ padding: "8px 0" }}>

          {/* Home */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center justify-between hover:bg-gray-50 transition-colors"
            style={{ padding: "14px 20px", borderBottom: "1px solid #f5f5f5" }}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg text-cyan-500" style={{ background: "#e6faf9", fontSize: "13px", flexShrink: 0 }}>
                <i className="fa fa-home" style={{ pointerEvents: "none" }}></i>
              </span>
              <span className="text-gray-800 font-medium" style={{ fontSize: "14px" }}>Home</span>
            </div>
            <i className="fa fa-chevron-right text-gray-300" style={{ fontSize: "10px" }}></i>
          </Link>

          {/* Shop with Submenu */}
          <div style={{ borderBottom: "1px solid #f5f5f5" }}>
            <button
              type="button"
              onClick={() => toggleSubmenu("shop")}
              className="w-full flex items-center justify-between hover:bg-gray-50 transition-colors"
              style={{ padding: "14px 20px", border: "none", background: "transparent", cursor: "pointer" }}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg text-cyan-500" style={{ background: "#e6faf9", fontSize: "13px", flexShrink: 0 }}>
                  <i className="fa fa-tag" style={{ pointerEvents: "none" }}></i>
                </span>
                <span className="text-gray-800 font-medium" style={{ fontSize: "14px" }}>Shop</span>
              </div>
              <i
                className="fa fa-chevron-down text-gray-400"
                style={{
                  fontSize: "10px",
                  transition: "transform 0.25s ease",
                  display: "inline-block",
                  pointerEvents: "none",
                  ...(activeSubmenu === "shop" ? { transform: "rotate(180deg)" } : {}),
                }}
              ></i>
            </button>

            {activeSubmenu === "shop" && (
              <div style={{ background: "#fafafa", borderTop: "1px solid #f0f0f0" }}>
                {["2 Columns", "3 Columns", "4 Columns", "List View", "Cart", "Wishlist", "Checkout"].map((item, i, arr) => (
                  <Link
                    key={item}
                    href={item === "Checkout" ? "/checkout" : "#"}
                    onClick={closeMenu}
                    className="flex items-center gap-3 hover:bg-gray-100 transition-colors"
                    style={{
                      padding: "11px 20px 11px 52px",
                      borderBottom: i < arr.length - 1 ? "1px solid #f0f0f0" : "none",
                      fontSize: "13px",
                      color: "#555",
                    }}
                  >
                    <span style={{ color: "#00cfc1", fontSize: "6px", lineHeight: 1, pointerEvents: "none" }}>●</span>
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining nav items */}
          {[
            { label: "Product Details", icon: "fa-cube",          href: "#" },
            { label: "My Account",      icon: "fa-user",          href: "#" },
            { label: "Cart",            icon: "fa-shopping-cart", href: "#" },
            { label: "Checkout",        icon: "fa-credit-card",   href: "/checkout" },
            { label: "Contact Us",      icon: "fa-envelope",      href: "#" },
          ].map(({ label, icon, href }) => (
            <Link
              key={label}
              href={href}
              onClick={closeMenu}
              className="flex items-center justify-between hover:bg-gray-50 transition-colors"
              style={{ padding: "14px 20px", borderBottom: "1px solid #f5f5f5" }}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg text-cyan-500" style={{ background: "#e6faf9", fontSize: "13px", flexShrink: 0 }}>
                  <i className={`fa ${icon}`} style={{ pointerEvents: "none" }}></i>
                </span>
                <span className="text-gray-800 font-medium" style={{ fontSize: "14px" }}>{label}</span>
              </div>
              <i className="fa fa-chevron-right text-gray-300" style={{ fontSize: "10px" }}></i>
            </Link>
          ))}
        </nav>

        {/* ── Bottom Account Section ── */}
        <div style={{ margin: "16px 16px 32px", borderRadius: "14px", background: "#f8fffe", border: "1px solid #e0f7f5", overflow: "hidden" }}>
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-3 hover:bg-cyan-50 transition-colors"
            style={{ padding: "14px 16px", borderBottom: "1px solid #e0f7f5" }}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg text-cyan-500" style={{ background: "#e6faf9", fontSize: "14px", flexShrink: 0 }}>
              <i className="fa fa-user-circle" style={{ pointerEvents: "none" }}></i>
            </span>
            <span className="text-gray-700 font-medium" style={{ fontSize: "13.5px" }}>My Account</span>
          </a>
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-3 hover:bg-cyan-50 transition-colors"
            style={{ padding: "14px 16px" }}
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg text-cyan-500" style={{ background: "#e6faf9", fontSize: "14px", flexShrink: 0 }}>
              <i className="fa fa-heart" style={{ pointerEvents: "none" }}></i>
            </span>
            <span className="text-gray-700 font-medium" style={{ fontSize: "13.5px" }}>Wishlist</span>
          </a>
        </div>
      </div>

      {/* Spacer so page content clears the fixed header */}
      <div className="md:hidden" style={{ height: "56px" }}></div>
    </>
  );
}
