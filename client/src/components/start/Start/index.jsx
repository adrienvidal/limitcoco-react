import React, { useState, useContext } from 'react'
import style from './index.module.scss'
import logo from '../../../assets/images/logo.jpg'
import { Button1 } from '../../common/Buttons'

// context
import GameContext from '../../../context/game/gameContext'

const Start = () => {
  const gameContext = useContext(GameContext)
  const { setLobby } = gameContext

  const [name, setName] = useState('PetitZizi')

  const onChange = (e) => setName(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    setLobby(name)
    // setPhase('game-init')
  }

  return (
    <div className={style.main}>
      <div className={style.inner}>
        <img src={logo} alt='logo' />
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={onChange}
          />
          <div className={style.cta}>
            <Button1 text={'Start'} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Start
