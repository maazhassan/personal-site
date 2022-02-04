import Landing from "./landing/Landing";
import Main from "./main/Main";
import { useState } from 'react';

const App = () => {
  const [switchStatus, setStatus] = useState(false);

  const handleSwitchClicked = () => {
    setStatus(false);
  }

  return (
    <div className={`h-screen ${switchStatus ? 'bg-neutral-50' : 'bg-dark-blue'}`}>
      {/* <Landing 
        switchStatus={switchStatus}
        onSwitchClicked={() => handleSwitchClicked()}
      /> */}
      <Main />
    </div>
  );
}

export default App;