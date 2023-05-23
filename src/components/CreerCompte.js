import React from 'react'

const CreerCompte = () => {
  return (
   
    <div className="authentication-bg min-vh-100">
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="d-flex flex-column min-vh-100 px-3 pt-4">
          <div className="row justify-content-center my-auto">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Créer un compte</h5>
                  </div>
                  <div className="p-2 mt-4">
                    <form action="index.html">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">Nom</label>
                        <input type="text" className="form-control" id="username" placeholder="Entrer le nom" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="username">Prénom</label>
                        <input type="text" className="form-control" id="username" placeholder="Entrer le prénom" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="useremail">Email</label>
                        <input type="email" className="form-control" id="useremail" placeholder="Entrer l'email" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="userpassword">Password</label>
                        <input type="password" className="form-control" id="userpassword" placeholder="Mot de passe" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="userphone">Téléphone</label>
                        <input type="text" className="form-control" id="userphone" placeholder="Téléphone" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="userrole">Rôle</label>
                        <select className="form-select" id="userrole">
                          <option value="normal">Utilisateur normal</option>
                          <option value="owner">Propriétaire</option>
                        </select>
                      </div>

                      <div className="mt-3 text-end">
                        <button className="btn btn-primary w-sm waves-effect waves-light" type="submit">S'inscrire</button>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-muted mb-0">
                          <a href="auth-login.html" className="fw-medium text-primary">Se connecter</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreerCompte