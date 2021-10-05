let array = [5,6,7,8,10];

function search (item, array){
    let index = array.findIndex(element => element === item);
    if(index === null)
    {
        return -1;
    }else{
        return index;
    }
    
}
console.log(search(10, array));
