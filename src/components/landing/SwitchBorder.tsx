interface SwitchBorderProps {
  className?: string;
  styles: string;
}

const SwitchBorder = ({ className, styles }: SwitchBorderProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150.99 212"
      className={className}
    >
      <g id="switch-border">
        <rect className={styles} x="2.5" y="2.5" width="145.99" height="207" rx="7" />
      </g>
    </svg>
  );
};

export default SwitchBorder;
