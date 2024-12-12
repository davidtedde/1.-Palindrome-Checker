let textInput = document.getElementById("text-input");
let checkButton = document.getElementById("check-btn");
let resultText = document.getElementById("result");
let emojiNoImput = document.getElementById("no-input");
let emojiIsPalindromeImput = document.getElementById("is-palindrome-input");
let emojiIsNotPalindromeImput = document.getElementById(
  "is-not-palindrome-input"
);

function isPalindrome() {
  let inputValue = textInput.value;
  let cleanedStr = inputValue.toLowerCase().replace(/[^A-Za-z0-9]/g, ""); // Rimuove spazi e caratteri speciali
  let reversedStr = cleanedStr.split("").reverse().join(""); // Inverte la stringa
  if (inputValue == "") {
    alert("Please input a value");
  } else if (cleanedStr === reversedStr) {
    resultText.textContent = inputValue + " is a palindrome";
    resultText.className = "results-div-success";
    emojiIsPalindromeImput.className = "emoji";
    emojiNoImput.className = "hidden-emoji";
    emojiIsNotPalindromeImput.className = "hidden-emoji";
  } else {
    resultText.textContent = inputValue + " is not a palindrome";
    resultText.className = "results-div-insuccess";
    emojiIsNotPalindromeImput.className = "emoji";
    emojiNoImput.className = "hidden-emoji";
    emojiIsPalindromeImput.className = "hidden-emoji";
  }
}

checkButton.addEventListener("click", isPalindrome);
