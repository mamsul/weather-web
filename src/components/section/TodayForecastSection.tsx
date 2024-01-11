import { motion as m } from 'framer-motion';
import { convertDate, rounding, weatherImg } from '../../helper/utils';

type TodayForecastSectionProps = {
  data: IForecastData[];
};

const TodayForecastSection = ({ data }: TodayForecastSectionProps) => {
  return (
    <m.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.7, type: 'spring', stiffness: 50 }}
      className="h-auto w-full rounded-2xl bg-white/55 p-3 lg:h-[11.6rem] lg:p-5">
      <h2 className="text-center text-sm font-bold lg:text-base">
        TODAY FORECAST
      </h2>

      <ul className="mt-5 flex flex-row justify-start gap-12 overflow-auto md:justify-center">
        {data &&
          data.map((e) => {
            return (
              <li
                key={e.dt}
                className="flex h-full flex-col items-center justify-between space-y-2">
                <span className="text-xs text-gray-500 lg:text-sm">
                  {convertDate(e.dt_txt).formattedTime()}
                </span>
                <div className="h-[3rem] w-[3.5rem]">
                  <img
                    src={weatherImg({ type: e.weather[0].main as WeatherType })}
                    alt={e.weather[0].description}
                    sizes="100%"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <span className="text-xs font-medium lg:text-sm">
                  {rounding(e.main.temp)}°C
                </span>
              </li>
            );
          })}
      </ul>
    </m.div>
  );
};

export default TodayForecastSection;
