import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBContainer } from "mdbreact"
import DiundangJenis from './DiundangJenis'
import DataDiundang from './DataDiundang';



class ListKehadiran extends Component {

   render() {
      return (
         <section
            style={{
               background: '#fff'
            }}>
            <MDBContainer>
               <MDBCol md="12" style={{ marginTop: '50px' }}>
                  <h4 className="h1-responsive font-weight-bold my-5">
                     Daftar Undangan
                        </h4>
               </MDBCol>
               <MDBRow start>
                  <DiundangJenis />
                  <DataDiundang />
               </MDBRow>

            </MDBContainer>
         </section>
      )
   }
}

export default ListKehadiran
