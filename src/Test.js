import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';

class Test extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  
  render() {
    // debugger
    console.log('initial state===>', JSON.stringify(this.props.data));
    return (
  
        <ScrollView>
          {this.props.data.map((item) => (
              <View style={{marginTop:20,margin:15,border:0.3,elevation:5,width:'95%',
            padding:10,height:'auto'}}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>Name :-</Text>
                    <Text style={{fontSize:15,marginRight:10,marginLeft:10}}>{item.name}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>capital :-</Text>
                    <Text style={{fontSize:15,marginRight:10,marginLeft:10}}>{item.capital}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>population :-</Text>
                    <Text style={{fontSize:15,marginRight:10,marginLeft:10}}>{item.population}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>latlng :-</Text>
                    <Text style={{fontSize:15,marginRight:10,marginLeft:10}}>{item.latlng}</Text>
                </View>
                </View>
             ))}
        </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('initial state', JSON.stringify(state));
  return {
    data: state.countries.country_listing,
  };
};

// const mapStateToProps = (state) => {
//     console.log("initial state",state)
//     return {
//         allCountryListing:state.countries.country_listing
//     };
//   };

const mapDispatchToProps = (dispatch) => {
  return {
    //countryData: () => dispatch(country_listing())
    // eslint-disable-next-line no-undef
    countryData: () => dispatch(countryData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
