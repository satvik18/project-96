// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBcA1RtEzEIGVaMwEt9kAybdpbtWcodI2c",
      authDomain: "kwitter-2-b143d.firebaseapp.com",
      databaseURL: "https://kwitter-2-b143d-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-b143d",
      storageBucket: "kwitter-2-b143d.appspot.com",
      messagingSenderId: "525120449366",
      appId: "1:525120449366:web:d4baebb60a794281ff04f7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            msg: msg,
            like: 0

      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
