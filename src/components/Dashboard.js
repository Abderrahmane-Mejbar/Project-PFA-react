import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 



const Dashboard = () => {
  return (
    <div id="layout-wrapper">
      <Header />
      <Navbar />
      {/* Start right Content here */}
      <div className="main-content">
      
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
                        Application de Gestion des Examens
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* End page title */}
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="avatar">
                      <span className="avatar-title bg-primary-subtle rounded">
                        <i className="fas fa-user-graduate text-primary font-size-24"></i>
                      </span>
                    </div>
                    <p className="text-muted mt-4 mb-0">Total des étudiants</p>
                    <h4 className="mt-1 mb-0">
                      0{' '}
                     
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="avatar">
                      <span className="avatar-title bg-primary-subtle rounded">
                        <i className="fas fa-user-friends text-primary font-size-24"></i>
                      </span>
                    </div>
                    <p className="text-muted mt-4 mb-0">Total des professeurs</p>
                    <h4 className="mt-1 mb-0">
                      0{' '}
                      
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="avatar">
                      <span className="avatar-title bg-primary-subtle rounded">
                        <i className="fas fa-file-alt text-primary font-size-24"></i>
                      </span>
                    </div>
                    <p className="text-muted mt-4 mb-0">Total des matières</p>
                    <h4 className="mt-1 mb-0">
                      0{' '}
                     
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="avatar">
                      <span className="avatar-title bg-primary-subtle rounded">
                        <i className="fas fa-edit  text-primary font-size-24"></i>
                      </span>
                    </div>
                    <p className="text-muted mt-4 mb-0">
                      Total examens du jour
                    </p>
                    <h4 className="mt-1 mb-0">
                      1045{''}
                     
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-body">
                      <FullCalendar
                                    plugins={[ dayGridPlugin ]}
                                    initialView="dayGridMonth"
                                    weekends={false}
                                    events={[
                                        { title: 'Examen de Java', date: '2023-05-19' },
                                        { title: 'Examen de Oracle', date: '2023-05-22' }
                                    ]}
                                    />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End container-fluid */}
       
       
        {/* End Page-content */}
        <Footer />
      </div>
      {/* End main content */}
    </div>
  )
}

export default Dashboard