import React, { Component } from 'react'
import { MDBCol, MDBDataTable } from "mdbreact"
import { connect } from 'react-redux'



class DataDiundang extends Component {
   render() {
      let { dataDiundangList } = this.props.weddingEventReducer
      let no = 1;

      const isiData = dataDiundangList.map((v) => {
         let color = ""
         // console.log(v.id_status_undangan)
         if (v.id_status_undangan === '1') {
            color = 'btn-primary'
         } else if (v.id_status_undangan === '2') {
            color = 'btn-success'
         } else if (v.id_status_undangan === '3') {
            color = 'btn-warning'
         } else if (v.id_status_undangan === '4') {
            color = 'btn-info'
         } else if (v.id_status_undangan === '5') {
            color = 'btn-danger'
         }
         let button = `<button class="btn btn-sm ${color}">${v.nm_status}</button>`;
         let status = <div dangerouslySetInnerHTML={{ __html: button }} />
         var rObj = {}
         rObj['no'] = no
         rObj['name'] = v.nm_diundang
         rObj['status'] = status
         rObj['response'] = v.ucapan
         no++
         return rObj
      })

      const data = {
         columns: [
            {
               label: 'No',
               field: 'no',
               sort: 'asc',
               width: 100
            },
            {
               label: 'Nama Lengkap',
               field: 'name',
               sort: 'asc',
               width: 200
            },
            {
               label: 'Status',
               field: 'status',
               sort: 'asc',
               width: 100
            },
            {
               label: 'Response',
               field: 'response',
               sort: 'asc',
               width: 150
            }
         ],
         rows: isiData
      };

      return (
         <MDBCol md="9" sm="12" style={{ overflowX: 'auto' }}>
            <MDBDataTable
               striped
               bordered
               hover
               data={data}
            />
         </MDBCol>
      )
   }
}
const mapStateToProps = state => ({
   weddingEventReducer: state.weddingEventReducer
})
const connectRedux = connect(mapStateToProps, null)(DataDiundang)


export default connectRedux
