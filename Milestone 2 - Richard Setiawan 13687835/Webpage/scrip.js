window.onscroll = function() {scrollDetector();progressBar()};
window.onload = function(){colapse();movegallery();data_throw();show_pw();};


function scrollDetector() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("upBtn").style.display = "block";
    } else {
        document.getElementById("upBtn").style.display = "none";
    }
}
function Upfunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function progressBar() {
    var Scroll = document.body.scrollTop || document.documentElement.scrollTop;
    var progressheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolledamount = (Scroll / progressheight) * 100;
    document.getElementById("ProgBar").style.width = scrolledamount + "%";
}
function colapse(){
    var collapse = document.getElementsByClassName("dropdownmenu");
    var counter;

    for (counter = 0; counter < collapse.length; counter++) {
        collapse[counter].addEventListener("click", function() {
            this.classList.toggle("active");
            var contentdropdown = this.nextElementSibling;
            if (contentdropdown.style.maxHeight){
                contentdropdown.style.maxHeight = null;
            } else {
                contentdropdown.style.maxHeight = 500 + "px";
            }
        });
    }

}
function minipop() {
    var popp = document.getElementById("minipull");
    popp.className = "show";
    setTimeout(function(){ popp.className = popp.className.replace("show", ""); }, 1800);
}
function data_throw() {
    $(document).ready(function() {
        $('a[href="../General%20Information/Member/form.html"]').click(function (e) {
            e.preventDefault();
            var data =  $(this).data('select');
            window.location = $(this).attr('href') + '?selectParam=' + escape(data);
        });
    });

}

function movegallery() {
    jQuery(document).ready(function ($) {

        $('#photogallery').carousel({
            interval: 3500
        });
        $('#photo-text').html($('#photo-0').html());
        $('[id^=photo-num-]').click(function () {
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#photogallery').carousel(id);
        });
        $('#photogallery').on('slid.bs.carousel', function (e) {
            var id = $('.item.active').data('slide-number');
            $('#photo-text').html($('#photo-' + id).html());
        });
    });
}
function show_pw() {
    jQuery(document).ready(function(){
        $("#showpassword").on('click', function(){
            var pass = $("#password");
            var fieldtype = pass.attr('type');
            var conf_pass = $("#confirm");
            var fieldtype2 = conf_pass.attr('type');
            if (fieldtype&&fieldtype2 == 'password') {
                pass.attr('type', 'text');
                conf_pass.attr('type', 'text');
                $(this).text("Hide Password");
            }
            else{
                pass.attr('type', 'password');
                conf_pass.attr('type', 'password');
                $(this).text("Show Password");
            }
        });
    });

}

function form_check() {
    var phone = document.getElementById("phone_number");
    var pw = document.getElementById("password");
    var conf = document.getElementById("confirm");

    if(isNaN(phone.value)) {
        document.getElementById("invalid_phone").style.display = "block";
        document.getElementById("phone_number").style.border = "2px solid red";
        document.getElementById("phone_number").focus();
        Upfunc();
        return false;
    }else{
        document.getElementById("invalid_phone").style.display = "none";
        document.getElementById("phone_number").style.border = "none";

    }

    if(pw.value != conf.value){
        document.getElementById("invalid_conf").style.display = "block";
        document.getElementById("confirm").style.border = "2px solid red";
        document.getElementById("confirm").focus();
        Upfunc();
        return false;
}
else {
        document.getElementById("invalid_conf").style.display = "none";
        document.getElementById("confirm").style.border = "none";
    }
return(true);
}

