const Navbar = () => {
  return (
    <div>
      <div className="h-16 m-auto text-2xl font-bold bg-gray-700 text-gray-100">
        <div className="flex justify-between">
          <div className="p-4 ">
            <h1>{`Lean's`}</h1>
          </div>
          <div className="p-4">Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
