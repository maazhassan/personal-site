const Switch = props => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 65 113"
      className={props.className}
      onClick={() => props.onClick()}
    >
      {props.isOn ?
        <g id="switch-on">
          {/* props.styles here sets fill, stroke, and stroke-width */}
          <rect className={props.styles} x="2.5" y="2.5" width="60" height="108" rx="4" />
          {
            props.showDetails && (
              <g>
                <line className={props.styles} strokeLinecap="round" x1="32.5" y1="13.5" x2="32.5" y2="35.5" />
                <circle className={props.styles} strokeLinecap="round" cx="33" cy="83" r="9.5" />
              </g>
            )
          }
          <path fill={props.accentFill} d="M5,96s2,3,10,3H51s8,0,9-3v12H5Z" />
        </g>
      :
        <g id="switch-off">
          <rect className={props.styles} x="2.5" y="2.5" width="60" height="108" rx="4" />
          {
            props.showDetails && (
              <g>
                <line className={props.styles} strokeLinecap="round" x1="32.5" y1="20.5" x2="32.5" y2="42.5" />
                <circle className={props.styles} strokeLinecap="round" cx="33" cy="90" r="9.5" />
              </g>
            )
          }
          <path fill={props.accentFill} d="M60,17s-2-3-10-3H14s-8,0-9,3V5H60Z" />
        </g>
      }
    </svg>
  );
}

export default Switch;