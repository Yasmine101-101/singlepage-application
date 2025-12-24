# singlepage-application.
📘 Wordly Dictionary

Wordly Dictionary is a simple web-based dictionary application that allows users to search for English words and view their definitions, examples, phonetics, parts of speech, and synonyms. The app uses the Free Dictionary API and is built with HTML, CSS, and JavaScript.

🚀 Features

Search for English words

Displays:

Word

Phonetic pronunciation

Part of speech

Definition

Example sentence (if available)

Synonyms (if available)

User-friendly interface

Error handling for invalid or unknown words

🛠️ Technologies Used

HTML – Structure of the webpage

CSS – Styling and layout

JavaScript – Fetching data and handling user interaction

Dictionary API – https://api.dictionaryapi.dev/

📁 Project Structure
wordly-dictionary/
│
├── index.html      # Main HTML file
├── style.css       # CSS styles
├── script.js       # JavaScript logic
└── README.md       # Project documentation

📄 How It Works

User enters a word in the input field.

On form submission:

JavaScript prevents page reload.

A request is sent to the Dictionary API.

If the word is found:

The word details are displayed on the page.

If the word is not found:

An error message is shown.

🧪 Example Usage

Open index.html in your browser.

Type a word like "example".

Click Search.

View the definition and related information instantly.

🎨 Styling Overview

Clean and centered layout

Soft background color for readability

Hover effect on buttons

Clear typography for word results and errors

⚠️ Error Handling

Displays a friendly error message if:

The word does not exist

The API request fails

🌐 API Used

Free Dictionary API
Endpoint example:

https://api.dictionaryapi.dev/api/v2/entries/en/word


No API key required.

📌 Accessibility

Uses aria-label for better screen reader support

Simple and readable UI