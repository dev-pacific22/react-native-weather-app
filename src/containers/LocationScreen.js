import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Card, Label, Button, Text, View, Picker, Item } from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import { fetchRequest } from "../service/NetworkCommunication";
import { CustomHeader, MaterialInput, CustomPicker } from "../components";
import { COLORS, COUNTRY_ARRAY, BASE_URL } from "../utils";
import { WEATHER_API_KEY } from "../config/config";

import { styles } from "./styles";

export default class LocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      selectedCity: "pune",
      selectedCountry: "india",
      selectedState: "maharashtra",
      selectedCountryIndex: 0,
      selectedStateIndex: 0,
      cityId: 1259229,
      city: COUNTRY_ARRAY[0].state[0].city,
      state: COUNTRY_ARRAY[0].state,
      country: COUNTRY_ARRAY
    };
  }

  static navigationOptions = {
    drawerLabel: "Location",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/weather.png")}
        style={[styles.drawerIcon, { tintColor: tintColor }]}
      />
    )
  };

  onGetWeatherPress = () => {
    const cityId = this.state.cityId;
    url = `${BASE_URL}weather?id=${cityId}&appid=${WEATHER_API_KEY}`;
    this.setState({
      isLoading: true
    });
    fetchRequest(url)
      .then(response => {
        this.setState({
          isLoading: false
        });
        this.props.navigation.navigate("Home", {
          weatherObject: response
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false
        });
        alert(error);
      });
  };

  onCityValueChange = (item, index) => {
    this.setState({
      selectedCity: item,
      cityId: this.state.city[index].id
    });
  };

  onCountryValueChange = (item, index) => {
    this.setState({
      selectedCountry: item,
      state: COUNTRY_ARRAY[index].state,
      selectedCountryIndex: index
    });
  };

  onStateValueChange = (item, index) => {
    this.setState({
      selectedState: item,
      city: COUNTRY_ARRAY[this.state.selectedCountryIndex].state[index].city,
      selectedStateIndex: index
    });
  };
  render() {
    const {
      selectedCountry,
      selectedCountryIndex,
      selectedState,
      selectedStateIndex,
      selectedCity
    } = this.state;
    return (
      <React.Fragment>
        <CustomHeader
          title="Location"
          toggleDrawer={this.props.navigation.toggleDrawer}
        />
        <View style={localStyles.rootContainerStyle}>
          <Spinner
            visible={this.state.isLoading}
            textStyle={{ color: "#FFF" }}
          />
          <Card style={localStyles.containerStyle}>
            <Label style={styles.labelHeader}>Select Location</Label>

            <CustomPicker
              items={COUNTRY_ARRAY}
              selectedValue={selectedCountry}
              onValueChange={this.onCountryValueChange}
            />

            <CustomPicker
              style={localStyles.pickerStyle}
              items={COUNTRY_ARRAY[selectedCountryIndex].state}
              selectedValue={selectedState}
              onValueChange={this.onStateValueChange}
            />

            <CustomPicker
              style={localStyles.pickerStyle}
              items={
                COUNTRY_ARRAY[selectedCountryIndex].state[selectedStateIndex]
                  .city
              }
              selectedValue={selectedCity}
              onValueChange={this.onCityValueChange}
            />

            <Button
              style={[styles.buttonCenter, styles.buttonSolid]}
              onPress={() => this.onGetWeatherPress()}
            >
              <Text uppercase={false} style={styles.buttonText}>
                Get Weather
              </Text>
            </Button>
          </Card>
        </View>
      </React.Fragment>
    );
  }
}

const localStyles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  rootContainerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    backgroundColor: COLORS.PAGE_BACKGROUND_COLOR
  },
  containerStyle: {
    alignSelf: "stretch",
    minWidth: 320,
    padding: 25,
    alignSelf: "center"
  },

  pickerStyle: {
    margin: 0,
    padding: 0
  }
});
