import React, { Component } from 'react'
import { MDBCol, MDBListGroup, MDBListGroupItem, MDBBadge } from "mdbreact"
import { connect } from 'react-redux'


class ListKehadiran extends Component {
   render() {
      let { dataDiundangCategory } = this.props.weddingEventReducer

      let listDiundangCtegory = dataDiundangCategory.map((v, idx) => {
         return (
            <MDBListGroupItem className="d-flex justify-content-between align-items-center" key={idx}>
               {v.nm_jenis_diundang}<MDBBadge color="primary" pill>{v.jumlah}</MDBBadge>
            </MDBListGroupItem>
         )
      })

      return (
         <MDBCol md="3" sm="12">
            <MDBListGroup>
               {listDiundangCtegory}
            </MDBListGroup>
         </MDBCol>
      )
   }
}


const mapStateToProps = state => ({
   weddingEventReducer: state.weddingEventReducer
})

const connectRedux = connect(mapStateToProps, null)(ListKehadiran)

export default connectRedux
