import { Thermometer } from 'lucide-react';
import { cn, weatherImg } from '../helper/utils';

type ForecastItemProps = {
  day: string;
  temp: number;
  src: WeatherType;
};

const ForecastItem = ({ day, src, temp }: ForecastItemProps) => {
  return (
    <>
      <div className="flex h-full w-full flex-row items-center justify-between text-sm">
        <div className="w-2/12">
          <span
            className={cn(
              'text-gray-500',
              day === 'Today' && 'font-medium text-gray-800',
            )}>
            {day}
          </span>
        </div>

        <div className="flex w-8/12 flex-col gap-3 sm:gap-0">
          <div className="flex flex-col items-center gap-1">
            <div className="h-[2rem] w-auto sm:h-[4.4rem]">
              <img
                src={weatherImg({ type: src })}
                alt="cloudy weather icon"
                sizes="100%"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* <span className="text-sm font-medium">{weather}</span> */}
          </div>
        </div>

        <div className="flex w-2/12 justify-end">
          <span className="inline-flex items-center gap-1 font-semibold sm:gap-2">
            <Thermometer className="h-3 w-auto sm:h-4" /> {temp}°C
          </span>
        </div>
      </div>
    </>
  );
};

export default ForecastItem;
