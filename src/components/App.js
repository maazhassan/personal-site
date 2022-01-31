import Landing from "./landing/Landing";
import { useState } from 'react';

const App = () => {
  const [switchStatus, setStatus] = useState(true);

  const handleSwitchClicked = () => {
    setStatus(!switchStatus);
  }

  return (
    <div className={`h-screen ${switchStatus ? 'bg-neutral-50' : 'bg-dark-blue'}`}>
      <Landing 
        switchStatus={switchStatus}
        onSwitchClicked={() => handleSwitchClicked()}
      />
    </div>
  );
}

export default App;