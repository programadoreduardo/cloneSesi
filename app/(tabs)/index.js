import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";
import CustomText from "../../components/CustomText";
import Header from "../../components/header";


export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.fundo}>
        <View style={styles.paper}>
        </View>

        <View style={{flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
          <View style={{marginRight: 10}}>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.fundo,
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
    paddingTop: 20
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
  }

});