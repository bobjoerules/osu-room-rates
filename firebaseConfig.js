import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, browserLocalPersistence, getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyAlQlj8YVo8lZftur7t7E00x6yTIYL9-TM',
  authDomain: 'osu-room-rates.firebaseapp.com',
  projectId: 'osu-room-rates',
  storageBucket: 'osu-room-rates.firebasestorage.app',
  messagingSenderId: '170430832418',
  appId: '1:170430832418:web:55761adfc3c0937ed5cf7b',
};

const app = initializeApp(firebaseConfig);

let auth;
if (Platform.OS === 'web') {
  auth = getAuth(app);
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db };
