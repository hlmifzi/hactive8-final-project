import React, { Component, Fragment } from 'react'
import { MDBRow, MDBCol, MDBCardBody } from "mdbreact"
import '../css/weddingEventDetail.css'
import { connect } from 'react-redux'



class ContentUndangan extends Component {

   render() {
      let { isi_undangan } = this.props.weddingEventReducer.dataDetailWedding
      isi_undangan = <div className="white-text w-responsive mx-auto" dangerouslySetInnerHTML={{ __html: isi_undangan }} />
      return (
         <Fragment>
            <section
               className=" px-1 text-center pink-color"
               style={{
                  background: '#e91e63'
               }}>
               <MDBCardBody>
                  <MDBRow>
                     <MDBCol md="12" className="pt-50" style={{ marginTop: '50px' }}>
                        {isi_undangan}
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

const connectRedux = connect(mapStateToProps, null)(ContentUndangan)

export default connectRedux
