var upperCase, lowerCase

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return string.toUpperCase()
}

function logWhisper(string) {
  return string.toLowerCase()
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return '';
  }
  if (string.toUpperCase() === string){
    return '';
  }
}

