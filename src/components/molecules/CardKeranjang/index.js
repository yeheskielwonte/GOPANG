import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ButtonAdd from '../../atoms/buttonAdd';

const CardKeranjang = props => {
  console.log('card warung:', props);

  return (
    <View
      style={{
        height: 100,
        width: '90%',
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 0,
      }}>
      <Image source={props.image} style={{marginTop: 14, marginBottom: 14}} />
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
              <Text style={styles.namaMakanan}>{props.title}</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 11}}>
            <Text style={styles.harga}>{props.harga}</Text>
          </View>
        </View>
        <View style={styles.plusminus}>
          <TouchableOpacity style={{right: '50%'}}>
            <Image source={require('../../../assets/icon/minus.png')} />
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>1</Text>
          <TouchableOpacity style={{left: '50%'}}>
            <Image source={require('../../../assets/icon/plus.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardKeranjang;

const styles = StyleSheet.create({
  namaMakanan: {
    fontSize: 15,
    fontWeight: 'bold',
    height: 30,
  },
  harga: {
    fontWeight: 'normal',
    fontSize: 15,
    width: 187,
    height: 25,
  },
  location: {
    flexDirection: 'row',
    fontWeight: 'normal',
    fontSize: 13,
    width: 187,
    height: 50,
    marginLeft: 4,
  },
  containerTitle: {
    width: 167,
    height: 22,
    marginTop: 11,
    marginBottom: 5,
    marginLeft: 11,
    marginRight: 55,
  },
  plusminus: {
    flexDirection: 'row',

    marginLeft: '65%',
    marginBottom: 4,
  },
});
