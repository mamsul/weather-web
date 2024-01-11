import { motion as m } from 'framer-motion';
import { weatherImg } from '../../helper/utils';

const IdleSection = () => {
  const arr: WeatherType[] = ['Clear', 'Clouds', 'Rain', 'Thunderstorm'];

  return (
    <div className="flex h-[60vh] w-full items-center justify-center">
      {arr.map((item, i) => {
        return (
          <m.div
            animate={{ y: [-20, 20, -20] }}
            transition={{
              ease: 'linear',
              duration: 2,
              delay: 0 + i,
              repeat: Infinity,
            }}
            key={`idx-${i}-${item}`}
            className="h-[6rem] w-auto sm:h-[10rem]">
            <img
              src={weatherImg({ type: item })}
              alt={item}
              sizes="100%"
              className="h-full w-full object-contain object-center"
            />
          </m.div>
        );
      })}
    </div>
  );
};

export default IdleSection;
