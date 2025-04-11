import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Header general container
  headerContainer: {
    backgroundColor: '#1E90FF',
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },

  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
    // Menu button

  menuButton: {
    backgroundColor: 'white',
    color: '#1E90FF',
    width: 40,
    height: 40,    
    padding: 8,
    borderRadius: 8,
  },
  

  // Logo y texto
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
  },
  
  logoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    paddingTop: 2,
  },

  // SearchBar
  searchBarWrapper: {
    width: '100%',
    alignItems: 'center',
  },

  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 42,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },

  searchInput: {
    flex: 1,
    color: '#000',
    fontSize: 14,
  },

  filterButton: {
    marginLeft: 10,
    backgroundColor: '#1E90FF',
    padding: 8,
    borderRadius: 8,
  },

  // Login button
  loginButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  loginButtonText: {
    color: '#1E90FF',
    fontWeight: 'bold',
    fontSize: 14,
  },

  

  // login
  loginFormContainer: {
    padding: 20,
    gap: 12,
  },
  
  signUpText: {
    marginTop: 10,
    color: '#1E90FF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  

  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    color: '#000',
  },
  
  forgotPasswordText: {
    color: '#1E90FF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  
  createAccountButton: {
    marginTop: 20,
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  
  createAccountText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // ubication
  ubicationContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',

    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  
  ubicationLabel: {
    color: '#888',
    fontSize: 14,
  },
  
  ubicationValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  

    // Footer
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#f2f2f2',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      
      footerText: {
        fontSize: 12,
        color: '#555',
      },
      appContainer: {
        flex: 1,
        backgroundColor: '#fff',
      },
      
      appInnerContainer: {
        flex: 1,
      },
      
      contentWithFooter: {
        flex: 1,
        justifyContent: 'space-between',
      },
      
      

});

export default styles;
