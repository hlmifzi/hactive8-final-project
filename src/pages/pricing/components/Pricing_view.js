import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBContainer } from "mdbreact";
import './css/landing_page_view.css'

class Pricing_view extends Component {

   render() {
      return (
         <MDBContainer>
            <section className="text-center my-5" >
               <h2 className="h1-responsive font-weight-bold text-center my-5">
                  Harga Undangan
                 </h2>
               <MDBRow>
                  <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                     <MDBCard>
                        <MDBCardBody>
                           <h5 className="mb-4">Basic plan</h5>
                           <div className="d-flex justify-content-center">
                              <div className="card-circle d-flex justify-content-center align-items-center">
                                 <MDBIcon icon="home" className="pink-text" />
                              </div>
                           </div>
                           <h2 className="font-weight-bold my-4">Rp 1000 / Orang</h2>
                           <p className="grey-text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Culpa pariatur id nobis accusamus deleniti cumque hic
                              laborum.
                 </p>
                           <MDBBtn rounded color="pink">
                              Buy now
                 </MDBBtn>
                        </MDBCardBody>
                     </MDBCard>
                  </MDBCol>
                  <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                     <MDBCard className="pink">
                        <MDBCardBody className="white-text">
                           <h5 className="mb-4">Premium plan</h5>
                           <div className="d-flex justify-content-center">
                              <div className="card-circle d-flex justify-content-center align-items-center">
                                 <MDBIcon icon="users" className="light-blue-text" />
                              </div>
                           </div>
                           <h2 className="font-weight-bold my-4">Rp 200,000 <br /> Paket : 500 Orang</h2>
                           <p>
                              Email Pengingat untuk orang yang diundang
                           </p>
                           <MDBBtn outline rounded color="white">
                              Buy now
                 </MDBBtn>
                        </MDBCardBody>
                     </MDBCard>
                  </MDBCol>
                  <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                     <MDBCard>
                        <MDBCardBody>
                           <h5 className="mb-4">Advanced plan</h5>
                           <div className="d-flex justify-content-center">
                              <div className="card-circle d-flex justify-content-center align-items-center">
                                 <MDBIcon far icon="chart-bar" className="pink-text" />
                              </div>
                           </div>
                           <h2 className="font-weight-bold my-4">Rp 300,000 <br /> Unlimited</h2>
                           <p className="grey-text">
                              Email Pengingat untuk orang yang diundang, Video Digital
                            </p>
                           <MDBBtn rounded color="pink">
                              Buy now
                           </MDBBtn>
                        </MDBCardBody>
                     </MDBCard>
                  </MDBCol>
               </MDBRow>
            </section>
            <section className="text-center my-5" >
               <h2 className="h1-responsive font-weight-bold text-center my-5">
                  Harga Rekanan
               </h2>
               <MDBRow>
                  <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                     <MDBCard>
                        <MDBCardBody>
                           <h5 className="mb-4">Basic plan</h5>
                           <div className="d-flex justify-content-center">
                              <div className="card-circle d-flex justify-content-center align-items-center">
                                 <MDBIcon icon="home" className="pink-text" />
                              </div>
                           </div>
                           <h2 className="font-weight-bold my-4">Rp 59,000 /Bulan</h2>
                           <p className="grey-text">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Culpa pariatur id nobis accusamus deleniti cumque hic
                              laborum.
                          </p>
                           <MDBBtn rounded color="pink">
                              Buy now
                 </MDBBtn>
                        </MDBCardBody>
                     </MDBCard>
                  </MDBCol>
                  <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                     <MDBCard className="pink">
                        <MDBCardBody className="white-text">
                           <h5 className="mb-4">Premium plan</h5>
                           <div className="d-flex justify-content-center">
                              <div className="card-circle d-flex justify-content-center align-items-center">
                                 <MDBIcon icon="users" className="light-blue-text" />
                              </div>
                           </div>
                           <h2 className="font-weight-bold my-4">Rp 300,000 /6 Bulan</h2>
                           <p>
                              Esse corporis saepe laudantium velit adipisci cumque iste
                              ratione facere non distinctio cupiditate sequi atque.
                 </p>
                           <MDBBtn outline rounded color="white">
                              Buy now
                 </MDBBtn>
                        </MDBCardBody>
                     </MDBCard>
                  </MDBCol>
                  <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                     <MDBCard>
                        <MDBCardBody>
                           <h5 className="mb-4">Advanced plan</h5>
                           <div className="d-flex justify-content-center">
                              <div className="card-circle d-flex justify-content-center align-items-center">
                                 <MDBIcon far icon="chart-bar" className="pink-text" />
                              </div>
                           </div>
                           <h2 className="font-weight-bold my-4">Rp 500,000 /1 Tahun</h2>
                           <p className="grey-text">
                              At ab ea a molestiae corrupti numquam quo beatae minima
                              ratione magni accusantium repellat eveniet quia vitae.
                 </p>
                           <MDBBtn rounded color="pink">
                              Buy now
                 </MDBBtn>
                        </MDBCardBody>
                     </MDBCard>
                  </MDBCol>
               </MDBRow>
            </section>
         </MDBContainer>
      )
   }
}

export default Pricing_view
