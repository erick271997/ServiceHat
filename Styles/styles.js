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


//createAccount

signUpButton: {
  backgroundColor: '#3498db', // Azul para diferenciarlo del login
  padding: 15,
  borderRadius: 5,
  width: '100%',
  alignItems: 'center',
  marginVertical: 10,
},
signUpButtonText: {
  color: 'white',
  fontWeight: 'bold',
},
  
  // SearchBar
  searchBarWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  titleCreate: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
    marginBottom: 10,
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
profileContainer: {
  padding: 20,
  backgroundColor: '#F9F9F9',
},

profileImage: {
  width: '100%',
  height: 200,
  borderRadius: 12,
  marginBottom: 15,
},

profileTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
},

profileText: {
  fontSize: 16,
  color: '#555',
  marginBottom: 6,
},

hashtagsRow: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginVertical: 10,
},

hashtag: {
  backgroundColor: '#E0E0E0',
  borderRadius: 15,
  paddingHorizontal: 10,
  paddingVertical: 4,
  margin: 4,
  fontSize: 14,
  color: '#333',
},

ratingStars: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 10,
},

star: {
  color: '#FFD700',
  fontSize: 20,
  marginRight: 4,
},

infoSection: {
  marginTop: 15,
  paddingTop: 10,
  borderTopWidth: 1,
  borderColor: '#DDD',
},


//terms
// Estilos para Terms & Conditions
termsContainer: {
  flex: 1,
  padding: 20,
  backgroundColor: '#f5f5f5',
},

termsTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 16,
  color: '#1E90FF',
  textAlign: 'center',
},

termsText: {
  fontSize: 16,
  color: '#333',
  lineHeight: 24,
  marginBottom: 12,
},

termsSectionTitle: {
  fontSize: 18,
  fontWeight: '600',
  color: '#1E90FF',
  marginTop: 20,
  marginBottom: 8,
},


// saveButton:
saveButton: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
  backgroundColor: '#E8F0FE',
  padding: 10,
  borderRadius: 10,
  alignSelf: 'flex-start',
},

saveText: {
  marginLeft: 8,
  color: '#1E90FF',
  fontWeight: '600',
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



//AllServicesFeed
feedTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#1E90FF',
  marginBottom: 20,
  textAlign: 'center',
  backgroundColor: '#fff',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOpacity: 0.15,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 3 },
  elevation: 5,
},

feedContainer: {
  paddingHorizontal: 16,
  paddingTop: 16,
  backgroundColor: '#f4f4f4',
},

feedCard: {
  backgroundColor: '#fff',
  borderRadius: 10,
  marginBottom: 16,
  overflow: 'hidden',
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },
  flexDirection: 'column',
},

feedImagePlaceholder: {
  height: 160,
  backgroundColor: '#d9d9d9',
},

feedInfo: {
  padding: 12,
},

cardTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 4,
},

cardSub: {
  fontSize: 14,
  color: '#666',
  marginBottom: 2,
},
// 


 
  

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
