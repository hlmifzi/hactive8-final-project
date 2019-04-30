import React, { Component, Fragment } from 'react'
import { MDBRow, MDBCol, MDBCardBody, MDBCard, MDBCardImage, MDBCardTitle, MDBBtn } from "mdbreact"
import '../css/weddingEventDetail.css'
import thumnail from '../../../../assets/img/pernikahan/JU00120190400001/thumnail.png'
import { connect } from 'react-redux'



class Akad extends Component {

   render() {
      let {
         tgl_acara_akad,
         tmpt_acara_akad,
         pukul_acara_akad_dari,
         pukul_acara_akad_sampai,
         map_acara_akad,
         tgl_acara_resepsi,
         tmpt_acara_resepsi,
         pukul_acara_resepsi_dari,
         pukul_acara_resepsi_sampai,
         map_acara_resepsi } = this.props.weddingEventReducer.dataDetailWedding
      return (
         <Fragment>
            <section
               className=" px-1 pb-5 text-center pink-color"
               style={{
                  background: '#fff'
               }}>
               <MDBCardBody>
                  <MDBCol md="12" className="pt-50" style={{ marginTop: '50px' }}>
                     <h4 className="h1-responsive font-weight-bold my-5">
                        Kegiatan Acara
                        </h4>
                  </MDBCol>
                  <MDBRow center>
                     <MDBCol md="3">
                        <MDBCard style={{ width: "100%", marginTop: '50px' }}>
                           <MDBCardImage className="img-fluid" src={thumnail} waves />
                           <MDBCardBody>
                              <MDBCardTitle>Akad Nikah</MDBCardTitle>
                              <div className="flex-row" style={{ fontSize: '10pt' }}>
                                 <i className="fa fa-calendar"></i> {tgl_acara_akad} <br />
                                 <i className="fa fa-clock"></i>{(pukul_acara_akad_dari)} s.d. {pukul_acara_akad_sampai} WIB
                              </div>
                              <MDBBtn color="pink" href={map_acara_akad} target="_blank">
                                 <i className="fa fa-map-marker-alt"></i> {tmpt_acara_akad} <br />
                              </MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>
                     <MDBCol md="3">
                        <MDBCard style={{ width: "100%", marginTop: '50px' }}>
                           <MDBCardImage className="img-fluid" src={thumnail} waves />
                           <MDBCardBody>
                              <MDBCardTitle>Resepsi Nikah</MDBCardTitle>
                              <div className="flex-row" style={{ fontSize: '10pt' }}>
                                 <i className="fa fa-calendar"></i> {tgl_acara_resepsi} <br />
                                 <i className="fa fa-clock"></i> {pukul_acara_resepsi_dari} s.d. {pukul_acara_resepsi_sampai} WIB
                              </div>
                              <MDBBtn color="pink" href={map_acara_resepsi} target="_blank">
                                 <i className="fa fa-map-marker-alt"></i> {tmpt_acara_resepsi}<br />
                              </MDBBtn>
                           </MDBCardBody>
                        </MDBCard>
                     </MDBCol>
                  </MDBRow>
               </MDBCardBody>
            </section>
         </Fragment>
      )
   }
}


const mapStateToProps = state => ({
   weddingEventReducer: state.weddingEventReducer
})

const connectRedux = connect(mapStateToProps, null)(Akad)

export default connectRedux
