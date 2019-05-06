import React, { Component, Fragment } from 'react'
import { MDBRow, MDBCol, MDBCardBody } from "mdbreact"


class Dasar extends Component {

   render() {
      return (
         <Fragment>
            <section
               className=" px-1 pb-5 text-center pink-color"
               style={{
                  background: '#f4f4f4'
               }}>
               <MDBCardBody>
                  <MDBRow>
                     <MDBCol md="12" className="pt-50" style={{ marginTop: '50px' }}>
                        <p className="black-text w-responsive mx-auto mb-2">
                           “Dan di antara tanda-tanda kekuasaanNya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,<br />
                           supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikanNya diantaramu rasa kasih dan sayang. <br />
                           Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir” <br /><br />
                           (QS. Ar-Ruum: 21)
                        </p>
                     </MDBCol>
                  </MDBRow>
               </MDBCardBody>
            </section>
         </Fragment>
      )
   }
}

export default Dasar
