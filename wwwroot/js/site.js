
window.onscroll = function () { shrinkNavBar() };

function shrinkNavBar() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar-full").style.height = "60px";
        document.getElementById("port-font").style.fontSize = "14px";
        document.getElementById("about-font").style.fontSize = "14px";
        document.getElementById("contact-font").style.fontSize = "14px";
    } else {
        document.getElementById("navbar-full").style.height = "85px";
        document.getElementById("port-font").style.fontSize = "20px";
        document.getElementById("about-font").style.fontSize = "20px";
        document.getElementById("contact-font").style.fontSize = "20px";
    }
} 

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        } 
    });
});

// open video in modal 

function openVideo(element) {

    var parent = element.parentNode;

    if (parent.id === "flutter-app") {
        document.getElementById("iframe").src = "https://drive.google.com/file/d/1jknztKTtPcyn0dsMnR9SgyZFH5GI2TiX/preview";
    }
    else if (parent.id === "pygame") {
        document.getElementById("iframe").src = "https://drive.google.com/file/d/1LjJeqkDSlOqxGIudt92VogwTXwFPovO2/preview";
    }

    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];
 
    modal.style.display = "block";
    
    span.onclick = function () {
        modal.style.display = "none";
    }

    // close modal when clicked elsewhere
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("iframe").src = "";
        }
    }

   

}






