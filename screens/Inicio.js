import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Inicio = ({ email, handleLogout }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Inicio</Text>
      </View>
      <View style={styles.containerCard}>
        <Text style={styles.text}>Bienvenido</Text>
        <Text>{email}</Text>
        <TouchableOpacity style={styles.btn} onPress={handleLogout}>
          <Text>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  header: {
    backgroundColor: "#44aa33",
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
    backgroundColor: "#6666ee",
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
});
