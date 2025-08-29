function display()
{
  let states=["Andhra","Tamilnadu","Karnataka","Kerala"];  
 
    for(i in states)
    {
        if(states[i]=="Karnataka")
        {
            console.log(`${states[i]} is commercial capital of India`);
        }
           
    }
}
 
setTimeout(display,4000,)