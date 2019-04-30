import React, { Component } from 'react'
import {
   MDBMask,
   MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer
} from "mdbreact"
import './css/landing_page_view.css'
import Loading from '../../../MyComponents/loading/Loading_page'



class Landing_page_view extends Component {
   constructor(props) {
      super()
      this.state = { loading: false }
   }
   componentDidMount() {
      this.setState({ loading: true })
   }

   render() {
      let LandingPageViewDone = () => {
         return (
            <div id="videobackground">
               <MDBView>
                  <video className="video-intro" poster="https://datengaja.com/assets/images/undangan_pernikahan.jpg">
                  </video>
                  <MDBMask className="d-flex justify-content-center align-items-center gradient">
                     <MDBContainer className="px-md-3 px-sm-0">
                        <MDBRow>
                           <MDBCol md="12" className="mb-4 white-text text-center">
                              <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                                 Undangan Kontrol{" "}
                              </h3>
                              <hr className="hr-light my-4 w-75" />
                              <h4 className="subtext-header mt-2 mb-4">
                                 Sekarang mudah  mengontrol Undanganmu.
                            </h4>
                              <MDBBtn rounded color="pink">
                                 <MDBIcon icon="" />Buat Undanganmu Sekarang
                           </MDBBtn>
                           </MDBCol>
                        </MDBRow>
                     </MDBContainer>
                  </MDBMask>
               </MDBView>

            </div>
         )
      }
      return (
         this.state.loading ? <LandingPageViewDone /> : <Loading />
      )
   }
}

export default Landing_page_view
