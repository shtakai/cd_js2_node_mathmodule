module.exports = function(){
  return{
    add: function(num1, num2){
      this.checkArgs(num1, num2);
      return num1 + num2;
    },
    multiply: function(num1, num2){
      this.checkArgs(num1, num2);
      return num1 * num2;
    },
    square: function(num){
      if(num == null) throw new Error;
      return num * num;
    },
    random: function(num1,num2){
      this.checkArgs(num1, num2);
      return (num1 + Math.random()*(num2 - num1));
    },
    checkArgs: function(num1, num2){
      //console.log(`num1: ${num1} / num2: ${num2}`);
      if(num1 == null || num2 == null){
        throw new Error;
      }
    },
    err: function(){
      throw new Error;
    }
  }
}();
