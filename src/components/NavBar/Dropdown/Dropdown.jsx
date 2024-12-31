"use client";
import React, { useState } from "react";
import style from "./dropdown.module.css";
import arrowDown from "../../../../public/assets/Images/arrow-down.svg";
import Image from "next/image";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("GBP");

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (currency) => {
    setSelected(currency);
    setIsOpen(false);
  };

  return (
    <div className={style.dropdown}>
      <button className={style.dropdownButton} onClick={handleToggle}>
        {selected}{" "}
        <Image
          src={arrowDown}
          alt="arrowDown"
          style={{ width: 15, height: 15 }}
        />
      </button>
      {isOpen && (
        <ul className={style.dropdownMenu}>
          {["GBP", "USD", "AED", "EGP"].map((currency) => (
            <li
              key={currency}
              onClick={() => handleSelect(currency)}
              style={{
                cursor: "pointer",
                backgroundColor: currency === selected ? "#d4a742" : "",
              }}
            >
              {currency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
