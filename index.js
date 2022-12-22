class NumericalAlgorithm {
    constructor(start) {
        this.start = start;
    }
    current() {
        return this.start;
    }
}

class Fibonnaci extends NumericalAlgorithm {
    constructor(start = 1) { //defaults to 1
        super(start);
        this.previous = [0, start];
    }
    nextFib() {
        this.previous.push(
            (this.previous[this.previous.length - 1]) + (this.previous[this.previous.length - 2])
        );
        return this.previous[this.previous.length - 1];
    }
}

const fib = new Fibonnaci();

console.log(fib.current());
console.log(fib.nextFib());
console.log(fib.nextFib());
console.log(fib.nextFib());
console.log(fib.nextFib());
console.log(fib.nextFib());
console.log(fib.nextFib());
console.log(fib.nextFib());
