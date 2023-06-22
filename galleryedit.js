function editImg()
{
    var blurVal=document.getElementById("blur").value
    var briVal=document.getElementById("brightness").value
    var conVal=document.getElementById("Constrast").value
    var grayVal=document.getElementById("grayscale").value
    var hueVal=document.getElementById("Hue").value
    var invVal=document.getElementById("invert").value
    var opaVal=document.getElementById("opacity").value
    var satVal=document.getElementById("saturate").value
    var sepiaVal=document.getElementById("sepia").value
    document.getElementById("image").style.filter=`blur(${ blurVal}px)
    brightness(${ briVal}%) Constrast(${conVal}%) grayscale(${ grayVal}%) Hue(${hueVal}deg) 
    invert(${invVal}%) opacity(${ opaVal}%) saturate(${satVal}%) sepia(${sepiaVal}%)`
}




