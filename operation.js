var bag=document.getElementById('bag-icon')
var bagitems=document.getElementById("bag-items")
var body=document.getElementById("body")

bagitems.style.display='none';

bag.addEventListener('click',()=>{
    
    if( bagitems.style.display=="none")
    {
        bagitems.style.display='block';
        

    }
    else{
        bagitems.style.display='none';
    }

}
)

