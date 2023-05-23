import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
const FormulaireUtilisateur = () => {
  return (
    <div>
    <div id="layout-wrapper">
          <Header />
          <Navbar />
          {/* Start right Content here */}
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                {/* Start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                      <h4 className="mb-0">Application de Gestion des Examens</h4>
                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item">
                            <a href="javascript: void(0);">Layouts</a>
                          </li>
                          <li className="breadcrumb-item active">
                            Ajout d'un nouveau utilisateur     
                         </li>
    
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End page title */}
                <div className="row">
                  
                 
                  
                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="card">
                          <div className="card-body">
                           
                            <div className="col-lg-12">
                                <div className="mt-4 mt-xl-0">
                                    <h5 className="font-size-14 mb-4">
                                    <i className="mdi mdi-arrow-right text-rimary me-1"></i> Formulaire d'ajout d'utilisateur
                                    </h5>
                                    <form>
                                   

                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="formrow-email-input">
                                            Nom:
                                            </label>
                                            <input
                                            type="nom"
                                            className="form-control"
                                            placeholder="Entrez le nom"
                                            id="formrow-email-input"
                                            />
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="formrow-password-input">
                                            Prénoms:
                                            </label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Entrez les prénoms de l'utilisateur"
                                            id="formrow-password-input"
                                            />
                                        </div>
                                        </div>

                                        <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="formrow-email-input">
                                            Email:
                                            </label>
                                            <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Entrez l'email"
                                            id="formrow-email-input"
                                            />
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="formrow-password-input">
                                            Téléphone:
                                            </label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Entrez votre numéro de téléphone"
                                    
                                            />
                                        </div>
                                        </div>

                                        <div className="col-md-12">
                                        <div className="mb-3">
                                        <div className="mb-3">
                      
                                        <label className="form-label" htmlFor="userrole">Rôle</label>
                                        <select className="form-select" id="userrole">
                                          <option value="normal">Utilisateur normal</option>
                                          <option value="owner">Propriétaire</option>
                                        </select>
                                        </div>
                                                            
                                
    
                                        </div>
                                        </div>
                                        <div className="col-md-5">
                                          <div>
                                        
                                        </div>
                                        </div>

                                    </div>

                                    

                                    <div className="mt-4">
                                        <button type="submit" className="btn btn-primary w-md">
                                        Enregistrer
                                        </button>
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
              </div>
              {/* End container-fluid */}
            </div>
            {/* End Page-content */}
            <Footer />
          </div>
          {/* End main content */}
        </div>
    
    
        </div>
  )
}

export default FormulaireUtilisateur