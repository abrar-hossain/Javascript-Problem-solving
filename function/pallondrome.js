function check_Palindrome(string) { 

    var str = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var len = 0;

    if(str==="") 
    {
        console.log("Nothing found!");
        return false;
    }  

    if ((str.length) % 2 === 0)
    {
        len = (str.length) / 2;
    } 
    else
     {

        if (str.length === 1) 
        {
            console.log("Entry is a palindrome.");
            return true;
        } 
        else 
        {

            len = (str.length - 1) / 2;
        }
     } 
    for (var i = 0; i < len / 2; i++)
    {  
  
        if (str[i] !== str.slice(-1-i)[0])
        {  
            console.log( 'It is not a palindrome');  
            return false;
        }  
    }  
    console.log( 'It is a palindrome');  
    return true;
}  
      
check_Palindrome(" "); 
   











