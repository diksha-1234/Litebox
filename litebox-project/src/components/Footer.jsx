import React from "react";
export default function Footer() {
    return (
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} LiteBox. All rights reserved.
      </footer>
    );
  }