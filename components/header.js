import { Image, StyleSheet, View } from "react-native";
import Logo from "../assets/images/logo.svg";
import Logout from "../assets/images/logout.svg";

export default function Header() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/sesiLogo.png')}
                style={styles.imagem}
                resizeMode="contain"
            />
            
            <View style={styles.iconsContainer}>
                <View style={styles.icon}>
                    <Logo width={35} height={35} />
                </View>
                <View style={styles.icon}>
                    <Logout width={35} height={35} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40,
        padding: 10,
        backgroundColor: "#ffff",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    imagem: {
        width: 130,
        height: 39,
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginHorizontal: 3, 
        paddingRight: 10 
    }
})