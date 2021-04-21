
// Toggle the tabs on th page through the toggle buttons
function toggleTabs(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabToggleButtons = document.getElementsByClassName("tab-toggle-buttons");
    for (i = 0; i < tabToggleButtons.length; i++) {
      tabToggleButtons[i].className = tabToggleButtons[i].className.replace(" active-tab", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active-tab";
  }
  
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$(function () {
    var pull = $('#pull');
    menu = $('nav ul');
    menuHeight = menu.height();

    $(pull).on('click', function (e) {
      e.preventDefault();
      menu.slideToggle();
    });


    $(window).resize(function () {
      var w = $(window).width();
      if (w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });