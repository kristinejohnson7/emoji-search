import "./App.css";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import { emojiData } from "./variables";
import { useState } from "react";

function App() {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = emojiData.filter((value) => {
      return value.keywords.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchInput handleFilter={handleFilter} />
      {filteredData.length !== 0 && <EmojiResults options={filteredData} />}
    </div>
  );
}

export default App;
