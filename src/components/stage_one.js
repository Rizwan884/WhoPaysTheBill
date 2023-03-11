import {StyleSheet, View} from 'react-native'
import React, {useContext} from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {Input, Button, ListItem, Text} from '@rneui/themed'
import {GameContext} from '../context'
import { MainLogo } from '../utils/tools'

const StageOne = () => {
  const MyContext = useContext(GameContext)

  const renderPlayers = () => (
    MyContext.players.map((item,idx)=>(
        <ListItem
            key={idx}
            bottomDivider
            style={{ width:'100%',backgroundColor : "orange"}}
            onLongPress={()=> MyContext.removePlayer(idx)}
        >
            <ListItem.Chevron/>
            <ListItem.Content>
                <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
    ))
)
  
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
      }}>
      <Formik
        initialValues={{player: ''}}
        validationSchema={Yup.object({
          player: Yup.string()
            .min(3, 'Must be 3 characters')
            .max(15, 'Must be less than 15  characters')
            .required('Sorry, the name is required'),
        })}
        onSubmit={(values, {resetForm}) => {
          MyContext.addPlayer(values.player)
          resetForm()
        }}>
        {({
          handleBlur,
          handleChange,
          handleReset,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <MainLogo/>
            <Input
              placeholder='Add names here'
              leftIcon={{type: 'antdesign', name: 'adduser'}}
              inputContainerStyle={{
                marginHorizontal: 50,
                marginTop: 50,
              }}
              renderErrorMessage={errors.player && touched.player}
              errorMessage={errors.player}
              errorStyle={{
                marginHorizontal: 50,
              }}
              onChangeText={handleChange('player')}
              onBlur={handleBlur('player')}
              value={values.player}
            />
            <Button
              buttonStyle={styles.button}
              title='Add Candidate'
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <View style={{marginTop: 20}}>
        {MyContext.players && MyContext.players.length > 0 ? (
          <>
            <Text>List Of Players</Text>
            {renderPlayers()}
            <Button
              buttonStyle={styles.button}
              title='Get the Winner'
              onPress={()=>MyContext.handleNext()}
            />
          </>
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DB3EB1',
    marginTop: 20,
  },
})
export default StageOne
