const usersArray = [];

function login()
{
    
        var usernameLogin = document.getElementById("usernameLogin").value;
        var passwordLogin = document.getElementById("passwordLogin").value;
        var userflag = false;

        const storedArray = localStorage.getItem('usersArray');

        // Check if there is data
        if (storedArray) {
            // Parse the JSON string to get the array
            const myArray = JSON.parse(storedArray);
        
            console.log(myArray);
        for (var i = 0; i < myArray.length; i++) {
            if (usernameLogin == myArray[i].username && passwordLogin == myArray[i].password) {
                userflag = true;
                break;
            }
        }

    
        if (userflag) {
            window.location.href = "home.html";
            console.log("Existing users:", myArray);
        } else {
            
            document.getElementById("signUpData").innerHTML = "Invalid data. please sign up";
        }
    }
    else{
        document.getElementById("signUpData").innerHTML = "Invalid data. please sign up";
    }

}



function signUp()
{
    var fullName = document.getElementById("fullNameSignUp").value.trim();
    var username = document.getElementById("usernameSignUp").value.trim();
    var password = document.getElementById("passwordSignUp").value.trim();
    var userflag = true;
    for(var i = 0; i< usersArray.length; i++)
    {
       if(username === usersArray[i].username && password === usersArray[i].password)
       {
        userflag = false;
        break;
       } 
    }
    if(userflag){
        const newUser = new Person(fullName,username,password);
        usersArray.push(newUser);
    localStorage.setItem('usersArray', JSON.stringify(usersArray));
        document.getElementById("signUpData").innerHTML = "User created successfully.";
       }
       else{
        document.getElementById("signUpData").innerHTML = "User already Exists, try another username.";
       }
}

function Person(fullname, username, password)
{
    this.fullName = fullname;
    this.username = username;
    this.password = password;
}



var currentVideo = 2;
function changeVideo() {
        var videoElement = document.getElementById("barcaVideo");

        if (currentVideo == 1) {
            videoElement.src = 'messiGoal.mp4';
            currentVideo = 2;
        } else {
            videoElement.src = 'pedriGoal.mp4';
            currentVideo = 1;
        }

        videoElement.load();
}

function getName()
{
     const storedArray = localStorage.getItem('usersArray');

        // Check if there is data
    if (storedArray!= null) {
        document.getElementById('homeHeader').innerHTML = "Welcome "+localStorage.name+" to the official FC Mina Website!"
    }
    else{
    document.getElementById('homeHeader').innerHTML = "Welcome "+"Fan"+" to the official FC Mina Website!";
    }

    localStorage.clear();
  

}

function setName()
{
    
    var Username = document.getElementById("usernameLogin").value;
    if(Username!=null){
    localStorage.name = Username;
    }
}


function teamInfo(form) {

    var selectedValue = "";
    var radios = form.elements['radioForm'];

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break; // Stop looping once a checked radio button is found
        }
    }

    var displayInfo = document.getElementById('displayInfo');

    if (selectedValue == "owner") {
        displayInfo.innerHTML = "<p class ='infoClass'>This website is made by: Mina George Fawzy, 21 Years Old. <br> Studing at Faculty of Engineering, Ain Shams University<p>"
        + "<img src='owner.jpg' class='center' width='50px' height='800px' alt='barca'>";
        return true; // Allow the form to submit
    } else if(selectedValue == "team") {
        displayInfo.innerHTML = "<p class ='infoClass'>" +
        "FC Barcelona is one of three founding members of the Primera División that have never been relegated from the top division since "
        +"its inception in 1929, along with Athletic Bilbao and Real Madrid.[16][17] In 2009, Barcelona became the first Spanish club to "
       +" win the continental treble consisting of La Liga, Copa del Rey, and the UEFA Champions League, and also became the first Spanish football club to win six out of six competitions in a single year, by also winning the Spanish Super Cup, UEFA Super Cup, and FIFA Club World Cup.[18] In 2011, the club became European champions again, winning five trophies.[19] This Barcelona team, which won fourteen trophies in just four years under Pep Guardiola, is considered by some in the sport to be the greatest team of all time.[20][21][22] By winning their fifth Champions League trophy in 2015 under Luis Enrique, Barcelona became the first European football club in history to achieve the continental treble twice.[23]"
       +" <br> The team always have a goal and is to be able to win the Champions League"
       + " and that's what they will work hard for to achieve. </p>"
       + "<img src='barcaTeam.jpg' class = 'center' width='400px' height='500px' alt='barca'>";
        return false; // Prevent the form from submitting
    }
}

function complain() {
  window.alert('Complaint accepted:\n' + document.getElementById('complain').value);
}


function getKit() {
  var kit = document.getElementById("kits").value;

  document.getElementById("kitHead").innerText = kit;
  document.getElementById("kitHead").hidden = false;

  var imgSrc = ""; // Add logic to set the correct image source based on the selected kit
  switch (kit) {
      case "mainKit":
          imgSrc = "kits/mainkit.png";
          break;
      case "secondKit":
          imgSrc = "kits/secondKit.jpg";
          break;
      case "thirdKit":
          imgSrc = "kits/thirdkit.png";
          break;
  }
  document.getElementById("choosenKit").hidden = false;
  document.getElementById("choosenKit").src = imgSrc;
 
} 


function showMore()
{
    document.getElementById("showMore").style.listStyleType = "circle";
    document.getElementById("showMore").innerHTML = "LinkedIn account: <a href='https://www.linkedin.com/in/mina-george-0131b5231'>Mina George</a>";
    document.getElementById("showMore2").style.listStyleType = "circle";
    document.getElementById("showMore2").innerHTML = "Adress: Makram Ebied - Nasr City - Cairo - Egypt";
}

function changeColor()
{
    document.getElementById("colorChange").style.color="#FFFFFF";
}

function changeFont()
{
    document.getElementById("colorChange").style.fontSize="larger";
}

