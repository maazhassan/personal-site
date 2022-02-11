import { useState } from "react";
import Switch from "../../common/Switch";
import Hint from "./Hint";

const switchDivClass = 'flex flex-col items-center gap-1 relative';
const switchClass = 'h-36 2xl:h-40 3xl:h-52 cursor-pointer';

const SwitchBar = props => {
  const [userSeen, setUserSeen] = useState(!!(localStorage.getItem('userSeen')));
  const [hint, setHint] = useState(null);
  const [hintToggle, setHintToggle] = useState(false);

  const handleSwitchClicked = num => {
    if (props.switchReady) {
      if (!userSeen) {
        setHint(num);
        setUserSeen(true);
        localStorage.setItem('userSeen', true);
        setTimeout(() => setHintToggle(true), 0);
      }
      else if (hint !== null) {
        setHintToggle(false);
        setTimeout(() => setHint(null), 500);
      }
    }
  }

  return (
    <div className="flex flex-row justify-center gap-6 sm:gap-24 md:gap-32 mt-2 md:mt-5">
      <div className={switchDivClass}>
        <span className="text-2xl md:text-3xl text-blue">Web Dev</span>
        <Switch 
          className={switchClass}
          onClick={() => {props.onSwitchClicked(1); handleSwitchClicked(1);}}
          isOn={props.activeSwitch === 1}
          styles={`fill-transparent ${props.activeSwitch === 1 ? 'stroke-blue' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
        {
          hint === 1 && <Hint right="right-[7.5rem]" toggle={hintToggle} />
        }
      </div>
      <div className={switchDivClass}>
        <span className="text-2xl md:text-3xl text-green">Other Dev</span>
        <Switch 
          className={switchClass}
          onClick={() => {props.onSwitchClicked(2); handleSwitchClicked(2);}}
          isOn={props.activeSwitch === 2}
          styles={`fill-transparent ${props.activeSwitch === 2 ? 'stroke-green' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
        {
          hint === 2 && <Hint right="right-32" toggle={hintToggle} />
        }
      </div>
      <div className={switchDivClass}>
        <span className="text-2xl md:text-3xl text-orange">Contact</span>
        <Switch 
          className={switchClass}
          onClick={() => {props.onSwitchClicked(3); handleSwitchClicked(3);}}
          isOn={props.activeSwitch === 3}
          styles={`fill-transparent ${props.activeSwitch === 3 ? 'stroke-orange' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
        {
          hint === 3 && <Hint right="right-28" toggle={hintToggle} />
        }
      </div>
    </div>
  );
}

export default SwitchBar;