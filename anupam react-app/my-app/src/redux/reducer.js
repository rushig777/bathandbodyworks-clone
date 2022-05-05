import { FILTER_DATA, GET_DATA, SORT_DATA, CART_DATA, Delete_DATA } from "./action";
import { ERROR_DATA } from "./action";
import { REQUEST_DATA } from "./action";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  products: [],
  cartProducts: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    case ERROR_DATA:
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
      };
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        products: [],
      };
    case SORT_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: state.products.sort((a, b) => {
          if (payload == "htol") {
            return b.Price - a.Price;
          } else if (payload == "ltoh") {
            return a.Price - b.Price;
          }
        }),
      };
    case FILTER_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: state.products.filter((e) => e.type == payload),
      };
      case CART_DATA:
        return{
          ...state,
          isLoading: false,
          isError: false,
          cartProducts: payload,
        }
        case Delete_DATA:
          return{
            ...state,
            isLoading: false,
            isError: false,
            cartProducts: state.cartProducts.filter((e) => e.id !== payload)
          }
    default:
      return state;
  }
};
