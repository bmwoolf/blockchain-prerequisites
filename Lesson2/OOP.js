// OOP is basically just starting with a blank human body, then the children are instances of the blank human body + specific traits (eye color, height, skin color, hair color, etc.)

class BlankHumanClass {
    constructor(foot_size, eye_color, hair_color) { // 'constructor' creates the initial instance of the parent class. It basically created the BlankHumanClass on load.
        this.foot_size = foot_size; // 'this' references the specific context of the object that you are in
        this.eye_color = eye_color;
        this.hair_color = hair_color;
    }

    get_features() {
        return [this.foot_size, this.eye_color, this.hair_color];
    }
}


// create a new human
let new_human = new BlankHumanClass(12, 'blue', 'black');
console.log(new_human);

