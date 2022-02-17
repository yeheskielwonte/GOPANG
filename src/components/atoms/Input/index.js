import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'

const Input = (props) => {
  const [onChangeNumber] = useState(null);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={props.type}
        placeholder={props.placeholder}
        secureTextEntry={props.TextEntry}
        autoFocus={props.focus}
        />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        height: 54,
        width:343,
        padding: 10,
        fontSize:16,
        borderRadius:6,
        borderWidth:0.3,
        backgroundColor:'#EDEDF0',
        marginTop:20
    }
})