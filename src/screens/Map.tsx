import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function Map() {
  const [location, setLocation] = React.useState({});
  const [errorMsg, setErrorMsg] = React.useState("");

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const onRegionChangeComplete = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 30.7333,
        longitude: 76.7794,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
      provider="google"
      onRegionChangeComplete={onRegionChangeComplete}
    ></MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
    zIndex: -1,
    position: "absolute",
  },
});
