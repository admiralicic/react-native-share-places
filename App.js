import { Navigation } from 'react-native-navigation';
import { Provider } from "react-redux";

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});

























// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from 'react';
// import { Platform, StyleSheet, View } from 'react-native';
// import { connect} from 'react-redux';

// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// class App extends Component<Props> {

//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   }

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   }

//   placeDeletedHandler = () => {
//    this.props.onDeletePlace();
//   }

//   modalClosedHandler = () => {
//    this.props.onDeselectPlace();
//   }

//   render() {

//     return (
//       <View style={styles.container}>
//         <PlaceDetail 
//           selectedPlace={this.props.selectedPlace} 
//           onItemDeleted={this.placeDeletedHandler} 
//           onModalClosed={this.modalClosedHandler}/>
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList 
//           places={this.props.places} 
//           onItemSelected={this.placeSelectedHandler} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   listContainer: {
//     width: "100%"
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
