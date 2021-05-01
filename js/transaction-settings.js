const addTransactionFormDakMode = () => {
    let transactionSettings = document.querySelector('.transaction-settings')
    let transactionTitles = document.querySelectorAll('.trans-title')
    let slippageTitles = document.querySelectorAll('.slippage-title')
    let deadlineButtons = document.querySelector('.deadline-buttons')
    let toggleTitles = document.querySelectorAll('.toggle-title')
    let tolerancePercent = document.querySelectorAll('.tolerance-percent')
    let slippageBtn = document.querySelector('.slippage-btn')
    let toleranceBtn = document.querySelector('.tolerance-percent-input')
    let slippageInput = document.querySelector('.slippage-input')
    let toolTipIcons = document.querySelectorAll('.tooltip-icon')
    let Icon = document.querySelectorAll('.fa-question-circle-o')
    let toggleExpertMode = document.querySelectorAll('#toggle-expert-mode-button')
    let toggleActiveButton = document.querySelector('.off-function')
    let toggleActiveButton2 = document.querySelector('.off-function1')



    if (!lightMode) {
        Array.from(transactionTitles).map((title, index) =>
        {
            title.classList.add('dark-mode-transaction-title')
            slippageTitles[index].classList.add('dark-mode-transaction-title')
            toggleTitles[index].classList.add('dark-mode-transaction-title')
            toolTipIcons[index].classList.add('dark-mode-transaction-form')
            Icon[index].classList.add('dark-mode-transaction-title')
            toggleExpertMode[index].classList.add('dark-mode-transaction-toggle-buttons')
        })
        Array.from(tolerancePercent).map(button => {
            button.classList.add('dark-mode-transaction-buttons')
        })
        transactionSettings.classList.add('dark-mode-transaction-form')
        deadlineButtons.classList.add('dark-mode-transaction-title')
        slippageBtn.classList.add('dark-mode-transaction-buttons')
        slippageInput.classList.add('dark-mode-transaction-input')
        toleranceBtn.classList.add('dark-mode-transaction-buttons')
        toggleActiveButton.classList.add('dark-mode-transaction-active-button')
        toggleActiveButton2.classList.add('dark-mode-transaction-active-button')

    } else {
        Array.from(transactionTitles).map((title, index) =>
        {
            title.classList.remove('dark-mode-transaction-title')
            slippageTitles[index].classList.remove('dark-mode-transaction-title')
            toggleTitles[index].classList.remove('dark-mode-transaction-title')
            toolTipIcons[index].classList.remove('dark-mode-transaction-form')
            Icon[index].classList.remove('dark-mode-transaction-title')
            toggleExpertMode[index].classList.remove('dark-mode-transaction-toggle-buttons')
        })
        Array.from(tolerancePercent).map(button => {
            button.classList.remove('dark-mode-transaction-buttons')
        })
        transactionSettings.classList.remove('dark-mode-transaction-form')
        deadlineButtons.classList.remove('dark-mode-transaction-title')
        slippageBtn.classList.remove('dark-mode-transaction-buttons')
        slippageInput.classList.remove('dark-mode-transaction-input')
        toleranceBtn.classList.remove('dark-mode-transaction-buttons')
        toggleActiveButton.classList.remove('dark-mode-transaction-active-button')
        toggleActiveButton2.classList.remove('dark-mode-transaction-active-button')
    }
    
}

const addExpertFormDarkMode = () => {
    let popUpForm34 = document.querySelector('.pop-up-form34')
    let title = document.querySelector('.are-you-title')
    // let closeIcon = document.querySelector('#fa-times')
    let expertContent = document.querySelector('.expert-content')
    let onlyContent = document.querySelector('.only-content')
    let titleBorderBottom = document.querySelector('.are-you-sure')

    if (!lightMode) {
        popUpForm34.classList.add('dark-mode-expert-mode-form')
        title.classList.add('dark-mode-expert-mode-content')
        // closeIcon.classList.add('dark-mode-expert-mode-content')
        expertContent.classList.add('dark-mode-expert-mode-content')
        onlyContent.classList.add('dark-mode-expert-mode-content')
        titleBorderBottom.classList.add('dark-mode-expert-border')
    } else {
        popUpForm34.classList.remove('dark-mode-expert-mode-form')
        title.classList.remove('dark-mode-expert-mode-content')
        // closeIcon.classList.remove('dark-mode-expert-mode-content')
        expertContent.classList.remove('dark-mode-expert-mode-content')
        onlyContent.classList.remove('dark-mode-expert-mode-content')
        titleBorderBottom.classList.remove('dark-mode-expert-border')
    }
}

$(document).ready(function() {

    $(".setting-icon").click(function (evt) {
        evt.stopPropagation()
        // Popup form is visible.
        popUpFormVisible = true;
        hideForms('.pop-up-form33')
        $(".pop-up-form33").toggle();
        addTransactionFormDakMode();
    });

    $(".on-function").click(function (evt) {
        evt.stopPropagation()
        // Popup form is visible.
        popUpFormVisible = true;
        hideForms('.pop-up-form34')
        $(".pop-up-form34").show();
        $(".pop-up-form33").hide();
        addExpertFormDarkMode();
    });

    $(".off-function").click(function (evt) {
        evt.stopPropagation()
        // Popup form is visible.
        popUpFormVisible = true;
        hideForms('.pop-up-form34')
        $(".pop-up-form34").show();
        $(".pop-up-form33").hide();
    });

    $(".close-icon").click(function () {
        popUpFormVisible = false;
        $(".pop-up-form34").hide();
    });
})