
$('.carousel').carousel({
    interval: 3000
});

if(!message){
    $(".validation")[0].style.display = "block";
    $("input").addClass("is-invalid");
}
