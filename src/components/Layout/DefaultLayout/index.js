import React from 'react'
import Header from '../components/Header'
import SidaBar from './SidaBar'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }) => {
     return (
          <div className={cx('wapper')}>
               <Header />
               <div className={cx('container')}>
                    <SidaBar />
                    <div className={cx('content')}>{children}</div>
               </div>
          </div>
     )
}

export default DefaultLayout