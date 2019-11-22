//Function to hide the wecomeBanner.
function myFunction() {
  var x = document.getElementById('welcomeBanner');
  x.style.display = "none";
}
//Function to add/remove active class based on url.
window.onload = function() {
    var assetActive = document.querySelector('#assets');
    var transActive = document.querySelector('#transactions');
    var proActive = document.querySelector('#profile');
    assetActive.addEventListener('click', function(){
      setActive(assetActive);
    });
    transActive.addEventListener('click', function(){
      setActive(transActive);
    });
    proActive.addEventListener('click', function(){
      setActive(proActive);
    });
    //transActive.addEventListener('click', setActive(2));
    // proActive.addEventListener('click', setActive(3));

    function setActive(activeLink) {
          proActive.classList.remove('activeLink');
          assetActive.classList.remove('activeLink');
          transActive.classList.remove('activeLink');
          activeLink.classList.add('activeLink');
        }
      }


    /*

    var navLinks = document.querySelectorAll('li a');
     url = window.location.href;

    if (url.includes("#profile")) {
      navLinks[0].classList.add('activeLink');
    } else if(url.includes("#transactions")) {
      navLinks[1].classList.add('activeLink');
    } else {
      navLinks[2].classList.add('activeLink');
    }
    */
