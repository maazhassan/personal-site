const Pagination = props => {
  return (
    <div className="flex flex-row justify-center w-full h-[9px] gap-2 absolute bottom-5 left-1">
      {props.data.projects.map((e, i) => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            height="9"
            key={i}
          >
            <circle className={props.selected === i ? 'fill-slate-400' : 'fill-text-blue'} cx="50" cy="50" r="50" />
          </svg>
        )
      })}
    </div>
  );
}

export default Pagination;