const Tags = ({ className, value }) => {
  return (
    <div
      className={`${className} p-2 bg-[rgba(0,0,0,0.5)] text-center text-sm w-[72px] cursor-pointer hover:bg-[rgba(0,0,0,0.8)] outline-1 outline-[#525252] hover:outline rounded-lg`}
    >
      {value}
    </div>
  );
};

const Button = ({ className, value, children }) => {
  return (
    <div
      className={`${className} p-2 bg-[rgba(0,0,0,0.5)] text-center text-sm w-[72px] cursor-pointer hover:bg-[rgba(0,0,0,0.8)] outline-1 outline-[#525252] hover:outline rounded-lg`}
    >
      {value}
      {children}
    </div>
  );
};

export { Button, Tags };
