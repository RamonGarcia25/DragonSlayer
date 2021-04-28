import React from 'react';
import {
  Modal,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BlurView} from '@react-native-community/blur';

const scoreboard = props => {
  return (
    <Modal transparent={true} visible={props.visible}>
      <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
        <View style={styles.container}>
          <View style={styles.modalBgContainer}>
            {/* Background Image */}
            <ImageBackground
              source={require('../Assets/Images/Background/BG_modal_victory.png')}
              style={styles.modalBackgroundImage}>
              <View style={styles.modalInside}>
              
                 <View style={styles.modalScoreYS}>
                  <Text style={[styles.modalScoreText, styles.modalScoreText1]}>
                    Your Score:
                  </Text>
                </View>
                <View style={styles.modalScoreNum}>
                  <Text style={[styles.modalScoreText, styles.modalScoreText2]}>
                    {props.totalScore}
                  </Text>
                </View>



                <View style={styles.rewardsArea}>
                  <Image
                    source={require('../Assets/Images/coin_peso.png')}
                    style={styles.coinReward}
                  />
                  <Text style={styles.coinValue}>{props.roundCoins}</Text>
                </View>


               

                <View style={styles.modalButtonSpace}>
                  <View style={styles.modalButtonSpace1}>
                    <TouchableOpacity onPress={props.playAgain}>
                      <Image
                        source={require('../Assets/Images/playagainbutton.png')}
                        style={styles.modalButton}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalButtonSpace2}>
                    <TouchableOpacity
                      onPress={() => props.nav.navigate('DS_Homescreen')}>
                      <Image
                        source={require('../Assets/Images/quitbutton.png')}
                        style={styles.modalButton}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default scoreboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalBackgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  modalBgContainer: {
    flex: 1,
    paddingVertical: hp('10%'),
    paddingHorizontal: wp('7%'),
    backgroundColor: 'transparent',
  },
  modalInside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Coin Area
  coinReward: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginTop: 5,
  },

  coinValue: {
    fontSize: 60,
    fontFamily: 'Bombardment',
    textShadowColor: 'rgb(191,104,80)',
    textShadowOffset: {width: hp('-0.3%'), height: hp('0.4%')},
    textShadowRadius: hp('0.2%'),
    color: '#f0a66e',
    marginLeft: 10,
  },

  rewardsArea: {
    flexDirection: 'row',
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20,
  },

  modalScoreYS: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:125,
  },
  modalScoreText: {
    fontFamily: 'Bombardment',
    textShadowColor: 'rgb(191,104,80)',
    textShadowOffset: {width: hp('-0.3%'), height: hp('0.4%')},
    textShadowRadius: hp('0.2%'),
    color: '#f0a66e',
  },
  modalScoreText1: {
    fontSize:30,
  },
  modalScoreNum: {
    flex: 0.55,
    alignItems: 'center',
  },
  modalScoreText2: {
    fontSize: 40,
  },
  modalButtonSpace: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  modalButtonSpace1: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonSpace2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    borderRadius: hp('0.3%'),
    resizeMode: 'contain',
    height: hp('6%'),
    width: hp('22%'),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
