import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBCardFooter, MDBBadge } from 'mdbreact';
import { Link } from 'react-router-dom'
import thumnail from '../../../../assets/img/pernikahan/JU00120190400001/thumnail.png'

class AcaraLists extends Component {
   render() {

      let { kode,
         title,
         total,
         tanggal,
         sisa_hari } = this.props
      return (
         <MDBCol md="3">
            <MDBCard style={{ width: "100%", marginTop: '50px' }}>
               <MDBCardImage className="img-fluid" src={thumnail} waves />
               <MDBCardBody>
                  <MDBCardTitle>{title}</MDBCardTitle>
                  <div className="flex-row" style={{ fontSize: '10pt' }}>
                     <i className="fa fa-user"></i> {total} Orang
                                <span style={{ marginLeft: "1.25rem", color: 'f80' }}>
                        <i className="fa fa-calendar"></i> {tanggal}
                     </span>
                  </div>
                  <MDBBadge color="pink"
                     pill>{sisa_hari} Hari Lagi
                              </MDBBadge>
               </MDBCardBody>
               <Link to={`acara/${kode}`}>
                  <MDBCardFooter color="pink"> Detail</MDBCardFooter>
               </Link>
            </MDBCard>
         </MDBCol >
      )
   }
}


export default AcaraLists
