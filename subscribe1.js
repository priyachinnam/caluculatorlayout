var count=0;
function subscribeButton()
{
    var valueFormButton=document.getElementById("button").value
    if(valueFormButton=="subscribe")
    {
        document.getElementById("Message").innerHTML="subscribed"
        document.getElementById("button").setAttribute("value","subscribed")
        document.getElementById("buttonIcon").style.display="inline"
        document.getElementById("dropDownIcon").style.display="inline"

    }
    ++count;
    if(count>1)
    {
        document.getElementById("Container").style.display="block"
    }
}
    function disCount()
    {
        document.getElementById("Container").style.display="none"
    }
    function replaceIcon(iconVal)
    {
        if(iconVal=="All")
        {
            document.getElementById("buttonIcon").src="./bell1.jpg"
        }
         else if(iconVal=="per")
        {
            document.getElementById("buttonIcon").src="./bell.jpg"
        }
        else if(iconVal=="none")
        {
            document.getElementById("buttonIcon").src="./mutedbell.png"
        }
        else{
document.getElementById("Unsubscribe").style.display="flex"
        }
    }
function UnsubscribeNone()
{
    document.getElementById("Unsubscribe").style.display="none"
}
function Unsubscribe()
{
    document.getElementById("buttonIcon").style.display="none"
    document.getElementById("dropDownIcon").style.display="none"
    document.getElementById("Message").innerHTML="subscribe"
    document.getElementById("button").setAttribute("value","subscribe")
    document.getElementById("unsubscribe").style.display="none"


}