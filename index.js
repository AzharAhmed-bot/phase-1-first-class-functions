function receivesAFunction(received){
    received();
    
}
function returnsANamedFunction(){
    return function taken(){
        console.log("Hi am Azhar")
    }
}
function returnsAnAnonymousFunction(){
     return (function () {
        console.log("Hello am Azhar");
      });
      
}