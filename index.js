// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
       return this.radius * 2;
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get circumference(){
        return Math.PI * this.diameter;
    }   
    set circumference(circumference){
        // this.radius = circumference / Math.PI;
        this.diameter = circumference / Math.PI;
        this.radius = this.diameter / 2
    }
  

    get area() {
        // return Math.PI * Math.sqrt(this.radius);
        return Math.PI * this.radius ** 2;
    }
    set area(area){
       let newA = area / Math.PI 
        this.radius = Math.sqrt(newA)
    }
    

}