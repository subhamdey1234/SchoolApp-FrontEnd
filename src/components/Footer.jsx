import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-6 px-4 bottom-0 absolute w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} EduSchool. All rights reserved. @Subham Dey
        </p>

        <p className="text-sm text-center mt-4 sm:mt-0">
          Contact us:{" "}
          <a href="tel:+1234567890" className="text-red-500 hover:underline">
            +91 9777837744
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
