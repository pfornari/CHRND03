import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Ingreso = ({ setUser, email, setEmail, password, setPassword }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.text}>Ingreso</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.btn} onPress={() => setUser(true)}>
          <Text style={styles.textBtn}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ingreso;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
  text: {
    fontFamily: "Lato-Bold",
    fontSize: 30,
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
    backgroundColor: "#fff",
  },
  btn: {
    borderWidth: 1,
    backgroundColor: "#44aa33",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});
