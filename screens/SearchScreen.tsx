import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, Text, View, Keyboard, Button, FlatList } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import Shadow from "../components/Shadow";

const SearchScreen = () => {
    const [clicked,setClicked] = useState(false);
    const [searchPhrase,setSearchPhrase] = useState("");

    const [datas, setDatas] = useState([
      {'title':'Hello',lesson:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda culpa eum mollitia architecto possimus ',content:'',id:'1'},
      {'title':'Welcome',lesson:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda culpa eum mollitia architecto possimus ',content:'',id:'2'},
      {'title':'Hi',lesson:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda culpa eum mollitia architecto possimus ',content:'',id:'3'},
      {'title':'How are you',lesson:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda culpa eum mollitia architecto possimus ',content:'',id:'4'}
    ]);

  return (
    
    <View style={styles.container}>
      <View style={styles.containerSearchBox}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          // onChangeText={(text) => searchFilterFunction(text)}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
</View>
    <FlatList
      data={datas}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
        <View style={styles.filtedData}>
        <View style={styles.dataBody}>
          <Text style={{fontSize:25}}>{item.title}</Text>
          <Text style={{color:'#e32f45'}} numberOfLines={2}>{item.lesson}</Text>
        </View>
        <Feather name="info" size={24} color="black" style={{ padding: 1 }} />
      </View>
      )}
    />
      

    </View>
  );
};
export default SearchScreen;

// styles
const styles = StyleSheet.create({
  containerSearchBox: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  filtedData:{
    ...Shadow.shadow,
    marginHorizontal: 15,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
    marginVertical:10,
    borderRadius:12,
    alignItems:"center",
    backgroundColor:'#fff'
  },
  dataBody:{
    flex:2
  }
});
