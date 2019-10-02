$(document).ready(function() {
  $('#formOne').submit(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "turtle"){
      $('#turtle').show();
      $('#shark').hide();
      $('#cuttlefish').hide();
    } else if (animal === "shark") {
      $('#turtle').hide();
      $('#shark').show();
      $('#cuttlefish').hide();
    } else if (animal === "cuttlefish") {
      $('#turtle').hide();
      $('#shark').hide();
      $('#cuttlefish').show();
    }

    event.preventDefault();
  });
});
