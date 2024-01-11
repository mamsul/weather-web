import { motion as m } from 'framer-motion';
import { convertDate, rounding } from '../../helper/utils';
import ForecastItem from '../ForecastItem';

type ForecastSectionProps = {
  data: IForecastGroup[];
};

const ForecastSection = ({ data }: ForecastSectionProps) => {
  const dtToday: string = new Date().toString();

  return (
    <m.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.7, type: 'spring', stiffness: 50 }}
      className="rounded-2xl bg-white/55 p-5">
      <h2 className="text-center text-sm font-bold sm:text-base">
        {data.length}-DAY FORECAST
      </h2>

      <ul className="0 mt-6 flex h-full w-full flex-col space-y-4">
        {data &&
          data.length > 0 &&
          data.map((item) => {
            const fullDay = convertDate(item.date).fullDay();
            const dashDate: string = convertDate(dtToday).dateDash();
            const dayName = item.date === dashDate ? 'Today' : fullDay;

            return (
              <li
                key={item.date}
                className="h-auto w-full border-b border-slate-300 py-1">
                <ForecastItem
                  day={dayName}
                  temp={rounding(item.temp)}
                  src={item.main as WeatherType}
                />
              </li>
            );
          })}
      </ul>
    </m.div>
  );
};

export default ForecastSection;
