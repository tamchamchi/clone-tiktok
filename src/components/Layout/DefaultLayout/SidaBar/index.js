import React from 'react'
import classNames from 'classnames/bind'
import styles from './SidaBar.module.scss'

const cx = classNames.bind(styles)

const SidaBar = () => {
  return (
    <aside className={cx('wapper')}>
      <h2>SidaBar</h2>
    </aside>
  )
}

export default SidaBar