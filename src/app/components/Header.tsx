const Header = () => {
  return (
    <header
      className="bg-cover bg-center min-h-screen"
    >
      <div className="absolute min-h-screen bg-black bg-opacity-95"></div>
      <div className="sm:pt-36 xs:pt-24 pt-20 sm:px-12">
        <h1 className=" text-5xl font-bold w-1/2 leading-[4rem]">
         Building software solutions
        </h1>
        <p className="text-lg mt-4">
          To manage your business.
        </p>
      </div>
      <div className="flex justify-center items-center mt-16">
      </div>
    </header>
  );
};

export default Header;
