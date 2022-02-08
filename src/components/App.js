import Landing from "./landing/Landing";
import Main from "./main/Main";
import { useState } from 'react';

const MAIN_RENDER_DELAY = 1400;

const App = () => {
  const [switchStatus, setStatus] = useState(true);
  const [showLanding, setShowLanding] = useState(true);

  const handleSwitchClicked = () => {
    setStatus(false);
    setTimeout(() => {
      setShowLanding(false)
      localStorage.setItem('landingSwitch', true);
    }, MAIN_RENDER_DELAY);
  }

  return (
    <div className={`h-screen ${switchStatus ? 'bg-neutral-50' : 'bg-dark-blue'}`}>
    {
      showLanding ? (
        <Landing 
          switchStatus={switchStatus}
          onSwitchClicked={() => handleSwitchClicked()}
          toggle={switchStatus}
        />
      ) : (
        <Main />
      )
    }
    </div>
  );
}

export default App;