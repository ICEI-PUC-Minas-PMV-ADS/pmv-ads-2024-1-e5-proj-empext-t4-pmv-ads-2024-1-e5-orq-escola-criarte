import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },

  content: {
    flex: 1,
  },

  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    marginBottom: 20,
  },

  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  profileInfo: {
    width: '100%',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
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
    color: '#333',
  },

  text: {
    fontSize: 16,
    color: '#666',
  },

  input: {
    width: '100%',
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

});

export default styles;
