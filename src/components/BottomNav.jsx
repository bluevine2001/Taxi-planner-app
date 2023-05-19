import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const BottomNav = () => {
  const [homeActive, setHomeActive] = useState(false);
  const [contactsActive, setContactsActive] = useState(false);
  const [coursesActive, setCoursesActive] = useState(true);
  const [repertoireActive, setRepertoireActive] = useState(false);
  const navigate = useNavigate();

  const homeClick = () => {
    setHomeActive(true);
    setContactsActive(false);
    setCoursesActive(false);
    setRepertoireActive(false);
    navigate("/dashboard");
  };

  const contactsClick = () => {
    setHomeActive(false);
    setContactsActive(true);
    setCoursesActive(false);
    setRepertoireActive(false);
    navigate("/contacts");
  };

  const coursesClick = () => {
    setHomeActive(false);
    setContactsActive(false);
    setCoursesActive(true);
    setRepertoireActive(false);
    navigate("/");
  };

  const repertoireClick = () => {
    setHomeActive(false);
    setContactsActive(false);
    setCoursesActive(false);
    setRepertoireActive(true);
    navigate("/repertoire");
  };
  return (
    <div>
      <div className="btm-nav">
        {}
        <button
          className={coursesActive ? "active" : ""}
          onClick={coursesClick}
        >
          <i
            className={
              coursesActive ? "text-cyan-500 fas fa-car" : "fas fa-car"
            }
          ></i>
        </button>
        <button
          className={contactsActive ? "active" : ""}
          onClick={contactsClick}
        >
          <i
            className={
              contactsActive
                ? "text-cyan-500 fas fa-user-friends"
                : "fas fa-user-friends"
            }
          ></i>
        </button>
        <button
          className={repertoireActive ? "active" : ""}
          onClick={repertoireClick}
        >
          <i
            className={
              repertoireActive
                ? "text-cyan-500 fas fa-folder-open"
                : "fas fa-folder-open"
            }
          ></i>
        </button>
        <button className={homeActive ? "active" : ""} onClick={homeClick}>
          <i
            className={homeActive ? "text-cyan-500 fas fa-home" : "fas fa-home"}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
