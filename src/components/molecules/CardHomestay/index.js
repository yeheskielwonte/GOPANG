import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ButtonDetails from '../../atoms/buttonDetails';

const CardHomestay = props => {
  return (
    <View
      style={{
        height: 118,
        width: '90.2%',
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0,
      }}>
      <Image
        source={{uri: `data:image/jpeg;base64, ${props.image}`}}
        style={{
          marginTop: 14,
          marginBottom: 14,
          width: 80,
          height: 90,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          marginLeft: 12,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 60,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.containerTitle}>
              <Text style={styles.wahyu}>{props.title}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 11}}>
            <Image source={require('../../../assets/icon/Direction.png')} />
            <Text style={styles.location}>{props.location}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: '15%',
            right: '-5%',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              right: '11%',
              color: 'black',
              fontSize: 14,
            }}>
            {props.rating}
          </Text>
          <Image source={require('../../../assets/rating.png')} />
        </View>

        <View
          style={{
            width: 110,
            height: 14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 29,
            marginLeft: 11,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#38A7D0', fontWeight: 'bold', fontSize: 12}}>
              IDR {props.price}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 10, marginTop: 1}}>
              /Night
            </Text>
          </View>
          <View
            style={{position: 'absolute', marginLeft: 80, marginBottom: 50}}>
            {props.status === 'available' && (
              <Text style={styles.status}>{props.status}</Text>
            )}
            {props.status === 'unavailable' && (
              <Text style={styles.status1}>{props.status}</Text>
            )}
            <ButtonDetails onSubmit={props.onPress} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardHomestay;

const styles = StyleSheet.create({
  wahyu: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontWeight: 'normal',
    fontSize: 12,
    width: 187,
    height: 16,
    marginLeft: 4,
  },
  containerTitle: {
    width: 167,
    height: 22,
    marginTop: 11,
    marginBottom: 5,
    marginLeft: 11,
    marginRight: 55,
    flexDirection: 'row',
  },
  status: {
    fontSize: 10,
    marginLeft: '69%',
    marginTop: -12,
    color: 'green',
  },
  status1: {
    fontSize: 10,
    marginTop: 3,
    marginTop: -12,
    marginLeft: '66%',
    color: 'black',
  },
});
