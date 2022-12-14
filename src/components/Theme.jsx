import React, { useState, useEffect } from "react";
import {BiSun} from 'react-icons/bi'
import {BsMoonStars} from 'react-icons/bs'

function Theme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? " default theme"
      : localStorage.getItem("theme")
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      // statement

      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    } else if (localStorage.getItem("theme") != null) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // localStorage.setItem('theme', 'light')
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  localStorage.setItem("theme", theme);

  return (
    <>
      <div className="capitalize hover:cursor-pointer" onClick={handleThemeSwitch}>
        {theme === "light" ? <BiSun size='1.5em' className='text-yellow-400 hover:animate-spin duration-700'/> : <BsMoonStars size='1em' className='text-white'/>}
      </div>
    </>
  );
}

export default Theme;
