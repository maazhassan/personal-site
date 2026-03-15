interface PaginationProps {
  size: number;
  selected: number;
}

const Pagination = ({ size, selected }: PaginationProps) => {
  return (
    <div className="flex flex-row justify-center w-full h-[9px] gap-2 absolute bottom-5 left-1">
      {[...Array(size)].map((_, i) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          height="9"
          key={i}
        >
          <circle className={selected === i ? 'fill-slate-400' : 'fill-text-blue'} cx="50" cy="50" r="50" />
        </svg>
      ))}
    </div>
  );
};

export default Pagination;
