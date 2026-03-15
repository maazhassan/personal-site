import { useState } from 'react';
import Switch from '../../common/Switch';
import Hint from './Hint';

const switchDivClass = 'flex flex-col items-center gap-1 relative';
const switchClass = 'h-28 lg:h-36 3xl:h-48 cursor-pointer';

interface SwitchBarProps {
  className?: string;
  activeSwitch: number;
  onSwitchClicked: (num: number) => void;
  switchReady: boolean;
}

const SwitchBar = ({ activeSwitch, onSwitchClicked, switchReady, className }: SwitchBarProps) => {
  const [userSeen, setUserSeen] = useState(!!localStorage.getItem('userSeen'));
  const [hint, setHint] = useState<number | null>(null);
  const [hintToggle, setHintToggle] = useState(false);

  const handleSwitchClicked = (num: number) => {
    if (switchReady) {
      if (!userSeen) {
        window.innerWidth > 870 ? setHint(num) : setHint(4);
        setUserSeen(true);
        localStorage.setItem('userSeen', 'true');
        setTimeout(() => setHintToggle(true), 0);
      } else if (hint !== null) {
        setHintToggle(false);
        setTimeout(() => setHint(null), 1000);
      }
    }
  };

  return (
    <div className={'flex flex-row justify-center gap-8 sm:gap-24 md:gap-28 relative ' + (className ?? '')}>
      <div className={switchDivClass}>
        <span className="text-xl md:text-3xl 3xl:text-4xl text-blue">Web</span>
        <Switch
          className={switchClass}
          onClick={() => { onSwitchClicked(1); handleSwitchClicked(1); }}
          isOn={activeSwitch === 1}
          styles={`fill-transparent ${activeSwitch === 1 ? 'stroke-blue' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
        {hint === 1 && (
          <Hint
            className="text-sm text-blue-gray absolute right-[7.5rem] 3xl:right-36 top-20 w-28 text-center"
            text="Click again to go back, or click a different switch"
            toggle={hintToggle}
            tag="span"
          />
        )}
      </div>
      <div className={switchDivClass}>
        <span className="text-xl md:text-3xl 3xl:text-4xl text-green">Apps</span>
        <Switch
          className={switchClass}
          onClick={() => { onSwitchClicked(2); handleSwitchClicked(2); }}
          isOn={activeSwitch === 2}
          styles={`fill-transparent ${activeSwitch === 2 ? 'stroke-green' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
        {hint === 2 && (
          <Hint
            className="text-sm text-blue-gray absolute right-32 3xl:right-[9.5rem] top-20 w-28 text-center"
            text="Click again to go back, or click a different switch"
            toggle={hintToggle}
            tag="span"
          />
        )}
      </div>
      <div className={switchDivClass}>
        <span className="text-xl md:text-3xl 3xl:text-4xl text-orange">Contact</span>
        <Switch
          className={switchClass}
          onClick={() => { onSwitchClicked(3); handleSwitchClicked(3); }}
          isOn={activeSwitch === 3}
          styles={`fill-transparent ${activeSwitch === 3 ? 'stroke-orange' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
        {hint === 3 && (
          <Hint
            className="text-sm text-blue-gray absolute right-28 3xl:right-[8.5rem] top-20 w-28 text-center"
            text="Click again to go back, or click a different switch"
            toggle={hintToggle}
            tag="span"
          />
        )}
      </div>
      {hint === 4 && (
        <Hint
          className="text-sm text-blue-gray absolute top-[-1.9rem]"
          text="Click again to go back, or click a different switch"
          toggle={hintToggle}
          tag="span"
        />
      )}
    </div>
  );
};

export default SwitchBar;
