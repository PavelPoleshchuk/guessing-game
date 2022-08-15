class GuessingGame {
  constructor() {
  };
  setRange(min, max) {
    this.min=min;
    this.max=max;
    
  };
  
  guess() {
    //if (this.medium===number){return number};
  this.medium=Math.ceil((this.min+this.max)/2);
    return this.medium;
  }
  lower() {
    this.max=this.medium;
  }
  greater() {
    this.min=this.medium;
  };
}


module.exports = GuessingGame;
