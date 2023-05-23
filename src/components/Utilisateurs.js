import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Utilisateurs = () => {
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
                        <a href="javascript: void(0);">PFA</a>
                      </li>
                      <li className="breadcrumb-item active">
                         Liste des utilisateurs         
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
                        <a href="" class="btn btn-warning pull-right"> Ajouter un utilisateur</a>

                        <table class="table tbale-bordered table-striped">
                            <thead>
                                <tr>
                                    <td>Nom</td>
                                    <td>Prénoms</td>
                                    <td>Email</td>
                                    <td>Type utilisateurs</td>
                                    <td>Téléphone</td>
                                    <td>Modifier</td>
                                    <td>Supprimer</td>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td>ALAOU</td>
                                    <td>
                                        Mohamed
                                    </td>
                                    <td>med@gmail.com</td>
                                    <td>Type utilisateurs</td>
                                    <td>084389433</td>
                                    <td>Modifier</td>
                                    <td>Supprimer</td>
                                </tr>
                            </tbody>
                        </table>

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

export default Utilisateurs