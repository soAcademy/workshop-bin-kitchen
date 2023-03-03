import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [selectedConfig, setSelectedConfig] = useState(0);
  const [category, setCategory] = useState([]);
  const [fetchState, setFetchState] = useState(false);
  const [result, setResult] = useState();

  const addCategory = (category) => {
    const data = JSON.stringify({
      name: category,
    });
    const config = {
      method: "post",
      url: "http://localhost:5555/foodOrdering/addCategory",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function () {
        setResult(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const addMenu = (input) => {
    const _name = input["name"].value;
    const _price = Number(input["price"].value);
    const _url = input["url"].value;
    const _categoryId = Number(input["category"].value);
    const data = JSON.stringify({
      name: _name,
      price: _price,
      image: _url,
      categoryId: _categoryId,
    });
    console.log("data", data);
    const config = {
      method: "post",
      url: "http://localhost:5555/foodOrdering/addMenu",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setResult(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    const config = {
      method: "post",
      url: "http://localhost:5555/foodOrdering/getCategory",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setCategory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [fetchState]);
  return (
    <div className="mt-20 p-5 font-kanit">
      <ul className="mx-auto flex w-10/12 justify-center space-x-4 border-b p-4">
        <button
          className={selectedConfig === 0 ? "underline" : ""}
          onClick={() => setSelectedConfig(0)}
        >
          เพิ่มประเภทอาหาร
        </button>
        <button
          className={selectedConfig === 1 ? "underline" : ""}
          onClick={() => setSelectedConfig(1)}
        >
          เพิ่มเมนู
        </button>
        {/* <button
          className={selectedConfig === 2 ? "underline" : ""}
          onClick={() => setSelectedConfig(2)}
        >
          เพิ่มx
        </button> */}
      </ul>
      {selectedConfig === 0 && (
        <div>
          <form
            className="mx-auto mt-4 flex flex-col justify-center p-6 md:w-1/2"
            onSubmit={(e) => {
              e.preventDefault();
              const category = e.target[0].value;
              const result = addCategory(category);
              setResult(result);
            }}
          >
            <input
              required
              placeholder="กรอกประเภทอาหาร"
              className="rounded-lg border p-2 px-4 "
            ></input>
            <button
              type="submit"
              className="mx-auto mt-4 w-20 rounded-lg bg-slate-100 p-2 shadow-md hover:bg-slate-200"
            >
              เพิ่ม
            </button>
          </form>
          <div className="mx-auto md:w-1/2">
            รายชื่อประเภทอาหาร
            {category?.map((e, idx) => {
              return (
                <ul key={idx} className="text">
                  <li className="list-inside list-disc">
                    ID {e.id} : {e.name}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      )}
      {selectedConfig === 1 && (
        <form
          className="mx-auto mt-4 flex flex-col justify-center p-6 md:w-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            const input = e.target;
            const _name = input["name"].value;
            const _price = input["price"].value;
            const _url = input["url"].value;
            const _category = input["category"].value;
            console.log(
              "_name,_price,_url,_category",
              _name,
              _price,
              _url,
              _category
            );
            addMenu(input);
          }}
        >
          <label>ชื่อเมนู</label>
          <input
            required
            id="name"
            placeholder="กรอกชื่อเมนูอาหาร"
            className="rounded-lg border p-2 px-4 "
          ></input>
          <label>ราคา</label>
          <input
            id="price"
            type="number"
            placeholder="กรอกราคาอาหาร"
            className="rounded-lg border p-2 px-4 "
          ></input>
          <label>URL รูปอาหาร</label>
          <input
            id="url"
            placeholder="กรอก URL"
            className="rounded-lg border p-2 px-4 "
          ></input>
          <label>ประเภท</label>
          <input
            type="number"
            id="category"
            placeholder="กรอก ID ประเภทอาหาร"
            className="rounded-lg border p-2 px-4 "
          ></input>
          <button
            type="submit"
            className="mx-auto mt-4 w-20 rounded-lg bg-slate-100 p-2 shadow-md hover:bg-slate-200"
          >
            เพิ่มเมนู
          </button>
          <input
            className="hidden"
            type="file"
            onChange={(e) => console.log("e.target.files", e.target.files)}
          ></input>
        </form>
      )}
      <div
        className={`fixed bottom-1/2 left-auto z-10 flex h-[100px]
        w-10/12 flex-col justify-between border border-slate-100 bg-white p-5
        text-center shadow-lg duration-500 md:left-1/4 md:bottom-1/2 md:h-[150px] md:w-1/2 md:rounded-xl md:px-10
        ${result ? "" : "scale-0"}`}
      >
        <p>เพิ่มรายการสำเร็จ</p>
        <button
          onClick={() => {
            setFetchState(!fetchState);
            setResult();
          }}
          className="mx-auto w-20 rounded-lg bg-slate-50 p-2 shadow-lg hover:bg-slate-100 active:shadow-inner"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Admin;
