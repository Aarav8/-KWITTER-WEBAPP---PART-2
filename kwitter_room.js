const firebaseConfig = {
      apiKey: "AIzaSyAiuKpK7uohzzxlxnThjdjeZv0a8OkAWxU",
      authDomain: "kwitter-project-807e4.firebaseapp.com",
      databaseURL: "https://kwitter-project-807e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-807e4",
      storageBucket: "kwitter-project-807e4.appspot.com",
      messagingSenderId: "580254690591",
      appId: "1:580254690591:web:e82b4717900d3a0d94942a"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
