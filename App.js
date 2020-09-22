// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// export default App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => setData(json.movies)
//       )

//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Text> {item.releaseYear}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createStore} from 'redux';
import Test from './src/Test';
import {Provider} from 'react-redux';
import store from './src/redux/store';

// const initialState = {
//     counter: 0
// }
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREASE_COUNTER':
//             return { counter: state.counter + 1 }
//         case 'DECRCOUNTER':
//             return { counter: state.counter - 1 }
//     }
//     return state
// }

// const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Test />
      </Provider>
    );
  }
}

export default App;

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
