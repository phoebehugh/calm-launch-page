$(function() {
  $("#mailing-list-subscribe").on("click", function(button) {
    console.log("button clicked")
    button.preventDefault();
    var email = $("#mailing-list-input").val();
    var data = { id: '43b3698448', email: email };
    $.post("/signup", data, function(returnData) {
      console.log(returnData);
    });
  });
});

// $(document).ready(function() {

//     if ($('.subscribe').length > 0) {
//       $('form input[type="submit"]').click(function(event) {
//         var form = $(this).closest('form');
//         var input = form.find('input:first');
//         if (form.get(0).checkValidity()) {
//           event.preventDefault();
//           register(form, input);
//                           button.val('Thanks for signing up!');
//                         } else {
//                           button.val(errorMessage(data));
//                           setTimeout(function() {
//                             button.val('Subscribe');
//                             input.val('');
//                           }, 3000);
//                         }
//                       }
//       }
//     $.ajax(settings);

//     function errorMessage(data) {
//       if (data.msg.includes('already')) {
//         return 'Thanks, but you are already subscribed!';
//       } else if (data.msg.includes('Too')) {
//         return 'You have already subscribed - please check your e-mail';
//       } else {
//         return 'Something went wrong! Please try again';
//       }
//     }
// });