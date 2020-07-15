//By default, the Redux data store uses only one reducer, this function được sử dụng để combine ~ reducer.

export const CommonReducer = (...reducers) => (storeData, action) => {
    for (let index = 0; index < reducers.length; index++) {
        const newStore = reducers[index](storeData, action);
        if (newStore !== storeData) {
            return newStore
        }
    }
    return storeData;
}