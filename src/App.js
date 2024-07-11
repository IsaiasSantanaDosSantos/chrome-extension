import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") {
      console.error("Query is empty.");
      return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs || tabs.length === 0) {
        console.error("Nenhuma aba ativa encontrada.");
        return;
      }
      const currentQuery = query;
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: (query) => {
            document.body.innerHTML = document.body.innerHTML.replace(
              new RegExp(`(${query})`, "gi"),
              "<mark>$1</mark>"
            );
          },
          args: [currentQuery],
        },
        () => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
          }
        }
      );
    });
  };

  return (
    <div className="App">
      <h1>Quick Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default App;
