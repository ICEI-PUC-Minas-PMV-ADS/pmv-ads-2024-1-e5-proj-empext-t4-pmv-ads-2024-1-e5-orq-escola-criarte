import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  container: {
    flex: 1,
    padding: 20,
  },

  content: {
    flex: 1,
  },

  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#FFF"
  },

  title: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#413267',
  },

  profileInfo: {
    width: '75%',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  

  avatar: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#413267',
    marginBottom: 5,
    marginTop: 5,
  },

  text: {
    fontSize: 16,
    color: '#666',
  },

  input: {
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#EEE',
    borderColor: '#DDD',
    borderWidth: 1,
  },

  buttonContainer: {
    width: '80%',
    marginBottom: 10,
  },

  checkLogo: {
    width: 10,
    height: 10,
  },

  requisitos: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  eyeIcon: {
    marginLeft: -35,
    marginBottom: 10,
    color:"#413267",
  },

});

export default styles;
