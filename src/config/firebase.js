// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3aMBB0qTPYzo5jEI7gijpAaYbcBOxduE",
  authDomain: "drillmachine-4d771.firebaseapp.com",
  projectId: "drillmachine-4d771",
  storageBucket: "drillmachine-4d771.firebasestorage.app",
  messagingSenderId: "103295786176",
  appId: "1:103295786176:web:fd314b0cb6345a9bed2125"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function fetchProductos(category) {
  const productosCollection = collection(db, "products");
  const snapshot = await getDocs(productosCollection);
  let productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  if (category) {
    productos = productos.filter((p) => p.category === category);
  }

  return productos;
}

export async function fetchProductById(id) {
  
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}

export { db };
