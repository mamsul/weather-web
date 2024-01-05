import { Github } from 'lucide-react';
import Badge from './Badge';

const Header = () => {
  return (
    <header className="flex h-12 w-full items-center justify-between rounded-sm">
      <div className="flex items-center gap-5">
        <h1 className="text-lg font-bold xl:text-xl">The Weather.</h1>
        <Badge className="bg-yellow-500">
          <span className="text-xs text-white sm:text-sm">On Progress</span>
        </Badge>
      </div>

      <a
        href="#"
        className="hidden text-sm underline underline-offset-4 sm:block sm:text-base">
        github
      </a>
      <a href="#" className="block sm:hidden">
        <Github className="h-auto w-4" />
      </a>
    </header>
  );
};

export default Header;
