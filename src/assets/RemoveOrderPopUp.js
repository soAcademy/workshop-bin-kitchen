const RemoveOrderPopUp = ({removeOrderPopup, setRemoveOrderPopup, menuSelected, setMenuSelected, removeMenuName, buttonClicked, setButtonClicked }) => {
  return (<div 
    className={`w-screen h-screen flex justify-center items-center fixed top-0 left-0 duration-500 ${
      removeOrderPopup ? "z-40" : "scale-0"
    }`}
  >
    <div
      className={`w-60 h-36 bg-white text-center p-4 justify-between flex flex-col rounded-xl shadow-xl  duration-500 ${
        removeOrderPopup ? "opacity-100 z-40" : "opacity-0"
      }`}
    >
      <div className="text-xl">ลบรายการ</div>
      <div className="flex justify-between p-4 px-4 space-x-2">
        <button
          className="bg-blue-400 border-blue-300 border-2 shadow-md w-20 h-10 rounded"
          onClick={() => {
            delete menuSelected[removeMenuName];
            setMenuSelected(menuSelected)
            setButtonClicked(!buttonClicked);
            setRemoveOrderPopup(false);
          }}
        >
          ยืนยัน
        </button>
        <button
          className="border-blue-300 border-2 shadow-md w-20 h-10 rounded"
          onClick={() => setRemoveOrderPopup(false)}
        >
          ยกเลิก
        </button>
      </div>
    </div>
  </div>)
}
export default RemoveOrderPopUp;