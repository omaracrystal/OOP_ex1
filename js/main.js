// *** Intro to OOP *** //

// Base Class - constructor
var Vehicle = function(wheels, color){
  // properties
  this.wheels = wheels;
  this.color = color;
};

// Methods
Vehicle.prototype.honk = function() {
  return 'honk!';
};
Vehicle.prototype.toString = function() {
  return 'The vehicle has ' + this.wheels + ' wheels and is ' +
    this.color + '.';
};

// Instances
var redCar = new Vehicle(4, 'red');
console.log(redCar);
console.log(redCar.honk());
console.log(redCar.toString());


// *** Another Example *** //

var Cat = function(name, color, smell, whiskers){
  this.name = name;
  this.color = color;
  this.smell = smell;
  this.whiskers = whiskers;
};

Cat.prototype.sleep = function(){
  return this.name + ' is sleeping. ZZZZZ';
};

// Use the new keyword to create a new instance of our class
var blackCat = new Cat('Ajax', 'black', 'really really bad', true);
var tabbyCat = new Cat('Ringo', 'orange', 'good', false);

console.log(blackCat);
console.log(tabbyCat);
console.log(blackCat.sleep());
console.log(tabbyCat.sleep());

// *** Quick Challenge ** //

// Base Class - constructor
var Song = function(songName, bandName){
  // properties
  this.songName = songName;
  this.bandName = bandName;
};


Song.prototype.countName = function(){
  return this.songName.split(' ').length;
};

Song.prototype.create = function(){
  var element = $('<p></p>');
  element.text(this.songName + ' by ' + this.bandName);
  return element;
};

var newSong = new Song('Paranoid Android', 'Radiohead');
console.log(newSong);
console.log(newSong.countName());

$(document).ready(function(){
  $('body').append(newSong.create());
});
