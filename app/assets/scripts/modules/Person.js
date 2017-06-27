/**
 * Created by JBI on 6/22/2017.
 */
class Person{
    constructor(fullName, favColor){
        this.name = fullName;
        this.favoriteColor = favColor;
    }


    greet() {
        console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor);
    }
}

//nodejs way
//module.exports = Person;

//javascipt native way
export default Person;