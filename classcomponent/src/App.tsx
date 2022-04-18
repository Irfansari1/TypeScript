import './App.css';
/* import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile'; */
/* import { Counter } from './components/class/Counter'; */
import { List } from './components/generics/list';

function App() {
  return (
    <div className="App">
      {/* <Private isLoggedIn={true} component={Profile}/> */}
      {/* <Counter message='The count value is'/> */}
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
     {/*  <List
        items={[
          { first: "Bruce", last: "Wayne" },
          { first: "Clark", last: "Kent" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
    </div>
  );
}

export default App