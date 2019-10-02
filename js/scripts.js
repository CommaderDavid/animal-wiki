$(document).ready(function() {
  $('#formOne').submit(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();
    console.log(animal);
    event.preventDefault();
  });
});
