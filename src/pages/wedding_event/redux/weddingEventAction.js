import ROOT_API from '../../../MyServices/api/URLApi'

export const FETCH_WEDDING_LIST = 'FETCH_WEDDING_LIST'
export const FETCH_WEDDING_DETAIL = 'FETCH_WEDDING_DETAIL'
export const FETCH_WEDDING_DIUNDANG_CATEGORY = 'FETCH_WEDDING_DIUNDANG_CATEGORY'
export const FETCH_WEDDING_DIUNDANG_LIST = 'FETCH_WEDDING_DIUNDANG_LIST'
export const FETCH_WEDDING_DIUNDANG_UPDATE = 'FETCH_WEDDING_DIUNDANG_UPDATE'

export const getWeddingList = () => async dispatch => {
   const getDataWeddingList = await ROOT_API.get('weddingEvent')

   const res = dispatch({
      type: FETCH_WEDDING_LIST,
      payload: getDataWeddingList.data.data
   })

   return res
}

export const getWeddingDetail = payload => async dispatch => {
   const getDataWeddingDetail = await ROOT_API.post(`weddingEvent/${payload}`)

   const res = dispatch({
      type: FETCH_WEDDING_DETAIL,
      payload: getDataWeddingDetail.data.data
   })

   return res
}


export const getWeddingCategoryDiundang = payload => async dispatch => {
   const getDataWeddingCategoryDiundang = await ROOT_API.get(`weddingEvent/InvitationCategory/${payload}`)
   const res = dispatch({
      type: FETCH_WEDDING_DIUNDANG_CATEGORY,
      payload: getDataWeddingCategoryDiundang.data.data
   })

   return res
}

export const getWeddingListDiundang = payload => async dispatch => {
   const getDataWeddingListDiundang = await ROOT_API.get(`weddingEvent/InvitationList/${payload}`)
   const res = dispatch({
      type: FETCH_WEDDING_DIUNDANG_LIST,
      payload: getDataWeddingListDiundang.data.data
   })

   return res
}

export const SubmitKonfirmasi = (payload, data) => async dispatch => {
   const SubmitKonfirmasi = await ROOT_API.put(`weddingEvent/UpdateListKehadiran/${payload}`, data)
   const getDataWeddingListDiundang = await ROOT_API.get('weddingEvent/InvitationList/JU00120190400001')

   const res = dispatch({
      type: FETCH_WEDDING_DIUNDANG_UPDATE,
      payload: getDataWeddingListDiundang.data.data,
      berhasil: SubmitKonfirmasi
   })

   return res
}

