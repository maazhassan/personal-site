import Switch from "../common/Switch";

const switchClass = 'h-36 2xl:h-40 3xl:h-52 cursor-pointer';

const SwitchBar = props => {
  return (
    <div className="flex flex-row justify-center gap-6 sm:gap-32 md:gap-44 mt-4">
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xl md:text-3xl text-blue">Web Dev</span>
        <Switch 
          className={switchClass}
          onClick={() => props.onSwitchClicked(1)}
          isOn={props.activeSwitch === 1}
          styles={`fill-transparent ${props.activeSwitch === 1 ? 'stroke-blue' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xl md:text-3xl text-green">Other Dev</span>
        <Switch 
          className={switchClass}
          onClick={() => props.onSwitchClicked(2)}
          isOn={props.activeSwitch === 2}
          styles={`fill-transparent ${props.activeSwitch === 2 ? 'stroke-green' : 'stroke-neutral-50'} stroke-[4px]`}
          accentFill="none"
          showDetails={true}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-2xl md:text-3xl text-orange">Contact</span>
      <Switch 
        className={switchClass}
        onClick={() => props.onSwitchClicked(3)}
        isOn={props.activeSwitch === 3}
        styles={`fill-transparent ${props.activeSwitch === 3 ? 'stroke-orange' : 'stroke-neutral-50'} stroke-[4px]`}
        accentFill="none"
        showDetails={true}
      />
      </div>
    </div>
  );
}

export default SwitchBar;