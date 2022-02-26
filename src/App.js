import './App.css';
import Facebook from './components/Facebook';
import FuncFacebook from './components/FuncFacebook';
require('dotenv').config()
function App() {
  return (
    <div className="App">

        <Facebook />
        {/* <FuncFacebook /> */}
    </div>
  );
}

export default App;
