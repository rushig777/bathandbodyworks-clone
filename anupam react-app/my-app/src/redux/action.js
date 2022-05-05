import axios from "axios";
export const ERROR_DATA = "ERROR_DATA";
export const REQUEST_DATA = "REQUEST_DATA";
export const GET_DATA = "GET_DATA";
export const SORT_DATA = "SORT_DATA";
export const FILTER_DATA = "FILTER_DATA";
export const CART_DATA = "CART_DATA";
export const Delete_DATA = "Delete_DATA";

export const getProductsData = (dispatch) => {
  dispatch(requestData());
  axios
    .get("http://localhost:8080/candle")
    .then((res) =>
      dispatch({
        type: GET_DATA,
        payload: res.data,
      })
    )
    .catch((err) => dispatch(errorData(err.message)));
};

export const getCartData = (dispatch) => {
  dispatch(requestData());
  axios
    .get("http://localhost:8080/cart")
    .then((res) =>
      dispatch({
        type: CART_DATA,
        payload: res.data,
      })
    )
    .catch((err) => dispatch(errorData(err.message)));
};

export const addProducts = async (img, name, subname, Price,type) => {
  let r = await fetch("http://localhost:8080/cart", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      img,
      name,
      subname,
      Price,
      type,
    }),
  });
};

export const requestData = () => ({
  type: REQUEST_DATA,
});

export const errorData = () => ({
  type: ERROR_DATA,
});
export const sortProducts = (payload) => ({
  type: SORT_DATA,
  payload,
});
export const filterProducts = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export const deleteProd = async (dispatch, id) => {
  let r = await axios.delete(`http://localhost:8080/cart/${id}`);
  
  dispatch({
    type: Delete_DATA,
    payload: id,
  });
};

