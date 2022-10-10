/* eslint-disable */
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    Linking,
    Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/molecules/header';
import ButtonTransaction from '../../components/atoms/ButtonTransaction';
import firebase from '../../config/Firebase';
import CountDown from '@ilterugur/react-native-countdown-component';
import ButtonChat from '../../components/atoms/ButtonChat';
import Ratings from '../../components/molecules/CardRating';
import StarRating from 'react-native-star-rating-widget';

const dayjs = require('dayjs');

const TransactionDetails = ({navigation, route}) => {
    const {uid, homestayID} = route.params;
    const [transaksi, setTransaksi] = useState({});
    const [users, setUsers] = useState({});
    const [ratingModal, setRatingModal] = useState(false);
    const [rating, setRating] = useState(0);

    //quick fix for countdown component not updating
    const [countdownComponentForceUpdate, setCountdownComponentForceUpdate] = useState(0);

    console.log(rating);
    // const time = Number(transaksi.time);
    const [time, setTime] = useState(transaksi.time);
    // console.log(typeof transaksi.time);
    // console.log(transaksi);

    const getTransaksi = () => {
        firebase
            .database()
            .ref(`transaksi/${homestayID}`)
            .on('value', res => {
                if (res.val()) {
                    setTransaksi(res.val());
                    // setTime(res.val().time);
                    // setHarga(res.val().price);
                }
            });
    };

    const getUser = () => {
        firebase
            .database()
            .ref(`users/pelanggan/${uid}`)
            .on('value', res => {
                if (res.val()) {
                    setUsers(res.val());
                    //   setOnPhoto(true);
                    // console.log(users.photo);
                }
                //   console.log('ini user', users);
            });
    };

    useEffect(() => navigation.addListener('blur', () => {
        setTransaksi(null);
    }), [navigation]);

    useEffect(() => {
        getUser();
        getTransaksi();
    }, []);

    //quick fix for countdown component not updating
    useEffect(() =>
            setCountdownComponentForceUpdate(prevState => prevState + 1)
        , [transaksi?.paymentExpireDateTime])

    const sendOnWa = () => {
        let mobile = transaksi.noHandphoneOwner;
        if (mobile) {
            // Kode negara 62 = Indonesia
            let url =
                'whatsapp://send?text=' + '&phone=62' + transaksi.noHandphoneOwner;
            Linking.openURL(url)
                .then(data => {
                    console.log('WhatsApp Opened');
                })
                .catch(() => {
                    alert('Make sure Whatsapp installed on your device');
                });
        } else {
            alert('Nomor telepon pembeli tidak terdaftar di Whatsapp.');
        }
    };

    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <Modal visible={ratingModal} transparent animationType="slide">
                <TouchableOpacity
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                    }}
                    onPress={() => setRatingModal(false)}
                />
                <View style={styles.Box}>
                    <StarRating rating={rating} onChange={setRating}/>
                </View>
            </Modal>

            <Header title="Transaction"/>

            <View style={{flexDirection: 'row'}}>
                <View style={{marginLeft: 20, marginRight: 61, marginTop: 30}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        {transaksi.namaHomestay}
                    </Text>
                    <Text style={{fontSize: 15, marginTop: 3}}>
                        {transaksi.alamatHomestay}
                    </Text>
                    {/* <Image
              style={{width: 51, height: 20, marginTop: 7}}
              source={require('../../assets/icon/Rating.png')}
            /> */}
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginTop: 18,
                        }}>
                        Owner : {transaksi.namaOwner}
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginTop: 8,
                        }}>
                        {transaksi.noHandphoneOwner}
                    </Text>
                </View>
                <Image
                    style={{
                        position: 'absolute',
                        marginTop: 30,
                        marginLeft: '65.1%',
                        width: 111,
                        height: 106,
                        borderRadius: 20,
                    }}
                    source={{uri: `data:image/jpeg;base64, ${transaksi.fotoHomestay}`}}
                />
            </View>
            <View
                style={{
                    height: 1,
                    marginTop: 18,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    width: 371,
                    alignSelf: 'center',
                }}
            />

            <View style={{marginTop: 13, marginBottom: 13, marginLeft: 20}}>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}>
                    {users.name}
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        marginTop: 12,
                    }}>
                    {users.email}
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        marginTop: 12,
                    }}>
                    {users.number}
                </Text>
            </View>

            <View
                style={{
                    height: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    width: 371,
                    alignSelf: 'center',
                }}
            />

            <View
                style={{
                    marginTop: 13,
                    justifyContent: 'space-between',
                    marginBottom: 13,
                    marginLeft: 20,
                    flexDirection: 'row',
                }}>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text
                        style={{
                            fontSize: 15,
                        }}>
                        Check-In
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginRight: 20}}>
                    <Text
                        style={{
                            fontSize: 15,
                            marginTop: 5,
                        }}>
                        {dayjs(transaksi.checkin).format('dddd, DD MMMM YYYY')}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 13,
                    marginLeft: 20,
                    // marginTop: 13, duplicate ?
                }}>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text
                        style={{
                            fontSize: 15,
                        }}>
                        Check-Out
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginRight: 20}}>
                    <Text
                        style={{
                            fontSize: 15,
                            marginTop: 5,
                        }}>
                        {dayjs(transaksi.checkout).format('dddd, DD MMMM YYYY')}
                    </Text>
                </View>
            </View>

            <View
                style={{
                    marginTop: 13,
                    marginBottom: 13,
                    justifyContent: 'center',
                    // marginLeft: 20,
                    flexDirection: 'row',
                }}>
                <CountDown
                    /*
                    ni react-native-countdown-component untuk sementara ada bug:
                    ((https://github.com/talalmajali/react-native-countdown-component/issues/102))

                    Depe countdown nda mo ta update walaupun tu data yang torang
                    ada passing ke 'until' itu so ta ganti.

                    Untuk sementara, depe fix itu torang msti rubah tu prop 'id' tiap kali torang pe
                    data transaksi berubah, makanya ada tambah state baru yang depe nama 'countdownComponentForceUpdate'
                    */
                    id={countdownComponentForceUpdate} //quick fix for countdown component not updating
                    until={transaksi?.paymentExpireDateTime ? dayjs(transaksi.paymentExpireDateTime).diff(dayjs(), 'second') : 0}
                    digitStyle={{backgroundColor: 'white'}}
                    onFinish={() => alert('finished')}
                    // onPress={() => alert('hello')}
                    size={15}
                />
            </View>

            <View
                style={{
                    height: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    width: 371,
                    alignSelf: 'center',
                    bottom: 10,
                }}
            />

            <ButtonChat title="Chat Owner" onPress={() => sendOnWa()}/>

            <View
                style={{
                    height: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    width: 371,
                    alignSelf: 'center',
                    top: 10,
                }}
            />

            <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 40}}>
                <View>
                    <ButtonTransaction
                        title={'Paid'}
                        btnView={styles.btnView}
                        onPress={() => navigation.replace('NavigationBar', {uid: uid})}
                    />
                    <ButtonTransaction
                        title={'Rating'}
                        onPress={() => setRatingModal(true)}
                    />
                </View>
                <View style={{marginLeft: '10%', marginTop: 10}}>
                    <Image
                        style={{width: 80, height: 80, alignSelf: 'center'}}
                        source={require('../../assets/icon/iconOrderStatus.png')}
                    />
                    <Text style={{fontSize: 20, alignSelf: 'center'}}>
                        {transaksi.status}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default TransactionDetails;

const styles = StyleSheet.create({
    btnView: {
        marginTop: '20%',
        marginBottom: 57.69,
        alignItems: 'center',
    },
    Box: {
        backgroundColor: '#E6E6E6',
        // opacity: 0.9,
        width: '85%',
        height: '57%',
        borderRadius: 5,
        alignSelf: 'center',
        top: '15%',
    },
});
