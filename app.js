

$( document ).ready(function() {
    $("#joinbutton").on('click', function() {
        var new_member_name = $("#newmember").val();
        var li = '<li>' + new_member_name + '</li>';
        var ul = $("#memberlist")
        ul.append(li);
    });
});

