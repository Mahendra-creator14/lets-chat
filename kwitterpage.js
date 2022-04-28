var firebaseConfig = {
    apiKey: "AIzaSyCHRQGSzfvkYUtdaMBC5e2QF1L-RGqI4xA",
    authDomain: "kwitter-b5efd.firebaseapp.com",
    databaseURL: "https://kwitter-b5efd-default-rtdb.firebaseio.com",
    projectId: "kwitter-b5efd",
    storageBucket: "kwitter-b5efd.appspot.com",
    messagingSenderId: "753713252820",
    appId: "1:753713252820:web:fea668b5fafa8a40202e41"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var username=localStorage.getItem("username");
 var roomname=localStorage.getItem("roomname");
document.getElementById("username").innerHTML="Welcome "+username;
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}
 function send(){
     msg=document.getElementById("msg").value;
     firebase.database().ref(roomname).push({
         name:username,
         message:msg,
         like:0
     });
     document.getElementById("msg").value="";
 }