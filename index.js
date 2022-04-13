// Firebaseを初期化
const firebaseApp = firebase.initializeApp({
  // APIキーをコピペする👇
  apiKey: "AIzaSyA7r0xr6JucqdkcVSx4CyiG0wsi_7E-eOQ",
  authDomain: "fir-frontend-78e72.firebaseapp.com",
  projectId: "fir-frontend-78e72",
  storageBucket: "fir-frontend-78e72.appspot.com",
  messagingSenderId: "66789952457",
  appId: "1:66789952457:web:b9f1bff0d4f9dc3413f618"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
  // input要素のtype属性を取得
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  // console.log(email, password);

  // Promiseで、メールとパスワードを渡す必要がある👇
  auth.createUserWithEmailAndPassword(email, password)
  .then((res) => {
    console.log(res.user)
  })
  .catch((err) => {
    // ダイアログが表示されるようにする
    alert(err.message)
    console.log(err.code)
    console.log(err.user)
  })
};

const login = () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  auth.signInWithEmailAndPassword(email, password)
  .then((res) => {
    console.log(res.user)
  })
  .catch((err) => {
    // ダイアログが表示されるようにする
    alert(err.message)
    console.log(err.code)
    console.log(err.user)
  })
}
