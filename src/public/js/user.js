let isLoggedIn = JSON.parse( localStorage.getItem( "loggedIn" ) );
if ( isLoggedIn == null ) {
  isLoggedIn = "";
}

let signInBtn = document.getElementById( "si2" );
let signUpBtn = document.getElementById( "su1" );
let profileBtn = document.querySelector( ".profile-icon img" );
if ( isLoggedIn != "" ) {
  signInBtn.innerHTML = `<a>${ isLoggedIn }</a>`;
  signUpBtn.innerHTML = `<a>SIGN OUT</a>`;
  profileBtn.src =
    "https://www.clipartmax.com/png/middle/83-836357_greg-ezeilo-avatar-icon-png.png";
}

document.getElementById( "si2" ).addEventListener( "click", function () {
  if ( isLoggedIn != "" ) {
    alert( `${ isLoggedIn } has signed in !` );
  } else {
    document.querySelector( ".signin2" ).style.display = "flex";
    document.getElementById( "overlay" ).style.display = "block";
  }
} );

document.querySelector( ".close2" ).addEventListener( "click", function () {
  document.querySelector( ".signin2" ).style.display = "none";
  document.getElementById( "overlay" ).style.display = "none";
} );
document.getElementById( "su1" ).addEventListener( "click", function () {
  if ( isLoggedIn != "" ) {
    isLoggedIn = "";
    localStorage.setItem( "loggedIn", JSON.stringify( isLoggedIn ) );
    signInBtn.innerHTML = `<a>SIGN IN</a>`;
    signUpBtn.innerHTML = `<a>SIGN UP</a>`;
    profileBtn.src =
      "https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/iconuser.png";
  } else {
    document.querySelector( ".signup" ).style.display = "flex";
    document.getElementById( "overlay" ).style.display = "block";
  }
} );

document.querySelector( ".close1" ).addEventListener( "click", function () {
  document.querySelector( ".signup" ).style.display = "none";
  document.getElementById( "overlay" ).style.display = "none";
} );

document.getElementById( "gmail" ).addEventListener( "click", function () {
  document.querySelector( ".signin" ).style.display = "none";
  document.querySelector( ".signin2" ).style.display = "flex";
  document.getElementById( "overlay" ).style.display = "block";
} );
document.querySelector( ".close" ).addEventListener( "click", function () {
  document.querySelector( ".signin" ).style.display = "none";
  document.getElementById( "overlay" ).style.display = "none";
} );

document.getElementById( "go2sup" ).addEventListener( "click", function () {
  document.querySelector( ".signin" ).style.display = "none";
  document.querySelector( ".signup" ).style.display = "flex";
  document.getElementById( "overlay" ).style.display = "block";
} );

document.getElementById( "gosup" ).addEventListener( "click", function () {
  document.querySelector( ".signin2" ).style.display = "none";
  document.querySelector( ".signup" ).style.display = "flex";
  document.getElementById( "overlay" ).style.display = "block";
} );

document.getElementById( "go2si" ).addEventListener( "click", function () {
  document.querySelector( ".signup" ).style.display = "none";
  document.querySelector( ".signin2" ).style.display = "flex";
  document.getElementById( "overlay" ).style.display = "block";
} );

document.getElementById( "sinwo" ).addEventListener( "click", function () {
  document.querySelector( ".signin2" ).style.display = "none";
  document.querySelector( ".signin" ).style.display = "flex";
  document.getElementById( "overlay" ).style.display = "block";
} );

document.querySelector( ".close2" ).addEventListener( "click", function () {
  document.querySelector( ".signin2" ).style.display = "none";
  document.getElementById( "overlay" ).style.display = "nonw";
} );

document
  .getElementById( "continue" )
  .addEventListener( "click", async function () {
    let name = document.getElementById( "name" ).value;
    let email = document.getElementById( "email" ).value;
    let mobile = document.getElementById( "mobile" ).value;
    let password = document.getElementById( "password" ).value;

    // const person = [
    //   {
    //     name: "anc",
    //     email: "abc@gmail.com",
    //     mobile: 123456,
    //     password: "asdf123",
    //   },
    // ];

    if ( name == "" || mobile == "" || email == "" || password == "" ) {
      alert( "Please enter all the fields" );
    } else if ( mobile.length != 10 ) {
      alert( "Please enter valid mobile number" );
    } else if ( password.length < 6 || password.length > 15 ) {
      alert( "Password should be of minimum 6 and maximum 15 characters" );
    } else {
      function details( n, e, m, p ) {
        this.name = n;
        this.email = e;
        this.mobile = m;
        this.password = p;
      }
      let response = await fetch( "/users" );
      let user = await response.json();

      let flag = true;
      for ( let i = 0; i < user.length; i++ ) {
        if ( mobile == user[ i ].mobile ) {
          flag = false;
          alert( "Account exists with this mobile number" );
        } else if ( email == user[ i ].email ) {
          flag = false;
          alert( "Account exists with this email" );
        }
      }

      function goLog() {
        if ( flag ) {
          let user1 = new details( name, email, mobile, password );
          // person.push(user1);
          fetch( `/users`, {
            method: "POST",
            body: JSON.stringify( user1 ),
            headers: {
              "Content-Type": "application/json",
            },
          } )
            .then( function ( res ) {
              return res.json();
            } )
            .catch( function ( res ) {
              console.log( "err: ", res );
            } );

          localStorage.setItem( "loggedIn", JSON.stringify( name ) );
          // localStorage.setItem("person", JSON.stringify(person));

          alert( "Account created successfully" );

          window.location.href = "";
        }
      }
      setTimeout( goLog(), 1000 );
    }
  } );

document
  .getElementById( "sinbtn" )
  .addEventListener( "click", async function ( event ) {
    event.preventDefault();
    let em = document.getElementById( "email2" ).value;
    let pw = document.getElementById( "password2" ).value;

    // let user = JSON.parse(localStorage.getItem("person"));

    let response = await fetch( "/users" );
    let user = await response.json();

    let flag = false;
    for ( let i = 0; i < user.length; i++ ) {
      if (
        ( user[ i ].email == em && user[ i ].password == pw ) ||
        ( user[ i ].mobile == em && user[ i ].password == pw )
      ) {
        document.querySelector( ".signin2" ).style.display = "none";
        localStorage.setItem( "loggedIn", JSON.stringify( user[ i ].name ) );
        flag = true;
        break;
      }
    }
    function goLogIn() {
      if ( flag ) {
        alert( "Signied In" );
        window.location.href = "";
      } else {
        alert( "Your username or password is incorrect" );
      }
    }
    setTimeout( goLogIn(), 1000 );
  } );
