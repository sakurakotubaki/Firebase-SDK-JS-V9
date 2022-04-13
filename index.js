// Firebaseを初期化
const firebaseApp = firebase.initializeApp({
  // APIキーをコピペする👇
  apiKey: "AIzaSyA7r0xr6JucqdkcVSx4CyiG0wsi_7E-eOQ",
  authDomain: "fir-frontend-78e72.firebaseapp.com",
  projectId: "fir-frontend-78e72",
  storageBucket: "fir-frontend-78e72.appspot.com",
  messagingSenderId: "66789952457",
  appId: "1:66789952457:web:b9f1bff0d4f9dc3413f618",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
  // input要素のtype属性を取得
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // console.log(email, password);

  // Promiseで、メールとパスワードを渡す必要がある👇
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      // ダイアログが表示されるようにする
      alert(err.message);
      console.log(err.code);
      console.log(err.user);
    });
};
// ログインするメソッド
const login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      // ダイアログが表示されるようにする
      alert(err.message);
      console.log(err.code);
      console.log(err.user);
    });
};
// データをFireStoreに保存するメソッド
const savaData = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // dbという変数にフォームのデータを入れる👆
  db.collection("users")
    .add({
      email: email,
      password: password
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

// FireStoreのデータを表示するメソッド
const readData = () => {
  db.collection('users')
  .get()
  .then((data) => {
    /** mapで新しい配列を生成する。スプレッド演算子で(...)で配列のようなオブジェクトを配列に変換する。
    配列.map(コールバック関する) コールバック関数によって新しい配列を生成する
    [...変換対象] 配列に変化する **/
    console.log(data.docs.map((item) => {
      return {...item.data()}
    }))
  })
}
