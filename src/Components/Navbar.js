const Navbar = () => {
  return (
    <div className="w-full flex fixed top-0 bg-white animated z-40 shadow p-4">
      <button type="button" className="">
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
        </svg>
      </button>
      <div className="pl-4">
        <p className="text-lg">ครัวคุณบิน</p>
      </div>
    </div>
  );
};

export default Navbar;
