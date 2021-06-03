var date=$('#date').val();
$(document).ready(function(){  
    $("#form").validate({
        //specify rules for validation
        rules: {
      // validate email 
      email: {
        required: true,
        //email is required and specified format
        email: true
      },
      //Validate date
      date: {
          //date is required with a minimum length and a date format
        required: true,
        minlength: 4,
        date: true
      },
      //Validate time
      time:{
          //time is requried max length is 4 and min length is 2
          required: true,
          maxlength:4,
          minlength:2
      },
      //Validate ohip
      ohip:{
          //Ohip is required with a specific amount of characters
          required: true,
          maxlength:10,
          minlength:10
      },
      //Validate phone number
      pNumber:{
          //Phone number is required with a specific amount of characters
          required:true,
          minlength:10,
          maxlength:10
      }
    },
    // Specify validation error messages
    messages: {
     
      date: {
        required: "Please enter date",
        date: "Please enter valid date"
      },
      time: {
          required:"Please enter time",
          maxlength: "Please enter a valid time",
          minlength:"Please enter a valid time"
      },
      ohip:{
          required: "Please enter OHIP number",
          maxlength:"Please enter valid OHIP number",
          minlength:"Please enter valid OHIP number"
      },
      pNumber:{
          required:"Please enter phone number",
          minlength:"Please enter valid phone number",
          maxlength:"Please enter valid phone number"
      },
      email: "Please enter a valid email address"
    }    
});
});
//Specify function to save form inputs to local storage
function SubmitForm(){
    var date=$('#date').val();
    var time=$('#time').val();
    var ohip=$('#ohip').val();
    var pNumber=$('#pNumber').val();
    var email=$('#email').val();
    localStorage.setItem("date",date);
    localStorage.setItem("time",time);
    localStorage.setItem("ohip",ohip);
    localStorage.setItem("pNumber",pNumber);
    localStorage.setItem('email',email);
}