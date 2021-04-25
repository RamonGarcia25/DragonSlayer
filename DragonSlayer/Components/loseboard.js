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


const loseboard = props => {
  return (
    <Modal transparent={true} visible={props.visible}>
      <View style={styles.container}>
        <View style={styles.modalBgContainer}>
          <ImageBackground
          //-------------I N S E R T  B A C K G R O U N D 
            source={require('../Assets/Images/Background/BG_modal_lose.png')}
            style={styles.modalBackgroundImage}>
            <View style={styles.modalInside}>
              <View style={styles.modalScoreNum}>
          
              </View>

              <View style={styles.modalScoreYS}>
                <Text style={[styles.modalScoreText, styles.modalScoreText1]}>
                  DEFEAT
                </Text>
       
              </View>
             
              <View style={styles.modalScoreNum2}>
                  <Text style={[styles.modalScoreText, styles.modalScoreText3]}>
                  Your Score:
                  </Text>

                  <Text style={[styles.modalScoreText, styles.modalScoreText2]}>
                    {props.totalScore}
                  </Text>
              </View>
              {/* ------------- */}
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
                    onPress={() => navigation.navigate('DS_Homescreen')}>
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
    </Modal>


    
  );
};
export default loseboard;

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
    margin: wp('7.5%'),
    paddingVertical: wp('7.5%'),
  },
  modalInside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chestGIF: {
    width: wp('50%'),
    resizeMode: 'contain',
    marginTop: 20,
  },

  modalScoreYS: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 80,
  },
  modalScoreText: {
    fontFamily: 'Bombardment',
    textShadowColor: 'rgb(191,104,80)',
    textShadowOffset: {width: hp('-0.3%'), height: hp('0.4%')},
    textShadowRadius: hp('0.2%'),
    color: '#f0a66e',
    paddingTop: hp('1%'),
  },
  modalScoreText1: {
    fontSize: hp('7%'),
  },
  modalScoreText3: {
    fontSize: hp('4%'),
    marginTop: 10,
  },
  modalScoreNum: {
    flex: 0.55,
    alignItems: 'center',
  },
  modalScoreNum2: {
    flex: 0.55,
    alignItems: 'center',
    paddingTop: hp('1'),
   
  },
  modalScoreText2: {
    fontSize: hp('9%'),
  },
  modalText: {
    fontFamily: 'VarelaRound-Regular',
    textShadowColor: 'rgb(191,104,80)',
    textShadowOffset: {width: hp('-0.3%'), height: hp('0.2%')},
    textShadowRadius: hp('0.2%'),
    color: '#f0a66e',
    textAlign:'center',
    paddingTop: hp('2%'), 
    fontSize: hp('3%'),
  },
  modalButtonSpace: {
    marginTop:10,
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: hp('5%'),
  },
  modalButtonSpace1: {
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
});
