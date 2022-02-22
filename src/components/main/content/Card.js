import CardBorder from "./CardBorder";

const Card = props => {
  return (
    <div className='inline-block'>
      <CardBorder 
        className="h-72"
        styles="fill-transparent stroke-neutral-50 stroke-[4px]"
      />
    </div>
  );
}

export default Card;