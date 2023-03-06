import axios from "axios";

export const addOrder = (menuSelected) => {
  const _tableId = Number(document.querySelector("#tableNo").value);
  const _menuSelected = Object.values(menuSelected).sort((a, b) => a.id - b.id);
  // const _items = _menuSelected.map((item) => {
  //   return {
  //     menu_id: item.id,
  //     price: item.price,
  //     quantity: item.quantity,
  //     total_price: item.price * item.quantity,
  //   };
  // });

  const _items = _menuSelected.map((item) => {
    return {
      menuId: item.id,
      quantity: item.quantity,
    };
  });
  const _totalPrice = _menuSelected.reduce((acc, i) => {
    return acc + Number(i.quantity) * Number(i.price);
  }, 0);
  // console.log("_items", _items);
  const _data = JSON.stringify({
    table_id: _tableId,
    total_price: _totalPrice,
    items: _items,
  });
  // console.log("_data", _data);
  const _config = {
    method: "post",
    url: "https://backend-api-amber.vercel.app/foodOrdering/addOrder",
    // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/create-order",
    headers: {
      "Content-Type": "application/json",
    },
    data: _data,
  };
  axios(_config)
    .then(function (response) {
      // console.log("response.data :>> ", response.data);
    })
    .catch(function (error) {
      // console.log(error);
    });
};
