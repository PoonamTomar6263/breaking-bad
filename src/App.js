import './App.css';
import Header from './Header';
import { fetchData } from './api';
import { useEffect, useState } from 'react';
import Character from './Character';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import CharacterPage from './CharacterPage';
function App() {
  const [text,setText]=useState("");
  const [data,setData]=useState([]);
  useEffect(() => {
    const getData=async()=>{
  const result=await fetchData(text);
  setData(result.data);
  console.log(result);
    }
    getData();
  }, [text]);

  const getText=(text)=>{
    setText(text);
    console.log(text);
  }
  return (
    <Router>
      <Switch>
        <Route path='/:id'>
          <CharacterPage/>
        </Route>
        <Route path='/'exact>
          <div className="App">
            <Header getText={getText} />
            <Character data={data} />
          </div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
