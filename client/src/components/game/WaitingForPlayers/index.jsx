import React, { Fragment } from 'react'
import style from './index.module.scss'

const WaitingForPlayers = () => {
  return (
    <Fragment>
      <p className={style.msg}>Waiting for players...</p>
    </Fragment>
  )
}

export default WaitingForPlayers
