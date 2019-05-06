import React, { Component, Fragment } from 'react'
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact"
import { connect } from 'react-redux'
import { SubmitKonfirmasi } from '../../redux/weddingEventAction'


class KonfirmasiKhadiran extends Component {
   constructor(props) {
      super(props)
      this.state = {
         hideKonfirmasi: 'inline',
         hideKonfirmasiButton: 'none',
         valKonfirmasi: ''
      }
   }

   hideKonfirmasi = () => {
      this.setState({
         hideKonfirmasi: 'none',
         hideKonfirmasiButton: 'inline'
      })
   }

   showKonfirmasi = () => {
      this.setState({
         hideKonfirmasi: 'inline',
         hideKonfirmasiButton: 'none'
      })
   }

   change = (e) => {
      const val = e.target.value;
      this.setState({
         valKonfirmasi: val
      })
   }

   fSubmit = (e) => {
      e.preventDefault();
      //get value form wirh this.refs
      let konfirmasi = this.state.valKonfirmasi
      let ucapan = this.refs.ucapan.value

      let data = {
         id_status_undangan: konfirmasi,
         ucapan: ucapan
      }

      // console.log(data)
      this.props.SubmitKonfirmasi(4, data)
   }

   render() {
      let displayKonfirmasi = this.state.hideKonfirmasi
      let displayKonfirmasiButton = this.state.displayKonfirmasiButton

      console.log(this.props, '<================== param ?')

      return (
         <Fragment>
            <section
               className="pb-2 text-left pink-color"
               style={{
                  position: 'fixed',
                  bottom: '0',
                  width: '100%',
                  zIndex: '999',
                  marginBottom: '50px',
                  display: `${displayKonfirmasiButton}`
               }}>

               <MDBBtn color="success" onClick={this.showKonfirmasi} style={{ width: '200px' }} >
                  <i className="fa fa-send-o"></i> Konfirmasi Kehadiran
               </MDBBtn>
            </section>
            <section
               className="pb-2 text-center pink-color"
               style={{
                  background: 'rgb(244, 244, 244)',
                  position: 'fixed',
                  bottom: '0',
                  width: '100%',
                  zIndex: '999',
                  display: `${displayKonfirmasi}`
               }}>
               <MDBContainer>
                  <MDBRow>
                     <MDBCol md="4" sm="3" style={{ marginTop: '10px', background: '#fff' }}>
                        <input onChange={this.change} type="radio" id="konfirmasi" name="konfirmasi" value="2" />
                        <MDBBtn color="success" size="sm">Akan Hadir</MDBBtn>
                        <i className="fa fa-send-o"></i>
                     </MDBCol>
                     <MDBCol md="4" sm="3" style={{ marginTop: '10px', background: '#fff' }}>
                        <input onChange={this.change} type="radio" id="konfirmasi" name="konfirmasi" value="3" />
                        <MDBBtn color="warning" size="sm">Ragu- Ragu</MDBBtn>
                        <i className="fa fa-send"></i>
                     </MDBCol>
                     <MDBCol md="4" sm="3" style={{ marginTop: '10px', background: '#fff' }}>
                        <input onChange={this.change} type="radio" id="konfirmasi" name="konfirmasi" value="5" />
                        <MDBBtn color="danger" size="sm">Tidak Bisa Hadir</MDBBtn>
                     </MDBCol>
                     <MDBCol md="12" style={{ marginTop: '10px', background: '#fff', padding: '20px' }}>
                        <div className="form-group">
                           <textarea ref="ucapan"
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="5"
                              placeholder="Beri Ucapan"
                              style={{ height: '40px' }}
                           />
                        </div>
                     </MDBCol>
                     <MDBCol md="6" style={{ marginTop: '20px', background: '#fff' }}>
                        <MDBBtn color="primary" style={{ width: '100%' }} onClick={this.fSubmit}>
                           <i className="fa fa-send-o"></i> Kirim Konfirmasi
                        </MDBBtn>
                     </MDBCol>
                     <MDBCol md="6" style={{ marginTop: '20px', background: '#fff' }}>
                        <MDBBtn color="danger" onClick={this.hideKonfirmasi} style={{ width: '100%' }} >
                           <i className="fa fa-send-o"></i> Sembunyikan
                        </MDBBtn>
                     </MDBCol>
                  </MDBRow>
               </MDBContainer>
            </section>
         </Fragment >

      )
   }
}


const mapStateToProps = state => ({
   weddingEventReducer: state.weddingEventReducer
})

const mapDispatchToProps = { SubmitKonfirmasi }

const connectRedux = connect(mapStateToProps, mapDispatchToProps)(KonfirmasiKhadiran)

export default connectRedux