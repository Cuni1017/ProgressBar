// https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}
Person.prototype.greeting = function (e) {
  alert("Hi! I'm " + this.name.first + ".");
};

function Teacher(first, last, age, gender, interests, subject) {
  // Person.bind(this)(first, last, age, gender, interests)
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype); //讓Teacher能繼承Person裡的功能或物件: greeting
Teacher.prototype.constructor = Teacher; //在上行程式碼賦予Prototype後把constructor連回去，因為上行覆蓋掉了
Teacher.prototype.greeting = function () {
  //覆蓋老師的greeting
  var prefix;
  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr.";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Mrs.";
  } else {
    prefix = "Mx.";
  }

  alert(
    "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      "."
  );
};

function Student(first, last, age, gender, interests) {
  Person.call(this, first, last, age, gender, interests);
}
Student.prototype = Object.create(Person.prototype); //讓Student能繼承Person裡的功能或物件: greeting
Student.prototype.constructor = Student;
Student.prototype.greeting = function () {
  alert("Hello. My name is " + this.name.first);
};

var oP = document.querySelector(".p");
// oP.innerHTML = '456'
// console.log(oP)

p1 = new Person("PB", "TW", 18, "man", []);
// p1.greeting(oP);

t1 = new Person("WE", "TW", 30, "woman", [], "Javascript");
// t1.greeting();
console.log(t1);

s1 = new Student("STU", "TW", 15, "man", []);
s1.greeting();

