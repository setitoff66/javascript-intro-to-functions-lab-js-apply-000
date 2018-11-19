var uppercase, lowercase

function shout(string) {
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase;
}

function whisper(string) {
  lowercase = string.toLowerCase();
  string = lowercase;
  return lowercase;
}

function logShout(string) {
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase;
}

function logWhisper(string) {
  lowercase = string.toLowerCase();
  string = uppercase;
  console.log lowercase;
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return '';
  }
  if (string.toUpperCase() === string){
    return '';
  }
}

