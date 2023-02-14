export const RemoveOrderPopUp = ({
  removeOrderPopup,
  setRemoveOrderPopup,
  menuSelected,
  setMenuSelected,
  removeMenuName,
  buttonClicked,
  setButtonClicked,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 flex h-screen w-screen items-center justify-center duration-500 ${
        removeOrderPopup ? "z-40" : "scale-0"
      }`}
    >
      <div
        className={`flex h-36 w-60 flex-col justify-between rounded-xl bg-white p-4 text-center shadow-xl  duration-500 ${
          removeOrderPopup ? "z-40 opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-xl">ลบรายการ</div>
        <div className="flex justify-between space-x-2 p-4 px-4">
          <button
            className="h-10 w-20 rounded border-2 border-blue-300 bg-blue-400 shadow-md"
            onClick={() => {
              delete menuSelected[removeMenuName];
              setMenuSelected(menuSelected);
              setButtonClicked(!buttonClicked);
              setRemoveOrderPopup(false);
            }}
          >
            ยืนยัน
          </button>
          <button
            className="h-10 w-20 rounded border-2 border-blue-300 shadow-md"
            onClick={() => setRemoveOrderPopup(false)}
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
};
