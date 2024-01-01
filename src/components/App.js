import Landing from "./landing/Landing";
import Main from "./main/Main";
import { useState } from 'react';

const MAIN_RENDER_DELAY = 1400;

const App = () => {
  const [switchStatus, setStatus] = useState(true);
  const [showLanding, setShowLanding] = useState(true);

  const handleSwitchClicked = () => {
    document.body.classList.remove('bg-neutral-50');
    document.body.classList.add('bg-dark-blue');
    setStatus(false);
    setTimeout(() => {
      setShowLanding(false)
      localStorage.setItem('landingSwitch', true);
    }, MAIN_RENDER_DELAY);
  }

  return (
    <div className={`${window.innerHeight > 870 ? 'h-screen' : ''}`}>
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