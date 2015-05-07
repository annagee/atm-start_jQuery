
$(document).ready(function(){
  


    var total = 0 
    var total2 = 0
    

// inputting deposit
    $('#deposit1').click(function(){
      var number1 = $('#amount1').val();
      total = total + parseInt(number1);
      $('#balance1').html(total);
      // console.log(total1)
    })

      $('#withdraw1').click(function(){
      var number1 = $('#amount1').val();

      // //should be inside first if 
      // if(number1 => total) {
     total= total - parseInt(number1);
     $('#balance1').html(total);
   })

   // else if (withdraw1 > (total + total2)) {
   //  total =
   // }

   //  else if( total === 0 ){
   //    total 2 = total2 - deposit1
   //  }


      // console.log(total1)

      //if else part here

    // })


    //   if (withdraw1< (total + total2)) {
    //     total = withdraw1 - balance1
    //     if( total < 0) {
    //       total = total2 - deposit1
    //     }



    $('#deposit2').click(function(){
      var number2 = $('#amount2').val();
      total2 = total2 + parseInt(number2)
      $('#balance2').html(total2)
      console.log(total2)
    })

      $('#withdraw2').click(function(){
      var number2 = $('#amount2').val();
      total2 = total2 - parseInt(number2) 
      $('#balance2').html(total2)
      console.log(total2)
    })
   



     })



    

