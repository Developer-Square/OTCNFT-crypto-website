let value;


// Read the json file with the token list and display it,
// onclick of the button
const loadTokens = () => {
    let tokenContainer = document.querySelector('#token-container')
    tokenData.map(token => {
        if(tokenContainer) {
            // First create the outer container.
            let selectOption = document.createElement('div')
            selectOption.className = 'select-otion'

            // Then create the inner elements.
            let img = document.createElement('img')
            img.src = token.imageUrl
            img.className = 'token-img'
            selectOption.appendChild(img)

            let span = document.createElement('span')
            span.className = 'token'

            let tokenTitle = document.createElement('div')
            tokenTitle.className = 'token-title'
            tokenTitle.title = token.content
            // Add the actual title to the div
            tokenTitle.innerHTML = token.title
            let tokenSubtitle = document.createElement('div')
            tokenSubtitle.className = 'token-subtitle'
            tokenSubtitle.innerHTML = token.content

            // Add the the subtitle and title to the span.
            span.appendChild(tokenTitle)
            span.appendChild(tokenSubtitle)

            // Then add the span to the selectOption.
            selectOption.appendChild(span)

            // And finally to the tokenContainer.
            tokenContainer.appendChild(selectOption)
        }
    })
}

// Set the chosen token to the page.
const setTokens = (evt) => {
    let img = document.querySelector('.from-swap-image')
    let title = document.querySelector('.from-swap-title')
    let selectedTitle = evt.currentTarget.innerText.slice(0,3)

    if (img && title) {
        img.src = `./images/${selectedTitle}.png`
        title.innerHTML = selectedTitle
    }
}


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