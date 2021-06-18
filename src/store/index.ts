import AsyncStorage from '@react-native-async-storage/async-storage';

export class Store {
  get = async (key: string) => {
    const response = await AsyncStorage.getItem(key);
    return JSON.parse(response);
  };

  set = async (key: string, value: string) => {
    const response = await AsyncStorage.setItem(key, JSON.stringify(value));
    return JSON.parse(response);
  }

  remove = async (key: string) => {
    const response = await AsyncStorage.removeItem(key);
    return JSON.parse(response);
  };

  reset = async () => {
    await AsyncStorage.clear();
  };
}
export default new Store();
