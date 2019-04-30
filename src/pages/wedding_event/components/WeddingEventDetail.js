import React, { Component, Fragment } from 'react'
import Header from './views/Header'
import ContentUndangan from './views/ContentUndangan'
import Dasar from './views/Dasar'
import Akad from './views/Akad'
import ListKehadiran from './views/ListKehadiran'
import { connect } from 'react-redux'
import { getWeddingDetail, getWeddingCategoryDiundang, getWeddingListDiundang } from '../redux/weddingEventAction'
import LoadingPage from '../../../MyComponents/loading/Loading_page';

class WeddingEventDetail extends Component {
   constructor(props) {
      super(props)
      this.state = {
         id_undangan: ""
      }
   }

   componentDidMount() {
      this.props.getWeddingDetail(this.props.match.params.kodeAcara)
      this.props.getWeddingCategoryDiundang(1)
      this.props.getWeddingListDiundang(this.props.match.params.kodeAcara)
   }

   render() {
      // let id = this.props.weddingEventDetail.dataDetailWedding.id_undangan_header

      let { loading } = this.props.weddingEventDetail
      let WeddingEventDetailDone = () => {
         return (
            <Fragment>
               <Header />
               <Dasar />
               <Akad />
               <ContentUndangan />
               <ListKehadiran />
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
