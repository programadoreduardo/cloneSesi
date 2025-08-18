import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import Header from "../../components/header";


export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.fundo}>

        <View style={styles.paper}>
          <View>
          <Image
          source={require('@/assets/images/perfil.jpg')}
          style={{borderRadius: 50, width: 100, height: 100, marginBottom: 10,
             elevation: 3,           // Sombra no Android
    shadowColor: '#000',    // Sombra no iOS
    shadowOffset: { width: 50, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
          }}/>
          <TouchableOpacity style={styles.iconEdit}>
            <MaterialIcons name="edit" size={15} color="gray" />
          </TouchableOpacity>
          </View>

          <CustomText weight="bold" style={styles.midText}> Eduardo </CustomText>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ marginRight: 10 }}>
            <CustomText weight="bold" style={styles.lazer}> Lazer e atividade Física</CustomText>
          </View>

          <View style={styles.numero}>
            <CustomText weight='bold' style={styles.textNumber}>2</CustomText>
          </View>
        </View>



        <View style={styles.paper}>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fundo,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
  fundo: {
    width: "90%",
    height: "70%",
    backgroundColor: Colors.branco,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    borderRadius: 40,
    marginTop: 20,

  },
  paper: {
    backgroundColor: '#fff', // Fundo branco
    borderRadius: 8,         // Bordas arredondadas
    padding: 16,            // Espaçamento interno
    // Sombras (funciona diferente no iOS e Android)
    elevation: 3,           // Sombra no Android
    shadowColor: '#000',    // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  lazer: {
    fontSize: 16,
    marginVertical: 20,
    color: Colors.cinza
  },
  iconText: {
    color: '#DA291C', // vermelho SESI
    fontSize: 32,
  },
  iconEdit: {
    position: "absolute",
    bottom: 90,
    right: 0,
    backgroundColor: Colors.branco,
    borderRadius: 50,
    padding: 5,
    borderWidth: 2,
    borderColor: "#fff",
     shadowColor: '#000',    // Sombra no iOS
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  numero: {
    backgroundColor: Colors.vermelho,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textNumber: {
    color: Colors.branco,
    fontSize: 10,
    textAlign: "center",
    paddingTop: 5
  },
  midText: {
    fontSize: 12,
    color: Colors.cinza,
    textAlign: "center",
    marginBottom: 5,
  },
});