const form = document.getElementById("searchForm");
const input = document.getElementById("wordInput");
const resultDiv = document.getElementById("result");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const word = input.value;
  resultDiv.innerHTML = "Searching...";

  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Word not found");
      }
      return response.json();
    })
    .then(function (data) {
      const wordData = data[0];
      const meaning = wordData.meanings[0];
      const definitionData = meaning.definitions[0];

      let html = "";

      html += "<div class='word'>" + wordData.word + "</div>";

      if (wordData.phonetics.length > 0 && wordData.phonetics[0].text) {
        html += "<div>" + wordData.phonetics[0].text + "</div>";
      }

      
      html += "<div class='part'>" + meaning.partOfSpeech + "</div>";

      html += "<p><strong>Definition:</strong> " + definitionData.definition + "</p>";

      if (definitionData.example) {
        html += "<p><strong>Example:</strong> " + definitionData.example + "</p>";
      }

      if (definitionData.synonyms && definitionData.synonyms.length > 0) {
        html += "<p><strong>Synonyms:</strong> " + definitionData.synonyms.join(", ") + "</p>";
      }

      resultDiv.innerHTML = html;
    })
    .catch(function () {
      resultDiv.innerHTML = "<div class='error'>Word not found. Please try again.</div>";
    });
});

