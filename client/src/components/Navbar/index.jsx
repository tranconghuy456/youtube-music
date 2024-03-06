import './navbar.css';
import { Input } from '../Input';

const Navbar = () => {
  return (
    <div className="navbar fixed ml-[240px] top-0 left-0 w-[100%] p-3 h-[64px] px-[72px] bg-[rgba(0,0,0,0.6)] border-b border-[#525252] z-10">
      <Input className="ml-4 w-[480px] h-[40px]" type="text" placeholder="Search songs, albums, artists, podcasts" />
    </div>
  );
};

export { Navbar };
