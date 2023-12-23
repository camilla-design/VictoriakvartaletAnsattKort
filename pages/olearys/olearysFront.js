import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/ol_bg.png')} />
      <Text style={styles.header}>Staffcard</Text>
      <Image style={styles.logo}
      source={require('./assets/vklogo_hvit.png')}
       />
       <View style={styles.cardBackground}>
        <Image style={styles.companyLogo} source={require('./assets/logo_ol.png')} />
        <Text style={styles.staffName}>Camilla</Text>
        <Text style={styles.staffName}>Reppen</Text>
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20,}}>
          <Text style={{fontWeight: '500', padding: 3, fontSize: 20,}}>Date:</Text>
          <Text style={{fontWeight: '100', padding: 3, fontSize: 20,}}>11.11.88</Text>
        </View>
        <View style={{ flex: 2, flexDirection: 'row', }}>
          <Text style={{fontWeight: '500', padding: 3, fontSize: 20,}}>Title:</Text>
          <Text style={{fontWeight: '100', padding: 3, fontSize: 20,}}>Hovmester</Text>
        </View>
        <Image style={styles.cardValue} source={require('./assets/silver.jpg')} />
        
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    top: 40,
    textTransform: 'uppercase',
    fontWeight: '800',
  },
  logo: {
    position: 'absolute',
    top: 60,
    width: 100,
    height: 100,
  },
  cardBackground: {
    backgroundColor: 'white',
    width: 300,
    height: 450,
    position: 'absolute',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyLogo: {
    width: 250,
    height: 100,
    margin: 20,
  },
  staffName: {
    fontSize: 35,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  cardValue: {
    width: 50,
    height: 50,
    marginBottom: 40,
    borderRadius: 50,
  }
  
});
