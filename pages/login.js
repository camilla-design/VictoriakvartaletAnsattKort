
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import { Icon } from '@rneui/themed';


export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/Victoriakvartalet_2.jpeg')} />
      <Text style={styles.header}>Staffcard</Text>
      <Image style={styles.logo}
      source={require('../assets/vklogo_hvit.png')}
       />
       <View style={styles.cardBackground}>
        <Text style={styles.headline}>Login</Text>
        <Text style={styles.placeholderText} >Username</Text>
        <TextInput
        style={styles.input}
      />
      <Text style={styles.placeholderText}>Password</Text>
      <TextInput
        style={styles.input}
      />
      <TouchableOpacity style={styles.loginButton}>
    <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
<Icon
        name='warning'  color='#f50' style={{paddingTop: 20,}} />
<Text style={{width: 250, textAlign: 'center', paddingTop: 10,}}>NB! User can only be created by the employer</Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 10,
    width: '80%',
    shadowColor: 'gray',
    borderRadius: 10,
    
  },
  headline: {
    fontSize: 30,
    paddingBottom: 40,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  placeholderText: {
    textTransform: 'uppercase',
    fontSize: 12,
  },
  loginButton: {
    width: 130, 
    marginTop: 10, 
    backgroundColor: 'black',
  }, 
  buttonText: {
    color: 'white', 
    padding: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
