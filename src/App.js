import {useState,useEffect} from "react";
import CardList from "./components/card-list/cardList.component";
import SearchBox from "./components/searchbox/searchBox.component";
import "./App.css";

function App(){
    const [searchField,setSearchField] = useState('');
    const [monsters,setMonsters] = useState([]);
    function onSearchChange(event){
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }
    useEffect(fetchUserData,[])
    function fetchUserData() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then(setter);
        function setter(data) {
            setMonsters(data)
        }
    }
    const filteredMonsters = monsters.filter(namesIncludingSearchString);
    function namesIncludingSearchString(monster){
        return monster.name.toLocaleLowerCase().includes(searchField);
    }
  return (
      <div className="App">
        <h1 className={'app-title'}>Monsters Rolodex</h1>
        <SearchBox
            className="search-box"
            placeholder="search monsters"
            onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
  );

}
export default App;
