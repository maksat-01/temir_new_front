import {ReducerBasket} from "./BasketSlice";
import {AppDispatch} from "../../../redux/Store";

export const addToBasket = (product: any) => {
  let basket = JSON.parse(localStorage.getItem('basket') as any) || []
  basket = [...basket, product]
  localStorage.setItem('basket', JSON.stringify(basket))
}