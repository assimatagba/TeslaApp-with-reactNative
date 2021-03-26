import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    carContainer: {
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        position: 'absolute'
      },
      
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
      }, 
    
      title: {
        fontSize: 40,
        fontWeight: 'bold'
      },
    
      subtitle: {
        fontSize: 12,
        color: 'grey'
      },
    
      image: {
        width: '100%',
        height: '100%',
        position: 'absolute'
      },
      buttomContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
      },
      subtitleCTA: {
        textDecorationLine: 'underline'
      }
})

export default styles;