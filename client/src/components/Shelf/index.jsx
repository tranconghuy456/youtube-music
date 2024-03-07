import picture from '../../assets/images/logo/favicon_96.png';
import { Button } from '../Button';
import './shelf.css';

const Shelf = ({ data }) => {
  const context = data.context;

  return (
    <div className="shelf">
      <header className="flex justify-between">
        <div className="info flex items-center space-x-3 text-xl">
          <div className="picture">
            <img className="min-w-[56px] h-[56px]" src={data.image} alt="" />
          </div>
          <div className="title space-y-1">
            <p className="author text-lg text-[#aaa]">{data.author}</p>
            <p className="name font-bold text-3xl">{data.name}</p>
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

      <div className="carsousel-container flex space-x-6 mt-[2rem] overflow-x-auto pb-4">
        {context.map(({ name, author, image, id, duration, liked }) => {
          return <Carousel name={name} author={author} image={image} id={id} duration={duration} liked={liked} />;
        })}
        {/* <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel /> */}
      </div>
    </div>
  );
};

const Carousel = ({ name, author, image, id, duration, liked }) => {
  return (
    <div className="carousel cursor-pointer flex flex-col items-center justify-center text-center w-[120px] h-50 min-w-[200px] p-4 bg-[rgba(0,0,0,0.2)] space-y-2 hover:outline outline-1 outline-[#525252]">
      <img className="w-[200px] h-100" src={image} />
      <div className="carousel-info">
        <p className="title text-lg font-bold truncate">{name}</p>
        <p className="author text-[#aaa] text-sm truncate">{author}</p>
      </div>
    </div>
  );
};

export { Shelf };
