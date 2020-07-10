import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

// The Redux package provides the createStore function, which sets up a new data store using a reducer.
// This is enough to create a data store to get started with, but I will add additional features later so that further
// operations can be performed and so that data can be loaded from a web service.
export const SportsStoreDataStore = createStore(ShopReducer);