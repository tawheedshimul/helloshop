import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-700 py-6">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <p className="text-sm">
          Designed with ❤️ using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
