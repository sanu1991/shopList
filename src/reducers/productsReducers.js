const initialState = { shops: [], edit: {} };

const productsReducers = (state = initialState, { type, payload, payload1 }) => {
    switch (type) {
        case "SET_SHOPS": return { ...state, shops: payload };

        case "ADD_SHOPS": return { ...state, shops: [payload, ...state.shops] };

        case "DLT_SHOPS":
            console.log(payload, payload1);
            const filtered = payload1.filter((e) => e != payload);
            console.log(filtered);
            return { ...state, shops: [...filtered] };

        case "EDT":
            console.log(payload, payload1);
            console.log(state);
            return { ...state, edit: payload };

        case "EDIT_SHOPS":
            console.log(state);
            console.log(payload, payload1);
            const index = payload1.findIndex((e) => e.id === payload.id);
            console.log(index);
            payload1[index] = payload;
            console.log(payload1, payload);
            return { ...state, shops: [...payload1], edit: {} };

        default: return state;
    }
}

export default productsReducers;