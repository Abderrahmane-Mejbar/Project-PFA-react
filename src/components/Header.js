import React from 'react'

const Header = () => {
  return (
    <div className="navbar-header">
      <div className="d-flex">    
        <button type="button" className="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn">
          <i className="fa fa-fw fa-bars"></i>
        </button>

        
      </div>

      <div className="d-flex">
        <div className="dropdown d-inline-block">
          <button
            type="button"
            className="btn header-item user text-start d-flex align-items-center"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              className="rounded-circle header-profile-user"
              src="assets/images/users/avatar-1.jpg"
              alt="Header Avatar"
            />
          </button>
          <div className="dropdown-menu dropdown-menu-end pt-0">
            <a className="dropdown-item" href="contacts-profile.html">
              <i className="bx bx-user-circle text-muted font-size-18 align-middle me-1"></i>{' '}
              <span className="align-middle">Mon compte</span>
            </a>

            <a className="dropdown-item" href="auth-lock-screen.html">
              <i className="bx bx-lock text-muted font-size-18 align-middle me-1"></i>{' '}
              <span className="align-middle">Mon profil</span>
            </a>
            <a className="dropdown-item" href="auth-logout.html">
              <i className="bx bx-log-out text-muted font-size-18 align-middle me-1"></i>{' '}
              <span className="align-middle">Déconnexion</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header