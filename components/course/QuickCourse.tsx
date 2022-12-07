import { FlatList, StyleSheet, Image, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useState } from 'react'

const QuickCourse = () => {

    const [quickCourses, setQuickCourses] = useState([
        { name: 'Greatings', courses: '10', image: '../../assets/images/imgs/img1.jpg', id: '1', cat: 'video' },
        { name: 'Greatings2', courses: '10', image: '../../assets/images/imgs/img1.jpg', id: '2', cat: 'text' },
        { name: 'Greatings3', courses: '10', image: '../../assets/images/imgs/img1.jpg', id: '3', cat: 'video' },
        { name: 'Greating', courses: '10', image: '../../assets/images/imgs/img1.jpg', id: '6', cat: 'video' },
        { name: 'Greatings4', courses: '10', image: '../../assets/images/imgs/img1.jpg', id: '4', cat: 'text' },
        { name: 'Greatingss4', courses: '10', image: '../../assets/images/imgs/img1.jpg', id: '5', cat: 'text' }
      ]);
    
      const [dataList, setDataList] = useState(quickCourses);
      const listTabs = [
        { name: 'All', key: '1', status: 'all' },
        { name: 'Videos', key: '2', status: 'video' },
        { name: 'Text', key: '3', status: 'text' },
      ]
    
      const [status, setStatus] = useState('all');
      const setStatusFilter = status => {
        if (status !== 'all') {
          setDataList([...quickCourses.filter(e => e.cat === status)])
        }
        else {
          setDataList(quickCourses);
        }
        setStatus(status);
      }


  return (
    <View style={styles.quickLinks}>
    <Text style={styles.quickTitle}>Quick Courses</Text>
    <View style={styles.caurseBtns}>
      {listTabs.map(e => <TouchableOpacity key={e.key} style={[styles.caurseCatBtn, status === e.status && styles.btnActive]} onPress={() => setStatusFilter(e.status)}>
        <Text style={status === e.status && styles.btnTextActive}>{e.name}</Text>
      </TouchableOpacity>)}

    </View>
    <FlatList style={styles.flatListQuickCourses} showsHorizontalScrollIndicator={false} data={dataList} keyExtractor={item => item.id} horizontal renderItem={({
      item
    }) => <TouchableOpacity style={styles.quicklinksItems}>
        <Image style={styles.quickLinkImg} source={require('../../assets/images/imgs/img1.jpg')} />
        <View>
          <Text style={styles.quickLinkTitles}>{item.name}</Text>
          <Text>{item.courses} Courses</Text>
        </View>
      </TouchableOpacity>} />
  </View>
  )
}

export default QuickCourse
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    quickLinks: {
        marginVertical: 20,
      },
      quickTitle: {
        fontSize: 35,
        fontWeight: '600'
      },
      quicklinksItems: {
        width: width * 42 / 100,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        marginRight: 10,
    
        // shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        // android shadow
        elevation: 6
      },
      quickLinkImg: {
        width: '100%',
        height: height * 15 / 100,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 20
      },
      quickLinkTitles: {
        fontSize: 16,
        fontWeight: '600',
    
      },
      flatListQuickCourses: {
        width: '100%',
        marginVertical: 10,
        paddingVertical: 18,
        paddingHorizontal: 5
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
})