export const setShops = (shops) => {
    return {
        type: 'SET_SHOPS',
        payload: shops,
    };
};
export const addShops = (shops) => {
    return {
        type: 'ADD_SHOPS',
        payload: shops,
    };
};
export const dlt = (shops, shopItem) => {
    return {
        type: 'DLT_SHOPS',
        payload: shops,
        payload1: shopItem,
    };
};
export const edt = (shops, shopItem) => {
    return {
        type: 'EDT',
        payload: shops,
        payload1: shopItem,
    };
};
export const editShops = (inputs, shop) => {
    return {
        type: 'EDIT_SHOPS',
        payload: inputs,
        payload1: shop,
    };
};
export const category = (shops, curItem) => {
    return {
        type: 'CAT_SHOPS',
        payload: shops,
        payload1: curItem,
    };
};
export const area = (shops, curItem) => {
    return {
        type: 'AREA_SHOPS',
        payload: shops,
        payload1: curItem,
    };
};
export const status = (shops, day) => {
    return {
        type: 'STATUS_SHOPS',
        payload: shops,
        payload1: day,
    };
};
export const status1 = (shops, day) => {
    return {
        type: 'STATUS1_SHOPS',
        payload: shops,
        payload1: day,
    };
};