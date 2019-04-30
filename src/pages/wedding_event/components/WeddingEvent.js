import React, { Component, Fragment } from 'react'
import { MDBBtn, MDBCard, MDBContainer, MDBRow } from 'mdbreact';
import backgroundHeader from '../../../assets/images/datengaja-background-header.png'
import AcaraLists from './views/AcaraLists'
import { connect } from 'react-redux'
import { getWeddingList } from '../redux/weddingEventAction'
import Loading from '../../../MyComponents/loading/Loading_page'



class WeddingEvent extends Component {
   componentDidMount() {
      this.props.getWeddingList()
   }

   render() {
      let { dataListWedding, loading } = this.props.weddingEventReducer

      let listAcara = dataListWedding.map((v, idx) => {
         return (
            <AcaraLists
               key={idx}
               kode={v.kd_undangan}
               img={v.img_undangan}
               title={v.nm_undangan}
               total={v.jumlah_undangan}
               tanggal={v.tgl_acara_akad}
               sisa_hari={v.sisa_hari}
            />
         )
      })

      const WeddingEventDone = () => {
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
                           <strong>Acara Pernikahan Member Datengaja.com</strong>
                        </h3>
                        <p className="pb-3">
                           Bingung ngundang tapi ga konfirmasi , sehingga bingung budgeting untuk konsumsi, Takut Malu Jika Konsumsi Kurang ?
                          </p>
                        <MDBBtn color="pink" rounded size="md">
                           Buat dan  Kontrol Undanganmu Sekarang
                     </MDBBtn>
                     </div>
                  </div>
               </MDBCard>
               <MDBContainer>
                  <section className="text-center my-5">
                     <MDBRow>
                        {listAcara}
                     </MDBRow>
                  </section>
               </MDBContainer>
            </Fragment>
         )
      }

      return (
         loading ? <WeddingEventDone /> : <Loading />
      )
   }
}

const mapStateToProps = state => ({
   weddingEventReducer: state.weddingEventReducer
})

const mapDispatchToProps = { getWeddingList }

const connectRedux = connect(mapStateToProps, mapDispatchToProps)(WeddingEvent)

export default connectRedux
