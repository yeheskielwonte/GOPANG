import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import FIREBASE from '../../../config/Firebase';

const Ratings = user => {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const starImgFilled =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={styles.CustomRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImgFilled}
                    : {uri: starImgCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  onSubmit = () => {
    console.log(user.id);
    console.log(defaultRating);
    if (defaultRating) {
      const Allrating = FIREBASE.database().ref(`users/pelanggan/${user.id}`);
      const Ratings = {
        rating: defaultRating,
      };
      Allrating.update(Ratings)
        .then(data => {
          alert(
            'Thankyou for your feedback' +
              defaultRating +
              ' ' +
              'of' +
              ' ' +
              maxRating.length +
              ' ' +
              'Star Rating',
          );
        })
        .catch(error => {
          console.log('Error : ', error);
        });
    } else {
      alert('Error', 'enter the message first');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomRatingBar />
      <Text style={styles.TextStyle}>
        {defaultRating + '/' + maxRating.length}
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnStyle}
        onPress={onSubmit}>
        <Text style={styles.textTombol}>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  CustomRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -20,
  },
  starImgStyle: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  btnStyle: {
    backgroundColor: '#ff6200',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 150,
    borderRadius: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ViewRat: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    color: 'yellow',
  },
});
export default Ratings;
