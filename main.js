/*
    Exercise 27 
*/
$(document).ready(function(){
 

$('#btnvalidate').click(function(){

  /*=======================
        Regular Expressions 
     =======================*/

    var value = $("#email").val();
    var pattern = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i)
    if (!pattern.test(value)) {
        $("#email").addClass("is-invalid")
    }

});

    /*=======================
       RegExp functionality 
     =======================*/
    
     var str = $("#numeric").val();
     var pattern = (/[a-z]/gi);
     var newStr = str.replace(pattern, " ");

     console.log(newStr);

     $("#numeric").val(newStr)



     /*=======================
       Array Methods 
     =======================*/


    const x = [1,2,3,4]

    const newX = x.map(function(element, index, array){
        return element*element;
    });
    console.log(newX);


});

