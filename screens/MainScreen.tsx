import { View, Text,ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("../assets/images/backgrounds/sign.jpeg")} 
        style={styles.mainSection}>
            <View style={styles.slugContainer}>
                <Text style={styles.Title}>
                    Let their character be stronger than their situation
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eum repellendus mollitia aspernatur nulla facilis
                </Text>
                <TouchableOpacity style={styles.startBtn}>

                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    mainSection:{
        flex:1,
        width:'100%',
        height:'100%',
        display: 'flex',
        justifyContent:'flex-end',
    },
    slugContainer:{
        width:'100%',
        backgroundColor:'#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: '30px',
        textAlign: 'center',
        gap:35,
        justifyContent:'center',
        alignItems:'center'
    },
    Title:{
        fontSize:32,
        fontWeight: '700'
    },
    startBtn:{
        backgroundColor:'#ffcc00',
        padding:'30px',
        borderRadius: 50,
    }
});
export default MainScreen