interface props {
  title: string;
  data: IGraphResults;
}

const PriceCard = ({ title, data }: props) => {
  return (
    <div className="mt-[30px] p-[20px] w-full mx-auto bg-[white] rounded-[10px]">
      <div className="flex justify-between">
        <p className="font-bold text-2xl">{title}</p>
        <div className="flex flex-col gap-[10px]">
          <span className="font-extralight">
            Average Price:{" "}
            <span id="averagePrice" className="font-bold">
              ${(data?.average).toFixed(2)}
            </span>
          </span>
          <span className="font-extralight">
            Max Price:{" "}
            <span id="maxPrice" className="font-bold">
              ${data?.max}
            </span>
          </span>
          <span className="font-extralight">
            Min Price:{" "}
            <span id="minPrice" className="font-bold">
              ${data?.min}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
