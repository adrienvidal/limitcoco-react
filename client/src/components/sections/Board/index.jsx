import React from 'react';
import QuestionCard from '../../common/QuestionCard';
import AnswerCard from '../../common/AnswerCard';
import style from './index.module.scss';

const Board = () => {

  const test = 'popo';

  return (
    <div className={style.main}>
      <div className={style.top}>
        <div className={style['card-wrapper']}>
          <QuestionCard />
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style['cards-hand']}>
          <div className={style['card-wrapper']}>
            <AnswerCard />
          </div>
          <div className={style['card-wrapper']}>
            <AnswerCard />
          </div>
          <div className={style['card-wrapper']}>
            <AnswerCard />
          </div>
          <div className={style['card-wrapper']}>
            <AnswerCard />
          </div>
          <div className={style['card-wrapper']}>
            <AnswerCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
