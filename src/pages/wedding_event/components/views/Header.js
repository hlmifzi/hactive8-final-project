import React, { Component, Fragment } from 'react'
import { MDBRow, MDBCol, MDBCardBody } from "mdbreact"
import backgroundHeader from '../../../../assets/images/datengaja-backgrounddetail.png'
import MempelaiPria from '../../../../assets/img/pernikahan/JU00120190400001/pria.png'
import MempelaiWanita from '../../../../assets/img/pernikahan/JU00120190400001/wanita.jpg'
import '../css/weddingEventDetail.css'
import { connect } from 'react-redux'


class Header extends Component {

   render() {
      let {
         nm_mempelai_pria,
         nm_mempelai_wanita,
         nm_mp_ortu,
         nm_mw_ortu } = this.props.weddingEventReducer.dataDetailWedding
      return (
         <Fragment>
            <section className=" px-1 pb-5 text-center" style={{
               backgroundImage:
                  `url(${backgroundHeader})`,
               backgroundSize: 'cover',
            }}>
               <MDBCardBody>
                  <h2 className="h1-responsive font-weight-bold my-5">
                     Undangan Pernikahan Online
                   </h2>
                  <MDBRow>
                     <MDBCol md="4" className="mb-md-0 mb-5">
                        <img src={MempelaiPria} alt="Mempelai Pria" width="200px" />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                           {nm_mempelai_pria}
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3"><b>Putra Dari</b> <br />
                           {nm_mp_ortu} <br /> Endang Dwi Nolowati
                     </h6>
                     </MDBCol>

                     <MDBCol md="4" className="mb-md-0 mb-5 emoji_hati">
                        <h1 className="font-weight-bold dark-grey-text my-4 pink-text emoji_cinta"><i className="fa fa-heart" style={{ fontSize: '4em' }}></i></h1>
                     </MDBCol>

                     <MDBCol md="4" className="mb-md-0 mb-5">
                        <img src={MempelaiWanita} alt="Mempelai Pria" width="200px" />
                        <h4 className="font-weight-bold dark-grey-text my-4">
                           {nm_mempelai_wanita}
                        </h4>
                        <h6 className="text-uppercase grey-text mb-3">Putra Dari <br />
                           {nm_mw_ortu} <br /> Ibu Fulan
                     </h6>

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

const connectRedux = connect(mapStateToProps, null)(Header)


export default connectRedux
