import React from 'react'
import Header from '../components/Header'
import SidaBar from '../components/SidaBar'

const DefaultLayout = ({children}) => {
     return (
          <div>
               <Header />
               <div className='container'>
                    <SidaBar />
                    <div className='content'>{children}</div>
               </div>
          </div>
     )
}

export default DefaultLayout