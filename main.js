// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'krose@perseverenow.org';
const password1 = 'Hotforhimself';
const user2 = 'jdoty@perseverenow.org';
const password2 = 'Console.logger';
const user3 = 'dhiggins.prsvr@gmail.com';
const password3 = "supToThis"


// **YOUR** code below. Pass those tests!
function isValidEmail(email){
  if (email.endsWith('.prsvr@gmail.com') && email.indexOf('.prsvr@gmail.com') > 0 || email.endsWith('perseverenow.org') && email.indexOf('@perseverenow.org') > 0){
    return true
  } else {
    return false
  }
}

function isValidPassword(password){  
  if ((password.length >= 8) && ((password.toLowerCase()) !== password) && ((password.toUpperCase()) !== password)){
    return true
  } else {
    return false
  }
}

function isRegisteredUser(user){
  if (user === user1 || user === user2 || user === user3){
    return true
  } else {
    return false
  }
}

function passwordMatches(user, password){
  if (user === user1 && password === password1){
    return true
  } else if (user === user2 && password === password2){
    return true
  } else if (user === user3 && password === password3){
    return true
  } else {
    return false
  } 
}


// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3
}
