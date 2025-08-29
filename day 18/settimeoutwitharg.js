function display(...args)
{
 
    for(i in args)
    {
        if(args[i]=="Karnataka")
        {
            console.log(`${args[i]} is commercial capital of India`);
        }
           
    }
}
 
setTimeout(display,4000,"Andhra","Tamilnadu","Karnataka","Kerala")