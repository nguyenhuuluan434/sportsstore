import { ActionTypes } from "./Types";

//reducer is function that recieves the current contents of data store
// and an action and use them to make change

export const ShopReducer = (storeData, action) => {
    switch (action.type) {
        // Reducers are required to create and return new objects that incorporate any required changes
        case ActionTypes.DATA_LOAD:
            // Creating a new object with all the properties of the old store plus the new data received in the action
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data
            };
        //If the action type isn’t recognized, the reducer must return the data store object it received unchanged
        default:
            return storeData || {};
    }
}