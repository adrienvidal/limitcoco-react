import React from 'react'
import style from './index.module.scss'

const Sidebar = () => {
  return (
    <div className={style.main}>
      <h2>LimitCoco</h2>

      <div className={style.players}>
        <div className={style.player}>
          <span className='name'>Player 1</span>
          <span className='score'>3</span>
          <span className='turn'>wait</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
