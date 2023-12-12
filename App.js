import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ paddingTop: 20, position: 'absolute', zIndex: 1 }}>English(Np) v</Text>

      {/* form */}
      <View style={styles.loginForm}>
        <Image source={require("./assets/instagramtext.png")} style={styles.instaText} />
        <TextInput placeholder='Phone number, email or username' style={styles.txtInput} />
        <TextInput placeholder='Password' style={styles.txtInput} secureTextEntry={true} />
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0, flexDirection: 'row', padding: 7, marginTop: 20 }}>
        <Text style={styles.primaryTxt}>Forgot your login details? <Text style={styles.secondaryTxt}> Get help</Text></Text>
        <Pressable onPress={() => { }}>

        </Pressable>
      </View>
      <Text style={{ marginVertical: 25 }}>----------------- OR --------------------</Text>
      <Pressable style={{ flex: 0, flexDirection: 'row', marginBottom: 40 }} onPress={() => { }}>
        <Image source={require("./assets/fblogo.png")} style={styles.fbLogo} /><Text>Login with facebook</Text>
      </Pressable>

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: "center", marginBottom: -65 }}>
        <View style={{ borderBottomColor: "black", borderBottomWidth: 2, width: 500, marginBottom: 14 }}></View>
        <Text style={styles.primaryTxt}>Don't have an account?
          <Text style={styles.secondaryTxt} onPress={() => { }}> Sign in</Text>
        </Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  instaText: {
    width: 180,
    height: 80,
    marginTop: 75,
    objectFit: 'fill'
  },
  loginForm: { width: "90%", alignItems: 'center', justifyContent: "center", paddingTop: 55 },
  txtInput: {
    borderWidth: 1, borderRadius: 4, backgroundColor: "#D3D3D3", fontSize: 16, padding: 10, margin: 10, width: 350
  },
  loginBtn: {
    backgroundColor: "#34a1eb", borderRadius: 6, color: "white", fontSize: 20, textAlign: 'center', fontWeight: "700", padding: 10, width: 350
  },
  fbLogo: {
    width: 25, height: 22, objectFit: "fill", marginRight: 5
  },
  primaryTxt: { color: "grey" },
  secondaryTxt: { color: "black", fontWeight: "700" }
});
