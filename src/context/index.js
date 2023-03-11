import React, {useState} from 'react'
import Toast from 'react-native-toast-message';

const GameContext = React.createContext()

const GameProvider = ({children}) => {
  const [stage, setStage] = useState(1)
  const [players, setPlayers] = useState([])
  const [result, setResult] = useState('')
  

  const addPlayer = name => {
    setPlayers([...players, name])
  }

  const removePlayer = idx => {
    const newArray = [...players]
    newArray.splice(idx, 1)
    setPlayers(newArray)
  }

  const handleNext = () =>{
    if(players.length < 2){
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Sorry',
        text2: 'You need at least 2'
      });
    }else{
      setStage(2)
      generateLooser()
    }
  }

  const generateLooser = () =>{
    setResult(players[Math.floor(Math.random() * players.length)])
  }

  const resetGame = () =>{
    setPlayers([])
    setResult('')
    setStage(1)
  }
  return (
    <GameContext.Provider
      value={{stage, players, result, addPlayer, removePlayer,handleNext,generateLooser,resetGame}}>
      {children}
    </GameContext.Provider>
  )
}

export {GameContext, GameProvider}
