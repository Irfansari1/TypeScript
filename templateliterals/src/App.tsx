import './App.css';
import { CustomButton } from './html/Button';
import { Text } from './polymorphic/Text';
import { Toast } from './templateliterals/Toast';

function App() {
  return (
    <div className="App">
      <Toast position="center-bottom" />
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor ='some' size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
