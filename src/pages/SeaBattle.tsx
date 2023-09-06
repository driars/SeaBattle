import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setBoard } from '../reducers/board/boardSlice';
import { Board } from '../components/board';
import { Finish } from '../components/finish';
import { useShips } from '../hooks/useShips';
import './battle.css';

export const SeaBattle = () => {
  const dispatch = useAppDispatch();
  const ships = useShips();

  useEffect(() => {
    dispatch(setBoard(ships));
  }, [dispatch, ships]);

  const finish = useAppSelector((state) => state.board.finish);

  return (
    <div className="battle-container">{finish ? <Finish /> : <Board />}</div>
  );
};
