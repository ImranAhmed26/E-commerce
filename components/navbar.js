const Navbar = () => {
  return (
    <div>
      <div className="bg-gray-700 text-gray-100">
        <div className="h-16 max-w-4xl xl:max-w-6xl mx-auto text-2xl font-bold ">
          <div className="flex justify-between">
            <div className="p-4 ">
              <h1>{`E Com`}</h1>
            </div>
            <div className="p-4">Sign In</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
