// SELECTORS
let $userInput;
let $inputNumber;

let $addBtn = $('#btn-add');
let $minusBtn = $('#btn-minus');

let $countDisplay = $('#count>h1')
let $countText = $countDisplay.text();
let $count = parseInt($countText);

// FUNCTIONS

function adder(){
    $count = $count + $inputNumber;
};

function subtractor() {
    $count = $count - $inputNumber;
};

function getInputNum() {
    $userInput = $('#inputNum').val();
    $inputNumber = parseInt($userInput);
};

function checkNumNegative() {
    if($count < 0){
        $countDisplay.css('color', 'red');
    } else {
        $countDisplay.css('color', 'black');
    }
};

function updateCountDisplay() {
    $countDisplay.html($count);
    checkNumNegative();
};

function hoverColor() {
    $(":button").hover(function(e) {
        $(this).removeClass('btn-secondary');
        $(this).addClass('btn-light');
    }, function(){
        $(this).removeClass('btn-light');
        $(this).addClass('btn-secondary');
    });
};

function add() {
    $addBtn.click(function(e) {
        getInputNum();
        adder();
        updateCountDisplay();
    });
};

function subtract() {
    $minusBtn.click(function(e) {
        getInputNum();
        subtractor();
        updateCountDisplay();
    });
};

function initialize() {
    hoverColor();
    add();
    subtract();
};

// INITIALIZE
initialize();