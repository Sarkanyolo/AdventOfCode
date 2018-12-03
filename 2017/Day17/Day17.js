class CircularList{
    constructor(init) {
        this.clist = [0];
        this.index = 0;
        this.counter = 0;
        this.step = init;
    }

    insert(item) {
        this.clist.splice(++this.index, 0, item);
    }

    forward() {
        for(let i = 0; i < this.step; i++){
            this.index++;

            if(this.index === this.clist.length){
                this.index = 0;
            }
        }
    }

    do(){
        this.forward();
        this.insert(++this.counter);
    }

    show(){
        return this.clist[this.index+1]
    }
}

let x = new CircularList(304);

for(let i = 0; i < 2017; i++){
    x.do();
}

console.log(x.show());
