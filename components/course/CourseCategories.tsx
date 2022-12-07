import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { CourseCategory } from '../../types'
import { useNavigation } from '@react-navigation/native'

export type CourseCategoriesProps = {
    Categories: CourseCategory;
}
const CourseCategories = ( props: CourseCategoriesProps) => {

    const {Categories} = props;
    const navigation = useNavigation();
    const goToCategory = () => {
        navigation.navigate('Category', { name: Categories.title, id: Categories.id });
    }

  return (
    <TouchableOpacity onPress={goToCategory} style={styles.caurseCat}>
        <View style={styles.caurseTitle}>
            <View style={styles.badges}>
                <AntDesign name="rocket1" size={18} color="white" />
            </View>
            <View style={styles.badges}>
                <AntDesign name="rocket1" size={12} color="white" />
                <Text style={{
                color: 'white',
                fontSize: '12'
                }}> {Categories.topics}</Text>
            </View>
        </View>
    <Text style={styles.quickLinkTitles}>{Categories.title}</Text>
  </TouchableOpacity>
  )
}

export default CourseCategories
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    caurseCat: {
        width: width * 35 / 100,
        height: '100%',
        flex: 1,
        padding: 10,
        backgroundColor: '#ffcc00',
        justifyContent: 'space-between',
        borderRadius: 20,
        marginHorizontal: 5
      },
      caurseTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      badges: {
        backgroundColor: '#18033e',
        borderRadius: 10,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      quickLinkTitles: {
        fontSize: 16,
        fontWeight: '600',
    
      }
})