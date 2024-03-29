import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');


const slides = [
  {
    id: '1',
    image: require('../../../src/assets/onboard/Onboard1.jpeg'),
    title: 'Find your Vacation Spot',
    subtitle:
      'Gopang is a travel service application that helps tourists to vacation in 3 beaches in Likupang',
  },
  {
    id: '2',
    image: require('../../../src/assets/onboard/Onboard2.jpeg'),
    title: 'Find Your Place',
    subtitle:
      'Booking homestay, Gazebos and ordering your food while you are travelling on 3 beaches in Likupang',
  },
  {
    id: '3',
    image: require('../../../src/assets/onboard/Onboard3.jpeg'),
    title: 'Make a Special Moment',
    subtitle:
      'Lets create an account and feel the experience of travelling in Likupang using GOPANG',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center',backgroundColor:'white'}}>
      <Image
        source={item?.image}
        style={{height: '83%', width}}
      />
      <View style={{alignItems:'center'}}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom:40
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#38A7D0',
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('LoginOptionsScreen')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: 'black',
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black',
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 21.6}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.80}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: 'black',
    fontSize: 13,
    width: 239,
    textAlign: 'center',
    lineHeight: 20,
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 535,
    width: '100%',
    resizeMode: 'contain',
    marginTop: 132,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'black',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#38A7D0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;
