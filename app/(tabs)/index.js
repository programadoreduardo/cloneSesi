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
              style={styles.imagePerfil}
            />

            <TouchableOpacity style={styles.iconEdit}>
              <MaterialIcons name="edit" size={15} color="gray" />
            </TouchableOpacity>
          </View>

          <CustomText weight="bold" style={styles.midText}> Eduardo </CustomText>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={styles.information}>
              <CustomText>Minhas informações</CustomText>
            </View>
            <View style={styles.information}>
              <CustomText>Editar Perfil</CustomText>
            </View>
            <View style={styles.information}>
              <CustomText>QR Code</CustomText>
            </View>
          </View>
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
    backgroundColor: Colors.branco, // Fundo branco
    borderRadius: 8,         // Bordas arredondadas
    padding: 16,            // Espaçamento interno
    width: "85%",
    alignItems: "center",
    elevation: 15,           // Sombra no Android
    shadowColor: '#000',    // Sombra no iOS
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
    bottom: 113,
    right: 5,
    backgroundColor: Colors.branco,
    borderRadius: 50,
    padding: 5,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
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
  imagePerfil: {
    borderRadius: 70,
    width: 130,
    height: 130,
    marginBottom: 10,
    borderColor: "#fff",
    borderWidth: 3,
    elevation: 1,
  }, information:{
    backgroundColor: Colors.rosa,
    width: 60
    , height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    marginBottom: 20,
  }
});

