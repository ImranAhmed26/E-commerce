import Router from "next/router";

const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-700 text-gray-100">
        <div className="h-16 px-4 max-w-4xl xl:max-w-6xl mx-auto text-2xl font-bold ">
          <div className="flex justify-between items-center py-4 ">
            <div className=" flex">
              <h1 className="pr-4">{`Brand`}</h1>
              <div>
                <input
                  className="w-40 md:w-60 lg:w-96 bg-white pb-1 px-4 mx-2 rounded-sm drop-shadow-md text-left"
                  placeholder="search"
                />
              </div>
            </div>
            <div className="cursor-pointer" onClick={() => Router.push("/login")}>
              Sign In
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
