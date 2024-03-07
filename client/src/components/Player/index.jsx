import picture from '../../assets/images/logo/favicon_48.png';

const Player = () => {
  return (
    <div className="player fixed flex bottom-0 left-0 bg-[#212121] w-[100%] h-[72px] items-center justify-between z-20 px-8">
      <div className="flex space-x-6 text-white items-center">
        <i class="ri-skip-back-fill cursor-pointer ri-lg"></i>
        <i className="ri-play-fill cursor-pointer ri-2x"></i>
        <i class="ri-skip-forward-fill cursor-pointer ri-lg"></i>
      </div>

      <div className="current-song flex space-x-3 items-center">
        <img src={picture} alt="" className="w-[46px] h-[46px]" />
        <div className="w-[8rem]">
          <p className="font-bold text-lg text-white">Cao oc</p>
          <p className="text-[#aaa] text-sm leading-3">Bray </p>
        </div>
        <div className="actions space-x-5 text-xl text-white">
          <i className="ri-heart-3-line cursor-pointer hover:before:content-['\ee0a']"></i>
        </div>
      </div>

      <div className="volume flex items-center text-white space-x-6">
        <i class="ri-volume-up-fill ri-lg cursor-pointer"></i>
        <i class="ri-repeat-line ri-lg cursor-pointer"></i>
        <i class="ri-shuffle-line ri-lg cursor-pointer"></i>
      </div>
    </div>
  );
};

export { Player };
