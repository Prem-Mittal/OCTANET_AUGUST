const array_name=[];

let var2=document.getElementById('submit');
var2.addEventListener('click',(e)=>{
    e.preventDefault();

    var3=document.getElementById("input1");
    array_name.push(var3.value);
    const var1=document.getElementById("output-box");
    var1.innerText="";
    for(let i in array_name)
    {
        var1.innerHTML+=i+'. '+array_name[i]+'<br>';
    }
    
});



