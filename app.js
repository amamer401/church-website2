

$( document ).ready(function() {
    $("#joinbutton").on('click', function() {
        var new_member_name = $("#newmember").val();
        var li = '<li>' + new_member_name + '</li>';
        var ul = $("#memberlist")
        ul.append(li);
    });
});

var button = document.queryselector("button");
var paragraph = document.queryselector("P");

button.addEventListener("click", function(){
 paragraph.textcontent ="someone Clicked The button";
});