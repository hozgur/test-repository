console.log("Async Test");
var a = 1;
var func1 = function(c) 
{
    while(a != 0)
    {
        process.nextTick(function() {
            console.log(c);
            for(b=0;b<1000000;b++)
            {}    
        });        
    }        
}
console.log("Async Test 1");
func1(1);
console.log("Async Test 2");
func1(10000);
console.log("Async Test 3");