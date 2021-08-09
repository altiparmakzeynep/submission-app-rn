import { StyleSheet } from 'react-native';
import { responsiveSize, PhoneWidth, PhoneHeight } from '../../../components/config/env';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    headerContainer: {
      borderBottomWidth: 1,
      borderColor: '#eeeeee',
      justifyContent: 'center',
      marginTop: PhoneHeight * 0.05,
      width: PhoneWidth * 0.9, 
      height: PhoneHeight * 0.1,
      backgroundColor: '#fff', 
    },
    bottomTeamsButton: {
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7dcfb6',
      marginHorizontal: responsiveSize(3),
      width: PhoneWidth * 0.4,
      height: PhoneHeight * 0.075
    },
    teamsNameText: {
      color: '#fff',
      fontWeight: '500',
      fontSize: responsiveSize(17)
    },
    submissionContainer: {
      borderRadius: 5,
      marginVertical: responsiveSize(10),
      backgroundColor: '#f79256',
      width: PhoneWidth * 0.9,
      height: PhoneHeight * 0.3,
      alignSelf: 'center'
    },
    teamsHeaderText: {
      fontSize: responsiveSize(22),
      color: '#fff',
      fontWeight: '600',
      margin: responsiveSize(15)
    },
    submissionsText: {
      fontSize: responsiveSize(17),
      color: '#000',
      fontWeight: '500',
      marginLeft: responsiveSize(15)
    },
    titleContainer: {
      width: PhoneWidth,
      height: PhoneHeight * 0.1,
      justifyContent: 'center'
    },
    titleText: {
      fontSize: responsiveSize(22),
      marginLeft: PhoneWidth * 0.05,
      fontWeight: '400',
      color: '#434343'
    },
    plusButtonContainer: {
      width: PhoneWidth * 0.2,
      height: PhoneHeight * 0.1,
      justifyContent: 'center',
      marginTop: PhoneHeight * 0.85,
      position: 'absolute',
      alignItems: 'flex-start',
      alignSelf: 'flex-end',      
    },
    plusIconButton: {
      backgroundColor: '#4d4f4e',
      borderWidth: 3,
      position: "absolute",
      marginBottom: PhoneHeight * 0.1,
      borderRadius: 200,
      borderColor: '#3f4140',
      alignItems: 'center',
      justifyContent: 'center',
      width: responsiveSize(50),
      height: responsiveSize(50),
    },
    plusIcon: {
      width: responsiveSize(20), 
      height: responsiveSize(20)
    }
  });
  