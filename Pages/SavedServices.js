// Componets/Agenda.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Función para guardar un servicio en la agenda
const saveToAgenda = async (service) => {
  try {
    const saved = await AsyncStorage.getItem('agenda');
    const agenda = saved ? JSON.parse(saved) : [];

    // Evitar duplicados (por ID)
    const alreadySaved = agenda.some(item => item.id === service.id);
    if (!alreadySaved) {
      agenda.push(service);
      await AsyncStorage.setItem('agenda', JSON.stringify(agenda));
      console.log('✅ Servicio guardado en la agenda');
    } else {
      console.log('⚠️ Ya existe en la agenda');
    }
  } catch (error) {
    console.error('Error al guardar en la agenda:', error);
  }
};

export default saveToAgenda;
