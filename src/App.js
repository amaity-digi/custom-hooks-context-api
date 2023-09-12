import { useState } from 'react';
import { ChannelContext, MyContext, NameContext } from './context/RootContext';
import MyComponent from './context/MyComponent';

import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("Ajeet K Jha");

  return (
    <div className="App">
      <MyContext.Provider value={{ text, setText }}>
        <NameContext.Provider value={name}>
          <ChannelContext.Provider value={"Learning never End!"}>
          <MyComponent />
          <FirstComponent />
          </ChannelContext.Provider>
        </NameContext.Provider>
      </MyContext.Provider>

    </div>
  );
}

export default App;
