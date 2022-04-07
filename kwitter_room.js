
//ADD YOUR FIREBASE LINKS HERE
      const firebaseConfig = {
            apiKey: "AIzaSyCCq27pR90wQFZDFC2ANei90xWD_CUha48",
            authDomain: "kwitter-d8182.firebaseapp.com",
            databaseURL: "https://kwitter-d8182-default-rtdb.firebaseio.com",
            projectId: "kwitter-d8182",
            storageBucket: "kwitter-d8182.appspot.com",
            messagingSenderId: "940826702260",
            appId: "1:940826702260:web:974a13fbabbd46e89102e1",
            measurementId: "G-2TMRFEF94L"
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}



