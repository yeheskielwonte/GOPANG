import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ButtonAdd from '../../atoms/buttonAdd';

const CardWarung = props => {
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
      <View
        style={{
          width: 138,
          height: 88,
          backgroundColor: 'red',
          borderRadius: 20,
          top: 5,
        }}>
        <Image
          source={{uri: `data:image/jpeg;base64, ${props.image}`}}
          style={{marginTop: 14, marginBottom: 14}}
        />
      </View>

      <View
        style={{
          marginLeft: '0%',
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
            <Text style={styles.harga}>IDR. {props.harga}</Text>
          </View>
          <View style={{position: 'absolute', right: '20%', bottom: '-45%'}}>
            <ButtonAdd onPress={props.onPress} />
          </View>
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
          }}></View>
      </View>
    </View>
  );
};

export default CardWarung;

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
});
