
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCROuBlsWNbkusGqU0UOnNFRUp39swj72Q",
      authDomain: "kwitter-49ad8.firebaseapp.com",
      databaseURL: "https://kwitter-49ad8-default-rtdb.firebaseio.com",
      projectId: "kwitter-49ad8",
      storageBucket: "kwitter-49ad8.appspot.com",
      messagingSenderId: "1072135668708",
      appId: "1:1072135668708:web:515f7ff29cb35d83497df1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location - "letschat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
