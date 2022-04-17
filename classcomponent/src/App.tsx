import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
/* import { Counter } from './components/class/Counter'; */

function App() {
  return ( 
  <div className="App">
    <Private isLoggedIn={true} component={Profile}/>
    {/* <Counter message='The count value is'/> */}
  </div>
  )
}

export default App