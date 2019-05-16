import axios from 'axios';

import { Platform } from 'react-native';

let url;

// Cause of genymotion we need to change the url here
// http://stackoverflow.com/questions/5528850/how-to-connect-localhost-in-android-emulator
if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:5000/';
} else {
  url = 'http://localhost:5000/';
}

axios.defaults.baseURL = url;

class UserApi {
  constructor(){
    this.path = `/users`;
  }

  async fetchUsers() {
    try {
      const { data } = await axios.get(this.path);
      return data.users;
    } catch (e) {
      throw e;
    }
  }
}

export {
  UserApi
};
