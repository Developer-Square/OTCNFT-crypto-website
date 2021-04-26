
  const setConnectWallet = () => {
    let popUpFormTitle = document.querySelector('.pop-up-form-title')
    if (popUpFormTitle) {
      popUpFormTitle.innerHTML = 'Connect to a wallet'
    }

    let availableButtonNames = [
        'Install Metamask',
        'WalletConnect',
        'Coinbase Wallet',
        'Fortmatic',
        'Portis',
    ]

    let availableButtonImages = [
        './images/metamask.png',
        './images/walletConnectIcon.svg',
        './images/coinbaseWalletIcon.svg',
        './images/fortmatic.png',
        './images/portisIcon.png'
    ]

    let connectWalletContainer = document.querySelector('.connect-wallet-form')

    // Create all the buttons and add them to the connectWalletContainer.
    availableButtonNames.map((buttonText, index) => {
        let connectWalletButtons = document.createElement('div')
        let connectWalletText = document.createElement('p')
        let connectWalletIcon = document.createElement('img')
        connectWalletButtons.className = 'connect-wallet-buttons'

        connectWalletText.innerHTML = buttonText
        connectWalletIcon.src = availableButtonImages[index]
        connectWalletButtons.appendChild(connectWalletText)
        connectWalletButtons.appendChild(connectWalletIcon)
        connectWalletContainer.appendChild(connectWalletButtons)
    })

    let connectWalletFooter = document.createElement('div')
    let span = document.createElement('span')
    let span2 = document.createElement('span')
    span.innerHTML = 'New to Ethereum?'
    span2.innerHTML = 'Learn more about wallets'
    connectWalletFooter.appendChild(span)
    connectWalletFooter.appendChild(span2)
    connectWalletFooter.className = 'connect-wallet-footer'
    
    connectWalletContainer.appendChild(connectWalletFooter)
  }

$(document).ready(function() {
    $('.connect-wallet-form').hide()

    // For the connect wallet popup
    $(".connect-wallet-appbar, .connect-btn").click(function () {
        $(".pop-up-form23").toggle();
        $(".connect-wallet-form").toggle();
        $(".Search-form").hide();
        $(".token-listing").hide();
        $(".footer-manage").hide();
        let popUpForm = document.querySelector('.pop-up-form23')
        popUpForm.classList.toggle('connect-wallet-styling')
        
        let connectWalletBtns = document.querySelector('.connect-wallet-buttons')

        // Check whether the buttons have been rendered.
        if (!connectWalletBtns) {
            setConnectWallet()
        }
        });

    $(".close-icon").click(function () {
        $(".connect-wallet-form").hide();
        });
})