import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { Label, Grid, Col, Button } from "native-base";
import { CustomHeader } from "../components/CustomHeader";
import { styles } from "./styles";
import { COLORS } from "../utils";
import { WeatherStatusImage } from "./WeatherStatusImage";

export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../assets/chat.png")}
        style={[styles.drawerIcon, { tintColor: tintColor }]}
      />
    )
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const weatherObject = this.props.navigation.getParam("weatherObject")
      ? this.props.navigation.getParam("weatherObject").data
      : null;

    return (
      <React.Fragment>
        <CustomHeader
          title="Home"
          toggleDrawer={this.props.navigation.toggleDrawer}
        />
        {weatherObject ? (
          <View style={localStyles.parentContainer}>
            <ImageBackground
              source={require("../assets/img/header-background.png")}
              style={localStyles.cardBackground}
            >
              <View style={localStyles.tempContainer}>
                <WeatherStatusImage icon={weatherObject.weather[0].icon} />
                <Label style={[localStyles.tempTextStyle]}>
                  {weatherObject.main.temp}
                  &deg;F
                </Label>
                <Label style={[localStyles.weatherDescTextStyle]}>
                  {weatherObject.weather[0].main}
                </Label>
                <Label style={[localStyles.weatherDescTextStyle]}>
                  {weatherObject.name}, {weatherObject.sys.country}
                </Label>
              </View>
            </ImageBackground>
            <Grid style={localStyles.gridContainer}>
              <Col style={localStyles.contentCard}>
                <Image
                  source={require("../assets/img/wind.png")}
                  style={localStyles.contentImage}
                />
                <Label>Wind Speed</Label>
                <Label
                  style={{ color: COLORS.TEXT_COLOR_BLACK, marginTop: 10 }}
                >
                  {weatherObject.wind.speed}
                </Label>
              </Col>
              <Col style={localStyles.contentCard}>
                <Image
                  source={require("../assets/img/pressure.png")}
                  style={localStyles.contentImage}
                />
                <Label>Pressure</Label>
                <Label
                  style={{ color: COLORS.TEXT_COLOR_BLACK, marginTop: 10 }}
                >
                  {weatherObject.main.pressure}
                </Label>
              </Col>
            </Grid>
            <Grid style={localStyles.gridContainer}>
              <Col style={localStyles.contentCard}>
                <Image
                  source={require("../assets/img/humidity.png")}
                  style={localStyles.contentImage}
                />
                <Label>Humidity</Label>
                <Label
                  style={{ color: COLORS.TEXT_COLOR_BLACK, marginTop: 10 }}
                >
                  {weatherObject.main.humidity}
                </Label>
              </Col>
              <Col style={localStyles.contentCard}>
                <Image
                  source={require("../assets/img/precipitation.png")}
                  style={localStyles.contentImage}
                />
                <Label>Precipitation</Label>
                <Label
                  style={{ color: COLORS.TEXT_COLOR_BLACK, marginTop: 10 }}
                >
                  {weatherObject.clouds.all}
                </Label>
              </Col>
            </Grid>
          </View>
        ) : (
          <View style={localStyles.tempContainer}>
            <Label> Please select Location first to see the weather.</Label>

            <Button
              style={[styles.buttonCenter, styles.buttonSolid]}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text uppercase={false} style={styles.buttonText}>
                Location
              </Text>
            </Button>
          </View>
        )}
      </React.Fragment>
    );
  }
}
const localStyles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: COLORS.PAGE_BACKGROUND_COLOR_BLUE
  },
  tempContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  tempTextStyle: {
    color: COLORS.TEXT_COLOR_WHITE,
    fontSize: 35,
    padding: 5,
    fontWeight: "400"
  },
  weatherDescTextStyle: {
    color: COLORS.TEXT_COLOR_WHITE,
    fontSize: 20,
    fontWeight: "300"
  },
  cardBackground: {
    width: "100%",
    height: "40%"
  },
  contentCard: {
    backgroundColor: "#FFF",
    height: 165,
    margin: 5,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  gridContainer: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  contentImage: {
    width: 40,
    height: 40
  }
});
