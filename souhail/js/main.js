var
text=document.getElementById("text");
si=document.getElementById("size");
fo=document.getElementById("font");
function bold () { 
    
if(text.style.fontWeight=="bold"){text.style.fontWeight="normal"}
else {text.style.fontWeight="bold"} }

function it () { 
    
    if(text.style.fontStyle=="italic"){text.style.fontStyle="normal"}
    else {text.style.fontStyle="italic"} ;}
    
function ul() {
    if (text.style.textDecoration=="underline"){text.style.textDecoration=""} else {text.style.textDecoration="underline"}
}
function sizee() {
    text.style.fontSize=si.value
}
function font() { text.style.fontFamily=fo.value}




    $('#que1').hover(function(){
    
    $('#dr1').css("opacity","0.3");
    $("#drr1").show();
    
    },function(){
    
        $('#dr1').css("opacity","1");
        $("#drr1").hide();
})
    









$('#que2').hover(function(){
    
    $('#dr2').css("opacity","0.3");
    $("#drr2").show();
    
    },function(){
    
        $('#dr2').css("opacity","1");
        $("#drr2").hide();
})





$('#que3').hover(function(){
    
    $('#dr3').css("opacity","0.3");
    $("#drr3").show();
    
    },function(){
    
        $('#dr3').css("opacity","1");
        $("#drr3").hide();
})
    
    
    

    









    $("#drr1").click(function(){

        $("#back").show();
        
        
        }
        
        );
        
        $("#icon").click(function(){
        
        $("#back").hide(); });
        
        
        
        
        
        
        
    

  
