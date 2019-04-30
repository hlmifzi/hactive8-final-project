import React, { Component, Fragment } from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './css/landing_page_view.css'
import backgroundHeader from '../../../assets/images/datengaja-background-header.png'

class Vendor_view extends Component {

   render() {
      return (
         <Fragment>
            <MDBCard
               className="card-image"
               style={{
                  backgroundImage:
                     `url(${backgroundHeader})`,
                  backgroundSize: 'cover',
                  margin: 'auto'
               }}
            >
               <div className="text-white  d-flex align-items-center rgba-black-strong py-5 px-4" style={{ width: '100%' }} >
                  <div>
                     <h3 className="py-3 font-weight-bold">
                        <strong>Rekanan Datengaja.com</strong>
                     </h3>
                     <p className="pb-3">
                        Segera daftarkan Event Organizer / Wedding Organizer kamu dan dapatkan market orang yang lebih luas lagi
                          </p>
                     <MDBBtn color="pink" rounded size="md">
                        Daftar Rekanan Kami
                          </MDBBtn>
                  </div>
               </div>
            </MDBCard>
            <MDBContainer>
               <section className="text-center my-5">
                  <MDBRow>
                     <MDBCol md="3">
                        <MDBCard style={{ width: "100%", marginTop: '50px' }}>
                           <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                           <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                 Some quick example text to build on the card title and make
                                 up the bulk of the card&apos;s content.
                      </MDBCardText>
                              <MDBBtn color="pink" href="#">MDBBtn</MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>
                     <MDBCol md="3">
                        <MDBCard style={{ width: "100%", marginTop: '50px' }}>
                           <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                           <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                 Some quick example text to build on the card title and make
                                 up the bulk of the card&apos;s content.
                      </MDBCardText>
                              <MDBBtn color="pink" href="#">MDBBtn</MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>
                     <MDBCol md="3">
                        <MDBCard style={{ width: "100%", marginTop: '50px' }}>
                           <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                           <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                 Some quick example text to build on the card title and make
                                 up the bulk of the card&apos;s content.
                      </MDBCardText>
                              <MDBBtn color="pink" href="#">MDBBtn</MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>
                     <MDBCol md="3">
                        <MDBCard style={{ width: "100%", marginTop: '50px' }}>
                           <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                           <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                 Some quick example text to build on the card title and make
                                 up the bulk of the card&apos;s content.
                      </MDBCardText>
                              <MDBBtn color="pink" href="#">MDBBtn</MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>
                     <MDBCol md="3">
                        <MDBCard style={{ width: "100%", marginTop: '50px' }}>
                           <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                           <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                 Some quick example text to build on the card title and make
                                 up the bulk of the card&apos;s content.
                      </MDBCardText>
                              <MDBBtn color="pink" href="#">MDBBtn</MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>
                     <MDBCol md="3">
                        <MDBCard style={{ width: "100%", marginTop: '50px' }}>
                           <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                           <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                 Some quick example text to build on the card title and make
                                 up the bulk of the card&apos;s content.
                      </MDBCardText>
                              <MDBBtn color="pink" href="#">MDBBtn</MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>
                     <MDBCol md="3">
                        <MDBCard style={{ width: "100%", marginTop: '50px' }}>
                           <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                           <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                 Some quick example text to build on the card title and make
                                 up the bulk of the card&apos;s content.
                      </MDBCardText>
                              <MDBBtn color="pink" href="#">MDBBtn</MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>
                  </MDBRow>
               </section>
            </MDBContainer>
         </Fragment >
      )
   }
}

export default Vendor_view
