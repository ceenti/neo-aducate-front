import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../icons/home.svg"
import { ReactComponent as SchoolIcon } from "../../icons/school.svg"
import { ReactComponent as MultimediaIcon } from "../../icons/multimedia.svg"

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard"><HomeIcon/> Home</Link>
        </li>
        <li>
          <Link to="/dashboard/schools"><SchoolIcon/> Escuelas</Link>
        </li>
        <li>
          <Link to="/dashboard/students"><MultimediaIcon /> Contenido</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
