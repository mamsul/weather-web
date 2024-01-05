import ForecastItem from '../ForecastItem';

const ForecastSection = () => {
  return (
    <div className="rounded-2xl bg-white/55 p-5">
      <h2 className="text-center text-sm font-bold sm:text-base">
        7-DAY FORECAST
      </h2>

      <ul className="0 mt-6 flex h-full w-full flex-col space-y-4">
        <li className="h-16 w-full border-b border-slate-300">
          <ForecastItem day="Sun" weather="Rainy" temp={27} />
        </li>
        <li className="h-16 w-full border-b border-slate-300">
          <ForecastItem day="Mon" weather="Rainy" temp={27} />
        </li>
        <li className="h-16 w-full border-b border-slate-300">
          <ForecastItem day="Tue" weather="Rainy" temp={27} />
        </li>
        <li className="h-16 w-full border-b border-slate-300">
          <ForecastItem day="Wed" weather="Rainy" temp={27} />
        </li>
        <li className="h-16 w-full border-b border-slate-300">
          <ForecastItem day="Thu" weather="Rainy" temp={27} />
        </li>
        <li className="h-16 w-full border-b border-slate-300">
          <ForecastItem day="Fri" weather="Rainy" temp={27} />
        </li>
        <li className="h-16 w-full border-b border-slate-300">
          <ForecastItem day="Sat" weather="Rainy" temp={27} />
        </li>
      </ul>
    </div>
  );
};

export default ForecastSection;
