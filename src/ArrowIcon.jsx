const ArrowIcon = (props) => (
  <div className="arrow" style={{background: props.background}}>
    <svg
      width="8"
      height="13"
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2L7 6.5L2 11"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default ArrowIcon;
