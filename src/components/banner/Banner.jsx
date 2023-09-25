const Banner = () => {
  return (
    <div
      className=" md:bg-[url('https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2L6RNBIXCgMMAq2uBuaO4RhPmpyXJFgGTcUCejsTm-QmmiPU6hDwhOqEA')]
      "
    >
      <div
        className="flex flex-col py-6 gap-10 text-center  justify-center bg-neutral-100/80 backdrop-brightness-75
      md:backdrop-brightness-50 md:h-[500px]"
      >
        <h1 className="text-2xl md:px-1 md:text-5xl  font-bold">
          I Grow By Helping People In Need
        </h1>
        <div>
          <input
            type="text"
            className="h-12 md:w-[470px] px-4 rounded-l-lg  "
            placeholder="Search Here...."
          />
          <button className="btn btn-error rounded-l-none h-12 rounded-r-lg text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
