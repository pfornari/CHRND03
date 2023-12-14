import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Ingreso, Inicio } from "./screens";

const App = () => {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleLogout = () => {
    setEmail("");
    setPassword("");
    setUser(false);
  };

  return (
    <View style={styles.container}>
      {user ? (
        <Inicio email={email} handleLogout={handleLogout} />
      ) : (
        <Ingreso
          setUser={setUser}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  header: {
    backgroundColor: "#44aa22",
    width: "100%",
    alignItems: "center",
    paddingVertical: 25,
  },
  containerCard: {
    marginTop: 10,
    gap: 15,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    borderWidth: 1,
    backgroundColor: "#6666ff",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontFamily: "Lato-Regular",
    fontSize: 30,
  },
  text: {
    fontFamily: "Lato-Regular",
    fontSize: 16,
  },
  containerForm: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderWidth: 1,
    gap: 20,
    borderRadius: 10,
  },
  textBtn: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    width: "80%",
    borderRadius: 10,
    paddingLeft: 15,
    paddingVertical: 5,
    backgroundColor: "#eee",
  },
});
