'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLinks() {
  const pathname = usePathname();
  
  const navbarLinks = [
    { name: "About", path: "/about" },
    // { name: "Alumni Directory", path: "/alumni-directory" },
    { name: "Employed", path: "/employed" },
    { name: "Unemployed", path: "/unemployed" },
    { name: "Self Employed", path: "/selfemployed" },
    // { name: "Alumni Details", path: "/alumuni-details" },
    // { name: "Events", path: "/events" },
    // { name: "Job Board", path: "/jobs" },
    // { name: "Alumni Stories", path: "/stories" },
    // { name: "Contact", path: "/contact" },
  ];

  const optionalLinks = [
    { name: "Blog", path: "/blog" },
    { name: "Support/Help", path: "/help" },
    { name: "Donate", path: "/donate" }
  ];

  return (
    <>
      {navbarLinks.map((link, i) => {
        const isActive = pathname === link.path;
        return (
          <Link 
            key={i} 
            href={link.path} 
            className={`font-medium text-gray-900 transition-all duration-200 text-base rounded focus:outline-none hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 ${isActive ? 'underline' : ''}`}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
