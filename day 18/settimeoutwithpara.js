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
 
setTimeout(display,2000,"Andhra","Tamilnadu","Karnataka","Kerala")