import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import showImage from './src/showImage';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:'Gallery'}}/>
        <Stack.Screen name="showImage" component={showImage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;























// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, Text, Dimensions, Image } from "react-native";

// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");

// const App = () => {
//   // const [dimensions, setDimensions] = useState({ window, screen });

//   // const onChange = ({ window, screen }) => {
//   //   setDimensions({ window, screen });
//   // };

//   // useEffect(() => {
//   //   Dimensions.addEventListener("change", onChange);
//   //   return () => {
//   //     Dimensions.removeEventListener("change", onChange);
//   //   };
//   // });

//   return (
//     <View style={styles.container}>
//       <Image source={require('./violet.jpg')} style = {styles.backgroundImage} />
//       <View style = {styles.loginForm}>
//         <Text>TEST</Text>
//       </View>
//       {/* <ImageBackground style = {styles.backgroundImage} source={require('./violet.jpg')}>
//         <Text>
//           HELLO WORLD!!
//         </Text>
//       </ImageBackground>
//       <Text>{`Window Dimensions: height - ${dimensions.window.height}, width - ${dimensions.window.width}`}</Text>
//       <Text>{`Screen Dimensions: height - ${dimensions.screen.height}, width - ${dimensions.screen.width}`}</Text> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage:{
//     flex:1,
//     resizeMode:'cover',
//   },
//   loginForm: {
//   },
// });

// export default App;


// // import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import React, {useState} from "react";


// // function useWindowSize(){
// //   const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
// //   return size;
// // }

// function detectWindowSize(){
//     const [size, setHeight] = useState([Dimensions.get('window').height, Dimensions.get('window').width] )
//     return size
// }

// export default function App() {
//   // const [height, width] = useWindowSize();
//   const [HEIGHT, WIDTH] = detectWindowSize();
//   return (
//     <View>
//       <Text style = {styles.text}>
//         height: {HEIGHT}, width:{WIDTH}
//       </Text>

//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   text:{
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
