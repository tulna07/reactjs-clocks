import { useEffect, useState } from "react";

// Components
import AnalogClock from "./components/AnalogClock";
import { FaMoon, FaRegSun } from "react-icons/fa";

// Styles
import "./App.css";

export default function App() {
  const [date, setDate] = useState(new Date());

  const time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Theme>
      <AnalogClock time={time} />
    </Theme>
  );
}

function Theme({ children }) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const icons = theme === "dark" ? <FaRegSun /> : <FaMoon />;

  return (
    <div className={`app ${theme}`}>
      <button className="btn-toggle-theme" onClick={toggleTheme}>
        {icons}
      </button>
      {children}
    </div>
  );
}
