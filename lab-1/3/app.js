
function sum(n){
    if(typeof n === 'undefined') return 'n is undefined';
    if(typeof n === 'string') return 'not a number';
    if(typeof n === 'boolean') return 'not a number';
    var sum = 0;
    for(var i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}