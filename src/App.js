import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utilities/appStore';

function App() {
  return (
    <div>
      <Provider store={appStore}><Body/></Provider>
    </div>
  );
}

export default App;
