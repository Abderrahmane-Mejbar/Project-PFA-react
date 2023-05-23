import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          2023 &copy; Emsi PFA.
        </div>
        <div className="col-sm-6">
          <div className="text-sm-end d-none d-sm-block">
            Application de Gestion des Examens <i className="mdi mdi-heart text-danger"></i> by{' '}
            <a href="" target="_blank" className="text-reset">
              AGE
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer