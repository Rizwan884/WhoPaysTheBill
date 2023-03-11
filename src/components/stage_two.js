import {Text, StyleSheet,View} from 'react-native'
import React, {useContext} from 'react'
import {Button} from '@rneui/themed'
import {GameContext} from '../context'
import { MainLogo } from '../utils/tools'

const StageTwo = () => {
  const MyContext = useContext(GameContext)
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
      }}>
        <MainLogo/>
      <Text style={{alignSelf: 'center', marginTop: 30,color : 'black'}}>The Winner is</Text>
      <Text style={{alignSelf: 'center', fontSize: 30,color : 'black'}}>
        {MyContext.result}
      </Text>
      <Button 
      title='Try Again' 
      buttonStyle={styles.button} 
      onPress={()=>MyContext.generateLooser()}
      
      />
      <Button 
      title='Start Over' 
      buttonStyle={styles.button} 
      onPress={()=>MyContext.resetGame()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DB3EB1',
    marginTop: 20,
  },
})
export default StageTwo
