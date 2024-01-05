import { Cloud, Droplets, Thermometer, Wind } from 'lucide-react';

const AirConditionSection = () => {
  return (
    <div className="h-max w-full rounded-2xl bg-white/55 p-5 sm:h-[11.6rem]">
      <h2 className="text-center text-sm font-bold sm:text-base">
        AIR CONDITION
      </h2>
      <div className="mt-5 grid h-full w-full grid-cols-2 gap-5 sm:mt-0 sm:grid-cols-4 sm:gap-0">
        <div className="flex w-full flex-col items-center justify-center gap-2 sm:gap-6">
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 sm:gap-2 sm:text-sm">
            <Thermometer className="h-3 w-auto sm:h-5" /> Real Feel
          </span>
          <span className="text-lg font-bold sm:text-xl">30°C</span>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 sm:gap-6">
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 sm:gap-2 sm:text-sm">
            <Wind className="h-3 w-auto sm:h-5" /> Wind
          </span>
          <span className="text-lg font-bold sm:text-xl">3.43 m/s</span>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 sm:gap-6">
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 sm:gap-2 sm:text-sm">
            <Cloud className="h-3 w-auto sm:h-5" /> Cloud
          </span>
          <span className="text-lg font-bold sm:text-xl">100%</span>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 sm:gap-6">
          <span className="inline-flex items-center gap-1 text-xs text-gray-500 sm:gap-2 sm:text-sm">
            <Droplets className="h-3 w-auto sm:h-5" /> Humidity
          </span>
          <span className="text-lg font-bold sm:text-xl">80%</span>
        </div>
      </div>
    </div>
  );
};

export default AirConditionSection;
