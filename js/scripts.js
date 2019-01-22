$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var fields = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    fields.forEach(function(field){
      var userInput = $("input#" + field).val();
      $("." + field).text(userInput);
    })

    $("#story").show();

    event.preventDefault();
  });
});
