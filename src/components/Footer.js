import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-gray-900 p-7 container  mx-auto text-teal-500 tracking-wider   border-t border-dashed border-teal-800 text-md">
      <p>&copy;{new Date().getFullYear()} Todo app. all rights reserved</p>
    </footer>
  );
};

export default Footer;
