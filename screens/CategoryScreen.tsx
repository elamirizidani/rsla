import { Text, StyleSheet, View,Image, FlatList, Dimensions, Pressable } from 'react-native'
import React, { Component,useState } from 'react'
import { Video } from 'expo-av';
import { useNavigation, useRoute } from '@react-navigation/native';
import courseCategories from '../data/courseCategories';

const CategoryScreen = () => {
    const route = useRoute();
    const [videos, setVideos] = useState(courseCategories.courses.filter(e => e.category.id === route.params.id));
    const [playList, setPlayList] = useState(videos)

    // setPlayList([...playList.filter(e => e.category.id === '1')])



    const [videoUrl, setVideoUrl] = useState(videos[0].content);
    const [videoToitle, setVideoTitle] = useState(videos[0].title);

    const [hasPlayed, setPlayed] = useState(videos);
    const [currentPlaying,setCurrentPlaying] = useState(videos[0].id);
    


    const isPlayed = (isChecked)=>{
        const videosList = [...hasPlayed];
        const selectedVideo = videosList.find(
            a => a.id === isChecked
          );
          selectedVideo.isChecked = 1
          setVideos(videosList);

    }

    const ChangPlayVideo = (videoPath,videoTitle,isChecked) =>{
        setVideoUrl(videoPath);
        setVideoTitle(videoTitle);
        isPlayed(isChecked);
        setCurrentPlaying(isChecked);
        // console.log(isChecked)
        
    }
    return (
      <View style={styles.container}>
        {/* main video */}
        <View style={styles.topVideos}>
            <Video
                source={ videoUrl}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay
                isLooping={true}
                style={styles.playingVideo}
            />
                <Text style={styles.videoTitle}>{videoToitle}</Text>
        </View>
        <View style={styles.playLists}>
            <Text>Course List</Text>
            <FlatList
            data={videos}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>(

                <Pressable onPress={()=> ChangPlayVideo(item.content,item.title,item.id)} style={styles.playList}>
                    <View style={styles.playIconSection}>
                        <Image 
                            style={[styles.playIcon, {tintColor: currentPlaying === item.id ? '#fff':'#000'}]} 
                            source={ currentPlaying === item.id ? require('../assets/images/icons/pause.png'):require('../assets/images/icons/play.png')}
                            />
                    </View>
                    <View style={styles.videoContent}>
                        <Text>{item.title}</Text>
                    </View>
                    <Image 
                        style={[styles.playIcon, {tintColor: item.isChecked ? '#ffcc00' :'#000'}]} 
                        source={item.isChecked ? require('../assets/images/icons/checked.png') : require('../assets/images/icons/lock.png')}
                        />
                    
                </Pressable>

            )}
            />

            
        </View>
      </View>
    )
  }
  const {width,height} = Dimensions.get("window");
export default CategoryScreen;
const styles = StyleSheet.create({
    
    topVideos:{
        padding:20,
        height: height *30/100,
        borderRadius:20,
    },
    playingVideo:{ 
        height: '100%',
        borderRadius:20,
    },
    videoTitle:{
        fontSize:35,
        fontWeight:'600'
    },
    playList:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10
    },
    videoContent:{
        flex:3,
        paddingHorizontal:10
    },
    playLists:{
        padding:15,
        marginVertical:15,
        height: height * 60/100
    },
    playIconSection:{
        backgroundColor:'blue',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: '10%',
        height:35,
        borderRadius:30
    },
    playIcon:{
        width:25,
        height:25,
        
    }
})