import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 
const Calendrier = () => {
  return (
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
                        Calendrier des examens
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
        </div>
        {/* End Page-content */}
        <Footer />
      </div>
      {/* End main content */}
    </div>
  )
}

export default Calendrier