import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CommonReducer } from "./CommonReducer";
import { CartReducer } from "./CartReducer";

// The Redux package provides the createStore function, which sets up a new data store using a reducer.
// a reducer is function what have parameter (storeData, action)
// This is enough to create a data store to get started with, but I will add additional features later so that further
// operations can be performed and so that data can be loaded from a web service.
// Redux data store uses only one reducer => create a common reducer to call to redux
export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer, CartReducer));