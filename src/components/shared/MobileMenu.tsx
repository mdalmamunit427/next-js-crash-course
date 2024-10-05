"use client"

import React, { useState } from "react";
import { Button } from "../ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="lg:hidden">
      <Button onClick={toggleMenu} variant="outline">
        {isMenuOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </Button>
    </div>
  );
};

export default MobileMenu;
