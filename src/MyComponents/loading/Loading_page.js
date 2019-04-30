import React from 'react'

const Loading_page = () => {
   return (
      <div style={{
         textAlign: 'center', display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         minHeight: '100vh',
      }}>
         <div className="spinner-grow text-danger  text-center" role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </div >
   )
}

export default Loading_page