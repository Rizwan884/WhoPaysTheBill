import React, { useContext } from 'react';
import { GameContext } from './src/context';
import StageOne from './src/components/stage_one';
import StageTwo from './src/components/stage_two';

const App = () => {
  const { stage } = useContext(GameContext);

  return stage === 1 ? <StageOne /> : <StageTwo />;
};

export default App;
