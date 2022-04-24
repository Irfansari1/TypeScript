import './App.css';
import { CustomButton } from './html/Button';
import { Toast } from './templateliterals/Toast';

function App() {
  return (
    <div className="App">
      <Toast position ='center-bottom'/>
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;
