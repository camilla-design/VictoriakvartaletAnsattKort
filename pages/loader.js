
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/Victoriakvartalet_2.jpeg')} />
      <Text style={styles.header}>Ansattkort</Text>
      <Image style={styles.logo}
      source={require('./assets/vklogo_hvit.png')}
       />
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
    fontSize: 25,
    top: 100,
  },
  logo: {
    position: 'absolute',
    top: 100,
  }
});
