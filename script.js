function InserirUmaMensagem(){

var userInput = document.getElementById("userInput").value;

console.log(userInput);
document.getElementById("Sua mensagem é: ").innerText = "Sua mensagem é: " + userInput;
}