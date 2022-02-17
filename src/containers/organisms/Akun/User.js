import React, {useState} from 'react';
import { Text,View,StyleSheet,Image,TextInput, ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';
import TextTouchable from '../../../components/atoms/TextTouchable';



const User = () => {
  const [text] = useState(null);
  const [number] = useState(null);

  return (
    <ScrollView>
    <View style={styles.container}>
      <View> 
        <Text style={styles.fontUser}>User</Text> 
        <Text style={styles.fontSignin}>Sign In</Text>
      </View>

      {/* Render Logo GOPANG */}
      <View>
        <Image 
          source={require('../../../assets/logo/LogoGOPANG.png')} 
          style={styles.logo} />
      </View>

      <View>
        <Text style={styles.fontEnter}>Enter your email and password</Text> 
      </View>

      {/* Render Text Input yg so props */}
      <SafeAreaView style={{alignItems:'center',marginTop:5.75}}>
        <Input placeholder={'Email'} focus={true} type={text} />
        <Input placeholder={'Password'} TextEntry={true} type={number} />
      </SafeAreaView>

      {/* Forget Password props */}
      <TextTouchable text={'Forgot Password?'} stylingText={styles.textForgot} />

      {/* Render Button dan dont have an account *button login yang props */}
      <View style={{alignItems:'center'}}>

          <Button title='Login' />
          
          <Text style={styles.textOr}>Or</Text>

          <TouchableOpacity style={styles.ButtonGoogle}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../../../assets/logo/logoGoogle.png')} style={styles.logoGoogle} />
              <Text style={styles.textButton}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
          
          <View style={{flexDirection:'row'}}>

            <Text style={styles.textDonthaveacc}>Don't have an account? </Text>

            <TextTouchable 
            stylingTouchable={styles.tcbSignup}
            stylingText={styles.textSignup}
            text={'Sign Up'}
            />
          </View>
      </View>
    </View>
    </ScrollView> 
  );
}
export default User;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  fontEnter:{
    fontSize:16,
    fontWeight:'bold',
    color:'#A8A6A7',
    marginLeft:90,
    marginTop:25,
  },
  fontSignin:{
    fontWeight:'bold',
    fontSize:40,
    marginTop:4,
    marginLeft:139,
    color:'#000000'
  },
  fontUser:{
    fontSize:17,
    fontWeight:'bold',
    marginTop:90,
    marginLeft:183,
    color:'#000000'
  },
  logo:{
    width:184,
    height:185,
    marginTop:4,
    marginLeft:130
  },
  input: {
    height: 54,
    width:343,
    padding: 10,
    fontSize:16,
    borderRadius:6,
    borderWidth:0.3,
    backgroundColor:'#EDEDF0',
    marginTop:10.29
  },
  Button:{
    paddingTop:15,
    alignItems:'center',
    borderRadius:20,
    backgroundColor: "#38A7D0",
    width:353.92,
    height:61.73,
  },
  ButtonGoogle:{
    color:'#C7C8C8',
    paddingTop:15,
    alignItems:'center',
    borderRadius:20,
    backgroundColor: "#C7C8C8",
    width:323.72,
    height:61,
  },
  textButton:{
    fontSize:20,
    fontWeight: 'bold',
    color:'white'
  },
  textForgot:{
    marginLeft:236,
    marginBottom:9,
    marginTop :5.94,
    color:'#007AFF',
    textDecorationLine:'underline'
  },
  textOr:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:18,
    marginTop:7.27,
    marginBottom:8
  },
  logoGoogle:{
    width:24,
    height:27,
    marginRight:17
  },
  textSignup:{ 
    color:'#007AFF',
    fontWeight:'bold'
  },
  tcbSignup:{
    marginLeft:7,
    marginTop:11.27
  },
  textDonthaveacc:{
    fontSize:16,
    color:'#A8A6A7',
    marginTop:11.27
  }
})