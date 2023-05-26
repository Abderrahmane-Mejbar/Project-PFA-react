import React from 'react'

const Navbar = () => {
  return (
    <div className="vertical-menu">
    <div className="navbar-brand-box">
     
      <a href="index.html" className="logo logo-light">
        <span className="logo-lg">
           <span className="logo-txt">PFA</span>
        </span>
        
      </a>
    </div>

   

    <div data-simplebar className="sidebar-menu-scroll">
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title" data-key="t-menu">
            Menu
          </li>

          <li>
            <a href="index.html">
              <i className="bx bx-tachometer icon nav-icon"></i>
              <span className="menu-item" data-key="t-dashboards">
                Tableau de bord
              </span>
            </a>
          </li>

          <li>
            <a href="apps-calendar.html">
              <i className="bx bx-copy-alt icon nav-icon"></i>
              <span className="menu-item" data-key="t-calendar">
                Gestion des matières
              </span>
            </a>
          </li>

          <li>
            <a href="apps-calendar.html">
              <i className="bx bx-infinite icon nav-icon"></i>
              <span className="menu-item" data-key="t-calendar">
                Gestion des filières
              </span>
            </a>
          </li>

          <li>
            <a href="apps-calendar.html">
              <i className="bx bx-card icon nav-icon"></i>
              <span className="menu-item" data-key="t-calendar">
                Gestion des Salles
              </span>
            </a>
          </li>

          <li>
            <a href="apps-calendar.html">
              <i className="bx bx-edit icon nav-icon"></i>
              <span className="menu-item" data-key="t-calendar">
                Gestion des examens
              </span>
            </a>
          </li>

          <li>
            <a href="apps-calendar.html">
              <i className="bx bx-calendar icon nav-icon"></i>
              <span className="menu-item" data-key="t-calendar">
                Calendrier des examens
              </span>
            </a>
          </li>

          <li>
            <a href="/Utilisateurs">
              <i className="bx bx-user-pin icon nav-icon"></i>
              <span className="menu-item" data-key="t-calendar">
                Liste des utilisateurs
              </span>
            </a>
          </li>
          
          <li>
            <a href="/FormulaireUtilisateur">
              <i className="bx bx-user-pin icon nav-icon"></i>
              <span className="menu-item" data-key="t-calendar">
                Gestion des utilisateurs
              </span>
            </a>
          </li>

        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar