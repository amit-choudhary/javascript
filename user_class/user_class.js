function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.compare = function (user) {
  if (this.age > user.age) {
    alert(this.name + ' is older than ' + user.name);
  } else if (user.age > this.age) {
    alert(user.name + ' is older than ' + this.name);
  } else {
    alert('Same age');
  }
}

user1 = new User('mary', 20)
user2 = new User('john', 22)
user1.compare(user2)
