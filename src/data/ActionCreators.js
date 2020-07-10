import { ActionTypes } from "./Types";
import { data as phData } from "./placeholderData";

//this function will create an action object that can be process by data store
//a good idea to use a common set of properties in action objects that they can be handled consistently
export const loadData = (dataType) => ({
    //requirement for the objects produced by action creators is they must have a type
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
});

//Actions are processed by data store reducers (in this case is ShopReducer)