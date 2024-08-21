// Statement 1.

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () {
        console.log(this.step);
    }
};

ladder.up();  // 1
ladder.up(); // 2
ladder.up(); // 3

ladder.down(); // 2

ladder.showStep(); // 2

// --------------------------------------------------------------------------------------------
let ladder2 = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () {
        console.log(this.step);
    }
};


ladder2.up().up().up().down().showStep();