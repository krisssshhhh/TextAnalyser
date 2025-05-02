import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleUpperCase = () => setText(text.toUpperCase());
  const handleLowerCase = () => setText(text.toLowerCase());
  const handleClear = () => setText("");
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };
  const handleRemoveSpaces = () => setText(text.replace(/\s+/g, ' ').trim());

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readingTime = (wordCount / 200).toFixed(2); // assuming 200 WPM

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <h1>Text Analyser</h1>
      <p><i>By: Krish Kumar</i></p>

      <div className="dark-mode-toggle">
  <label className="switch">
    <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
    <span className="slider round"></span>
  </label>
  <span className="mode-label">{darkMode ? "Dark Mode" : "Light Mode"}</span>
</div>
      <textarea
        rows="8"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here"
      ></textarea>

      <div className="buttons">
        <button onClick={handleUpperCase}>UPPERCASE</button>
        <button onClick={handleLowerCase}>lowercase</button>
        <button onClick={handleCopy}>Copy</button>
        <button onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <div className="summary">
        <h2>Text Summary</h2>
        <p>Words: {wordCount}</p>
        <p>Characters: {charCount}</p>
        <p>Estimated Reading Time: {readingTime} minutes</p>
      </div>
    </div>
  );
}

export default App;