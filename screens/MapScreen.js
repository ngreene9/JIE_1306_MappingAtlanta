import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Alert, SafeAreaView, ImageBackground,ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Linking} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';

//Screen of the Unguided Tour Map
function MapScreen( {navigation}) {
  return (
    <View style={mapStyles.container}>
      <MapView style={{alignSelf: 'stretch', height: '100%'}} 
      region={{
      latitude: 33.739,
      longitude: -84.389,
      latitudeDelta: 0.0822,
      longitudeDelta: 0.04,
      }}
      >

        <Marker
        coordinate={{latitude: 33.739, longitude: -84.389}} 
        title={'Fulton County Stadium'}
        description={'Original home of both the Atlanta Braves and Atlanta Falcons'}
        >
          <Callout tooltip>
            <View>
            <TouchableOpacity onPressOut={() => navigation.navigate("Fulton County Stadium")}>
              <View style={mapStyles.bubble}>
                  <Text style={mapStyles.name}>Fulton County Stadium</Text>
                  <Image 
                    style={mapStyles.image}
                    source={require('../images/fultonCounty.jpg')}
                   />
               </View>
               <View style = {mapStyles.arrowBorder}/>
               <View style ={mapStyles.arrow}/>
            </TouchableOpacity>
            </View>
          </Callout>
        </Marker>

        <Marker
        coordinate={{latitude: 33.73768, longitude: -84.38688}} 
        title={'Summerhill Riots'}
        description={'1966 riots following the police shooting of Harold Prather'}
        >
          <Callout tooltip>
            <View>
            <TouchableOpacity onPressOut={() => navigation.navigate("Summerhill Riots")}>
              <View style={mapStyles.bubble}>
                  <Text style={mapStyles.name}>Summerhill Riots</Text>
                  <Image 
                    style={mapStyles.image}
                    source={require('../images/allenSummerhill.png')}
                   />
               </View>
               <View style = {mapStyles.arrowBorder}/>
               <View style ={mapStyles.arrow}/>
            </TouchableOpacity>
            </View>
          </Callout>
        </Marker>

        <Marker
        coordinate={{latitude: 33.755795, longitude: -84.381037}} 
        title={'SNCC Headquarters'}
        >
          <Callout tooltip>
            <View>
            <TouchableOpacity onPressOut={() => navigation.navigate("SNCC Headquarters")}>
              <View style={mapStyles.bubble}>
                  <Text style={mapStyles.name}>SNCC Headquarters</Text>
                  <Image 
                    style={mapStyles.image}
                    source={require('../images/snccHQ.jpg')}
                   />
               </View>
               <View style = {mapStyles.arrowBorder}/>
               <View style ={mapStyles.arrow}/>
            </TouchableOpacity>
            </View>
          </Callout>
        </Marker>

        <Marker
        coordinate={{latitude: 33.755659, longitude: -84.374387}} 
        title={'MLK Funeral'}
        >
          <Callout tooltip>
            <View>
            <TouchableOpacity onPressOut={() => navigation.navigate("MLK Funeral")}>
              <View style={mapStyles.bubble}>
                  <Text style={mapStyles.name}>MLK Jr. Funeral</Text>
                  <Image 
                    style={mapStyles.image}
                    source={require('../images/mlkFuneral.png')}
                   />
               </View>
               <View style = {mapStyles.arrowBorder}/>
               <View style ={mapStyles.arrow}/>
            </TouchableOpacity>
            </View>
          </Callout>
        </Marker>

      </MapView>     
    </View>
  );
}

//Make sure to inclue this export statement here or it won't import properly on App.js
export default MapScreen;

const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding:15,
    width: 150,
  },
  arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
  },
  arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
  },
  name: {
        fontSize: 16,
        marginBottom: 5,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height, 
  },
  image: {
        width: 120,
        height: 80,
  },
});