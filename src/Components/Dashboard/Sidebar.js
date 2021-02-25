import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../icons/home.svg"
import { ReactComponent as SchoolIcon } from "../../icons/school.svg"
import { ReactComponent as MultimediaIcon } from "../../icons/multimedia.svg"
import { ReactComponent as BadgeIcon } from "../../icons/badge.svg"
import logo from './../../assets/images/logo-neo.svg'

function Sidebar() {
  return (
    <div className="sidebar">
      <img style={{width:"80px", margin: "10px"}} src={logo} />
      <ul>
        <li>
          <Link to="/"><HomeIcon/> Home</Link>
        </li>
        <li>
          <Link to="/dashboard/schools"><SchoolIcon/> Escuelas</Link>
        </li>
        <li>
          <Link to="/dashboard/statistics"><SchoolIcon/> Estadísticas</Link>
        </li>
        <li>
          <Link to="/dashboard/students"><MultimediaIcon /> Contenido</Link>
        </li>
        <li>
          <Link to="/dashboard/memberships"><BadgeIcon /> Membresías</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
