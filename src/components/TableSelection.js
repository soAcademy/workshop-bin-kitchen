const TableSelection = () => {
  const TableNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="grid gap-2 grid-cols-5">
      {TableNumber.map((_, index) => (
        <button className="py-2 px-2 bg-red-200 rounded-lg button border hover:border-red-800 border-2 active:bg-red-500 mx-6 my-6 md:mx-12 md:my-12 ">
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default TableSelection;
