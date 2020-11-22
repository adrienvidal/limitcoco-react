import React from 'react'
import style from './index.module.scss'
import logo from '../../../assets/images/logo.jpg'

const Sidebar = () => {
  return (
    <div className={style.main}>
      <div className={style['logo']}>
        <img src={logo} alt='logo' />
      </div>

      <div className={style.players}>
        {/* player */}
        <div className={style.player}>
          <ul>
            <li className={style.name}>John</li>
            <li>
              Score: <span>3</span>
            </li>
            <li>
              Turn: <span>wait</span>
            </li>
          </ul>
        </div>
        {/* player */}
        <div className={style.player}>
          <ul>
            <li className={style.name}>John</li>
            <li>
              Score: <span>3</span>
            </li>
            <li>
              Turn: <span>wait</span>
            </li>
          </ul>
        </div>
        {/* player */}
        <div className={style.player}>
          <ul>
            <li className={style.name}>John</li>
            <li>
              Score: <span>3</span>
            </li>
            <li>
              Turn: <span>wait</span>
            </li>
          </ul>
        </div>
        {/* player */}
        <div className={style.player}>
          <ul>
            <li className={style.name}>John</li>
            <li>
              Score: <span>3</span>
            </li>
            <li>
              Turn: <span>wait</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
