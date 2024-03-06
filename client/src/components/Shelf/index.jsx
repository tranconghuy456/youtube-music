import picture from '../../assets/images/logo/favicon_96.png';
import { Button } from '../Button';
import './shelf.css';

const Shelf = () => {
  return (
    <div className="shelf">
      <header className="flex justify-between">
        <div className="info flex items-center space-x-3 text-xl">
          <div className="picture">
            <img className="min-w-[56px] h-[56px]" src={picture} alt="" />
          </div>
          <div className="title space-y-1">
            <p className="author text-lg text-[#aaa]">Trần Công Huy</p>
            <p className="name font-bold text-3xl">Listen again</p>
          </div>
        </div>

        {/* <Button className="float-left">
          <span>More</span>
        </Button> */}
        {/* <div className="actions space-x-4">
          <Button className="w-[32px] text-center float-left">
            <i className="ri-arrow-left-s-line"></i>
          </Button>
          <Button className="w-[32px] text-center float-left">
            <i className="ri-arrow-right-s-line"></i>
          </Button>
        </div> */}
      </header>

      <div className="carsousel-container flex space-x-6 mt-[3rem] overflow-x-auto pb-4">
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="carousel cursor-pointer flex flex-col items-center justify-center text-center w-[160px] h-[160px] min-w-[160px] bg-[rgba(0,0,0,0.2)] space-y-2 hover:outline outline-1 outline-[#525252]">
      <img className="w-[72px] h-[72px]" src={picture} />
      <div className="carousel-info">
        <p className="title text-lg font-bold">Cao ốc 20</p>
        <p className="author text-[#aaa]">B-ray</p>
      </div>
    </div>
  );
};

export { Shelf };
