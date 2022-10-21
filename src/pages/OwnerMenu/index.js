import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Header from '../../components/molecules/header';
import firebase from '../../config/Firebase';

const OwnerMenu = ({navigation, route}) => {
  const {uid} = route.params;
  const [homestay, setHomestay] = useState({});
  const [warung, setWarung] = useState({});
  const [isHomestay, setIsHomestay] = useState(false);
  const [isWarung, setIsWarung] = useState(false);

  const getHomestay = () => {
    firebase

      .database()
      .ref(`homestay/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setHomestay(res.val());
          setIsHomestay(true);
        }
      });
  };

  useEffect(() => {
    getHomestay();
  }, []);

  const getWarung = () => {
    firebase

      .database()
      .ref(`warung/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setWarung(res.val());
          setIsWarung(true);
        }
      });
  };

  useEffect(() => {
    getWarung();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Home" />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          top: 5,
          backgroundColor: '#00FFEF',
          width: '33%',
          height: '5%',
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          HOMESTAY
        </Text>
      </View>
      <View style={{top: '2%'}}>
        {isHomestay === false && (
          <TouchableOpacity
            onPress={() => navigation.navigate('AddHomestay', {uid: uid})}>
            <Image
              source={require('../../assets/owner/ButtonAddFood.png')}
              style={{margin: 20, width: 345, height: 170}}
            />
          </TouchableOpacity>
        )}

        {isHomestay === true && (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsOwner', {uid: uid})}>
              <Image
                style={{
                  width: 347,
                  height: 152,
                  borderRadius: 8,
                  alignSelf: 'center',
                  opacity: 0.4,
                }}
                source={{uri: `data:image/jpeg;base64, ${homestay.photo}`}}
              />
              <View
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  marginTop: '15%',
                }}>
                <Text style={{fontSize: 30, fontWeight: '600', color: 'black'}}>
                  {homestay.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          top: '4%',
          backgroundColor: '#00FFEF',
          width: '33%',
          height: '5%',
          borderRadius: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          RESTAURANT
        </Text>
      </View>

      <View style={{marginTop: '12%'}}>
        {isWarung === false && (
          <TouchableOpacity
            onPress={() => navigation.navigate('OAddWarung', {uid: uid})}>
            <Image
              source={require('../../assets/owner/ButtonAddFood.png')}
              style={{margin: 20, width: 345, height: 170}}
            />
          </TouchableOpacity>
        )}

        {isWarung === true && (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('OWarung', {uid: uid})}>
              <Image
                style={{
                  width: 347,
                  height: 152,
                  borderRadius: 8,
                  alignSelf: 'center',
                }}
                source={{uri: `data:image/jpeg;base64, ${warung.photo}`}}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default OwnerMenu;

const styles = StyleSheet.create({});
