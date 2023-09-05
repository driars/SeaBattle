import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setBoard } from '../reducers/board/boardSlice';
import { Board } from '../components/board';
import { Finish } from '../components/finish';
import './battle.css';
import { getShips } from '../utils/get-ships';

export const SeaBattle = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setBoard(getShips()));
  }, [dispatch]);

  const finish = useAppSelector((state) => state.board.finish);

  return (
    <div className="battle-container">{finish ? <Finish /> : <Board />}</div>
  );
};
