import React, { Component, Fragment } from 'react'
import Header from './views/Header'
import ContentUndangan from './views/ContentUndangan'
import Dasar from './views/Dasar'
import Akad from './views/Akad'
import ListKehadiranKonfirmasi from './views/ListKehadiranKonfirmasi'
import KonfirmasiKehadiran from './form/KonfirmasiKehadiran'
import { connect } from 'react-redux'
import { getWeddingDetail, getWeddingCategoryDiundang, getWeddingListDiundang } from '../redux/weddingEventAction'
import LoadingPage from '../../../MyComponents/loading/Loading_page'

class WeddingEventDetail extends Component {

   componentDidMount() {
      this.props.getWeddingDetail(this.props.match.params.kodeAcara)
      this.props.getWeddingCategoryDiundang(1)
      this.props.getWeddingListDiundang(this.props.match.params.kodeAcara)
   }

   render() {
      let { loading } = this.props.weddingEventDetail
      let WeddingEventDetailDone = () => {
         return (
            <Fragment>
               <Header />
               <Dasar />
               <Akad />
               <ContentUndangan />
               <ListKehadiranKonfirmasi />
               <KonfirmasiKehadiran />
            </Fragment>
         )
      }

      return (
         loading ? <WeddingEventDetailDone /> : <LoadingPage />
      )
   }
}


const mapStateToProps = state => ({
   weddingEventDetail: state.weddingEventReducer
})

const mapDispatchToProps = { getWeddingDetail, getWeddingCategoryDiundang, getWeddingListDiundang }

const connectRedux = connect(mapStateToProps, mapDispatchToProps)(WeddingEventDetail)

export default connectRedux
