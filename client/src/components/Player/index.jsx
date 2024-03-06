import picture from '../../assets/images/logo/favicon_48.png';

const Player = () => {
  return (
    <div className="player fixed flex bottom-0 left-0 bg-[#212121] w-[100%] h-[72px] items-center justify-center z-20">
      <div className="current-song flex space-x-3 items-center">
        <img src={picture} alt="" className="w-[46px] h-[46px]" />
        <div>
          <p className="font-bold text-lg text-white">Cao oc</p>
          <p className="text-[#aaa] text-sm leading-3">Bray </p>
        </div>
        <div className="actions space-x-5 text-xl text-white">
          <i className="ri-thumb-up-line cursor-pointer"></i>
          <i className="ri-thumb-down-line cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export { Player };
