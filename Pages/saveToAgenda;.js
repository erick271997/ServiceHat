import AsyncStorage from '@react-native-async-storage/async-storage';

const SaveToAgenda = async (service) => {
  // Verificar si el servicio es válido
  if (!service || !service.name) {
    console.error('Invalid service object:', service);
    return;
  }
  try {
    // Obtener la lista actual de servicios guardados
    const existingServices = await AsyncStorage.getItem('savedServices');
    const servicesList = existingServices ? JSON.parse(existingServices) : [];

    // Verificar si el servicio ya está guardado
    const isAlreadySaved = servicesList.some((s) => s.id === service.id);
    if (isAlreadySaved) {
      console.log('Service already saved:', service.name);
      return;
    }

    // Agregar el nuevo servicio a la lista
    servicesList.push(service);

    // Guardar la lista actualizada en AsyncStorage
    await AsyncStorage.setItem('savedServices', JSON.stringify(servicesList));
    console.log('Service saved successfully:', service.name);
  } catch (error) {
    console.error('Error saving service to agenda:', error);
  }
}
//


export default SaveToAgenda;