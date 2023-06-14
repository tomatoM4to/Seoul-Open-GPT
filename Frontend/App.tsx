import React from 'react';
import {
  	SafeAreaView,
  	Text,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function App(): JSX.Element {
	console.log(123);
  	return (
    	<SafeAreaView style={{flex: 1}}>
			<MapView 
				style={{flex: 1}} 
				provider={PROVIDER_GOOGLE}
				initialRegion={{
					latitude: 37.4979,
      				longitude: 127.0276,
      				latitudeDelta: 0.150, // 줌 레벨을 더 확대
      				longitudeDelta: 0.150, // 줌 레벨을 더 확대
				}} />
    	</SafeAreaView>
  	);
}


export default App;
