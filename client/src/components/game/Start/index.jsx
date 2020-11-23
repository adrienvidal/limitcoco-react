import React, { useContext } from 'react'
import style from './index.module.scss'
import logo from '../../../assets/images/logo.jpg'
import { Button1 } from '../../common/Buttons'

// context
import GameContext from '../../../context/game/gameContext'

const Start = () => {
  const gameContext = useContext(GameContext)
  const { setPhase } = gameContext

  const onAction = () => {
    setPhase('playersChoice')
  }

  return (
    <div className={style.main}>
      <div className={style.inner}>
        <img src={logo} alt='logo' />
        <Button1 onAction={onAction} text={'Start'} />
      </div>
    </div>
  )
}

export default Start
