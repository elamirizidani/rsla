import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import courseCategories from '../data/courseCategories';
import CourseCategories from '../components/course/CourseCategories';
import QuickCourse from '../components/course/QuickCourse';



const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.caurseStatus}>
        <View style={styles.statusIcon}><AntDesign name="rocket1" size={12} color="white" /></View>
        <Text>Basic Mode</Text>
      </View>
      <Text style={styles.mainTitle}>Learn Signs</Text>
      <View style={styles.caurseCategories}>

        <View style={styles.caurseCatSection}>
          <FlatList
            style={{ width: "100%" }}
            horizontal
            data={courseCategories.categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CourseCategories Categories={item}/>

            )}
          />
        </View>
        <QuickCourse/>
      </View>
    </View>
  )
}

export default HomeScreen
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caurseStatus: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  statusIcon: {
    backgroundColor: '#ffcc00',
    padding: 5,
    borderRadius: 5,
    marginRight: 5
  },
  mainTitle: {
    fontSize: 50,
    fontWeight: '700',
    width: '100%',
    paddingHorizontal: 15
  },
  caurseCategories: {
    width: '100%',
    padding: 15
  },
  caurseBtns: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  btnActive: {
    backgroundColor: '#000'
  },
  btnTextActive: {
    color: '#fff'
  },
  caurseCatBtn: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#ffcc00',
    marginHorizontal: 5
  },
  caurseCatSection: {
    height: height * 18 / 100,
  },
 


})