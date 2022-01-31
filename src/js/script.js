var pro = 0;
document.getElementById("lblCartCount").innerHTML = pro;
localStorage.setItem('cookie', 0);

/*Password*/
let btn = document.querySelector('.bi-eye');
btn.addEventListener('click', function() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});
/*Footer Year*/
const d = new Date();
let year = d.getFullYear();
document.getElementById("date").innerHTML = year;

/*toggle*/
$(function(){
    $(".btn-toggle").click(function(e){
        e.preventDefault();
        el = $(this).data('element');
        $(el).toggle();
    });
});
/*cookies*/
$(window).on('load',function(){
    $('#myModal').modal('show'); });

$("#accept").on("click", function (e) {
    localStorage.setItem('cookie', 1);
    $('#myModal').modal('hide');
});

$(".btn-close").on("click", function (e) {
     $('#myModal').modal('hide');
});

/*login*/
$("#login").on("click", function (e) {
    $("#loginModal").hide();
    $(".fade").hide();
});

/*Add cart*/
if($("#plus").on("click")){
$("#plus").on("click", function (e) {
    pro = pro + 1;
    document.getElementById("lblCartCount").innerHTML = pro;
    console.log(pro);
    document.getElementById("nproduct").innerHTML = pro;
  
    });
}
if($("#minus").on("click")){
    $("#minus").on("click", function (e) {
        if(pro > 0){
        pro = pro - 1;}
        document.getElementById("lblCartCount").innerHTML = pro;
        console.log(pro);
        document.getElementById("nproduct").innerHTML = pro;
       });
}

/*Button load more*/
$("#teste").on("click", function (e) {
    $("#loadmore").hide();
    console.log("button load more")
    
});
    
  