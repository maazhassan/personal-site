import Landing from './landing/Landing';
import Main from './main/Main';
import { useState } from 'react';

const MAIN_RENDER_DELAY = 1400;
const LANDING_COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours

const shouldShowLanding = (): boolean => {
  const lastSeen = localStorage.getItem('landingSeenAt');
  if (!lastSeen) return true;
  return Date.now() - Number(lastSeen) > LANDING_COOLDOWN_MS;
};

const App = () => {
  const skipLanding = !shouldShowLanding();
  const [switchStatus, setStatus] = useState(!skipLanding);
  const [showLanding, setShowLanding] = useState(!skipLanding);

  if (skipLanding) {
    document.body.classList.remove('bg-neutral-50');
    document.body.classList.add('bg-dark-blue');
  }

  const handleSwitchClicked = () => {
    document.body.classList.remove('bg-neutral-50');
    document.body.classList.add('bg-dark-blue');
    setStatus(false);
    setTimeout(() => {
      setShowLanding(false);
      localStorage.setItem('landingSeenAt', String(Date.now()));
    }, MAIN_RENDER_DELAY);
  };

  return (
    <div className={`${window.innerHeight > 870 ? 'h-screen' : ''}`}>
      {showLanding ? (
        <Landing
          switchStatus={switchStatus}
          onSwitchClicked={handleSwitchClicked}
          toggle={switchStatus}
        />
      ) : (
        <Main />
      )}
    </div>
  );
};

export default App;
