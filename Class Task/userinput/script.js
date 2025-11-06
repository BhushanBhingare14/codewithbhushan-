const character = document.getElementById("char");

function btn() {
  let isVowel = 0;
  let isConsonant = 0;

  for (let i = 0; i < str.length; i++) {
    let st = str[i].toLowerCase();

    if (st === "a" || st === "e" || st === "i" || st === "o" || st === "u") {
      isVowel++;
    } else {
      isConsonant++;
    }
  }
  character.textContent = isVowel;
  character.textContent = isConsonant;

  analyzeWordForVowelConsonant(str);
}
