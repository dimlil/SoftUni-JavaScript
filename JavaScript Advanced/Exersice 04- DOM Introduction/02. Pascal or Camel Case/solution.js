function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  text = text.toLowerCase();
  let resultText = '';
  if (namingConvention == 'Pascal Case') {
    resultText = text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text[i-1] == ' ') {
        continue;
      }
      if (text[i] == ' ') {
        resultText += text[i + 1].toUpperCase();
      }
      else {
        resultText += text[i];
      }
    }
  }
  if (namingConvention == 'Camel Case') {
    resultText = text[0].toLowerCase();
    for (let i = 1; i < text.length; i++) {
      if (text[i-1] == ' ') {
        continue;
      }
      if (text[i] == ' ') {
        resultText += text[i + 1].toUpperCase();
      }
      else {
        resultText += text[i];
      }
    }
  }
  else {
    return result.textContent = 'Error!';
  }
  result.textContent = resultText;
}