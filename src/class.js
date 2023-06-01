class Animal {
  speak() {
    console.log(this);
    return this;

  }
  static eat() {
    console.log(this);

    return this;
  }

}

const obj = new Animal();
obj.speak(); // the Animal object
const speak = obj.speak;
speak(); // undefined

Animal.eat(); // class Animal
const eat = Animal.eat;
eat(); // undefined