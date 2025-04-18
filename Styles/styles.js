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

  // Estilo del botón de menú
menuButton: {
  padding: 8,
  borderRadius: 8,
  backgroundColor: '#fff',
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
},

// Menú desplegable
dropdownMenu: {
  position: 'absolute',
  top: 40,
  right: 0,
  backgroundColor: '#ffffff',
  borderRadius: 10,
  paddingVertical: 6,
  paddingHorizontal: 0,
  elevation: 6,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 8,
  width: 200,
  zIndex: 999,
},

// Cada ítem del menú
menuItem: {
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
},

// Texto de cada ítem
menuText: {
  fontSize: 16,
  color: '#333',
  fontWeight: '500',
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
  

  //Publicion

  adBannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'grey', // fondo negro para pruebas
    height: 100,
    width: '100%',
  },
  
  
  adImage: {
    width: '90%',
    height: 100,
    borderRadius: 10,
  },
  
  adText: {
    marginTop: 6,
    color: '#555',
    fontSize: 13,
  },
  

// BusinessProfile
container: {
  padding: 16,
  backgroundColor: '#fff',
},
profileImage: {
  width: '100%',
  height: 180,
  borderRadius: 12,
  marginBottom: 16,
  resizeMode: 'cover',
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#1E90FF',
  marginBottom: 10,
},
section: {
  marginBottom: 12,
},
label: {
  fontWeight: 'bold',
  fontSize: 14,
  color: '#333',
},
text: {
  fontSize: 14,
  color: '#555',
  marginTop: 2,
},
hashtag: {
  fontSize: 13,
  color: '#1E90FF',
  marginLeft: 4,
},





  //Populasres 
  populasresContainer: {
marginTop: 13,
  marginHorizontal: 2,
  padding: 8,
  borderRadius: 16,
  backgroundColor: '#f0f0f0',


    shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 6,
    },
    sectionTitle: {
      fontSize: 20,
      color: '#333',
      fontWeight: 'bold',
      marginBottom: 8,

    },
    serviceCard: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 16,
      marginBottom: 20,
      alignItems: 'flex-start',
    
      // Sombra tipo 3D elegante
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 6,
    },
    
    imagePlaceholder: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: '#d9d9d9',
      marginRight: 14,
    },
    
    serviceInfo: {
      flex: 1,
    },
    
    cardTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: '#111',
      marginBottom: 2,
    },
    
    cardSub: {
      fontSize: 13,
      fontWeight: '600',
      color: '#1E90FF',
      marginBottom: 2,
    },
    
    descriptionText: {
      fontSize: 13,
      color: '#444',
      marginBottom: 4,
    },
    
    hashtagsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 4,
    },
    
    hashtag: {
      fontSize: 12,
      marginRight: 8,
      color: '#1E90FF',
      fontWeight: '500',
    },
    zipCode: {
      fontSize: 12,
      color: '#888',
      marginTop: 4,
      fontWeight: '500',
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold'
    },


    //userProfile



profileSection: {
  backgroundColor: '#fff',
  marginVertical: 10,
  padding: 16,
  borderRadius: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
  borderWidth: 0.5,
  borderColor: '#ddd',
},

profilePhoto: {
  width: 100,
  height: 100,
  borderRadius: 50,
  alignSelf: 'center',
  marginBottom: 10,
  backgroundColor: '#eee',
},

profileName: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 4,
},

profileDescription: {
  fontSize: 14,
  textAlign: 'center',
  color: '#666',
},

profileLabel: {
  fontWeight: 'bold',
  marginBottom: 6,
  fontSize: 15,
},

hashtag: {
  backgroundColor: '#F0F0F0',
  color: '#333',
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 16,
  marginRight: 6,
  marginTop: 4,
  alignSelf: 'flex-start',
},

galleryItem: {
  marginTop: 10,
  borderTopWidth: 1,
  borderColor: '#eee',
  paddingTop: 10,
},

galleryPhoto: {
  width: '100%',
  height: 180,
  borderRadius: 10,
  marginBottom: 6,
  backgroundColor: '#ccc',
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
