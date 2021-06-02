var date=$('#date').val();
$(document).ready(function(){  
    $("#form").validate({
        rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      date: {
        required: true,
        minlength: 4,
        date: true
      },
      time:{
          required: true,
          maxlength:4,
          minlength:2
      },
      ohip:{
          required: true,
          maxlength:10,
          minlength:10
      },
      pNumber:{
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
 
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    
});
});
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