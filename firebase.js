import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "demo",
  authDomain: "demo",
  projectId: "demo",
  storageBucket: "demo",
  messagingSenderId: "demo",
  appId: "demo"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export async function ensureUser() {
  const user = auth.currentUser;
  if (user) return user;
  const result = await signInAnonymously(auth);
  return result.user;
}
