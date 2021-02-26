import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../icons/home.svg"
import { ReactComponent as SchoolIcon } from "../../icons/school.svg"
import { ReactComponent as MultimediaIcon } from "../../icons/multimedia.svg"
import { ReactComponent as BadgeIcon } from "../../icons/badge.svg"
import { ReactComponent as MenuIcon } from "../../icons/menu.svg"
import { ReactComponent as UserIcon } from "../../icons/user.svg"
import logo from './../../assets/images/logo-neo.svg'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="sidebar d-none d-md-block">
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
            <Link to="/dashboard/students"><UserIcon /> Estudiantes</Link>
          </li>
          <li>
            <Link to="/dashboard/memberships"><BadgeIcon /> Membresías</Link>
          </li>
        </ul>
      </div>

      <div className="sidebar d-md-none">
        <div className="text-right mb-2">
          <Button className="btn-pink" onClick={toggleHandler}><MenuIcon /></Button>
        </div>
        { isOpen &&
          <ul class="mobile-menu">
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
              <Link to="/dashboard/students"><UserIcon/> Estudiantes</Link>
            </li>
            <li>
              <Link to="/dashboard/memberships"><BadgeIcon /> Membresías</Link>
            </li>
          </ul>
        }
      </div>
    </>
  )
}

export default Sidebar;
