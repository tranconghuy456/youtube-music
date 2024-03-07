const Tags = ({ className, value, id }) => {
  return (
    <div
      id={id}
      className={`${className} p-2 px-6 bg-[rgba(0,0,0,0.5)] text-center text-sm w-100 cursor-pointer hover:bg-[rgba(0,0,0,0.8)] outline-1 outline-[#525252] hover:outline rounded-lg`}
    >
      {value}
    </div>
  );
};

export { Tags };
