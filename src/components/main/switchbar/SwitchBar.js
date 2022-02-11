import { useState } from "react";
import Switch from "../../common/Switch";
import Hint from "./Hint";

const switchDivClass = 'flex flex-col items-center gap-1 relative';
const switchClass = 'h-32 md:h-36 3xl:h-48 cursor-pointer';

const SwitchBar = props => {
  const [userSeen, setUserSeen] = useState(!!(localStorage.getItem('userSeen')));
  const [hint, setHint] = useState(null);
  const [hintToggle, setHintToggle] = useState(false);

  const handleSwitchClicked = num => {
    if (props.switchReady) {
      if (!userSeen) {
      // if (hint === null) {
        window.innerWidth > 870 ? setHint(num) : setHint(4);
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
    <div className="flex flex-row justify-center gap-6 sm:gap-24 md:gap-28 mt-2 md:mt-5 relative">
      <div className={switchDivClass}>
        <span className="text-2xl md:text-3xl 3xl:text-4xl text-blue">Web Dev</span>
        <Switch 
          className={switchClass}
          onClick={() => {props.onSwitchClicked(1); handleSwitchClicked(1);}}
          isOn={props.activeSwitch === 1}
          styles={`fill-transparent ${props.activeSwitch === 1 ? 'stroke-blue' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
        {
          hint === 1 && <Hint position="right-[7.5rem] 3xl:right-36 top-20 w-28 text-center" toggle={hintToggle} />
        }
      </div>
      <div className={switchDivClass}>
        <span className="text-2xl md:text-3xl 3xl:text-4xl text-green">Other Dev</span>
        <Switch 
          className={switchClass}
          onClick={() => {props.onSwitchClicked(2); handleSwitchClicked(2);}}
          isOn={props.activeSwitch === 2}
          styles={`fill-transparent ${props.activeSwitch === 2 ? 'stroke-green' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
        {
          hint === 2 && <Hint position="right-32 3xl:right-[9.5rem] top-20 w-28 text-center" toggle={hintToggle} />
        }
      </div>
      <div className={switchDivClass}>
        <span className="text-2xl md:text-3xl 3xl:text-4xl text-orange">Contact</span>
        <Switch 
          className={switchClass}
          onClick={() => {props.onSwitchClicked(3); handleSwitchClicked(3);}}
          isOn={props.activeSwitch === 3}
          styles={`fill-transparent ${props.activeSwitch === 3 ? 'stroke-orange' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
        {
          hint === 3 && <Hint position="right-28 3xl:right-[8.5rem] top-20 w-28 text-center" toggle={hintToggle} />
        }
      </div>
      {
        hint === 4 && <Hint position="-top-12" toggle={hintToggle} />
      }
    </div>
  );
}

export default SwitchBar;