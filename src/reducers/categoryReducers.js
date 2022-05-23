const initialState = { shops: [], edit: {} };

const categoryReducers = (state = initialState, { type, payload, payload1 }) => {
    switch (type) {
        case "ADD_SHOPS": return { ...state, shops: [payload, ...state.shops] };

        case "DLT_SHOPS":
            console.log(payload, payload1);
            const filtered0 = payload1.filter((e) => e != payload);
            console.log(filtered0);
            return { ...state, shops: [...filtered0] };

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

        case "CAT_SHOPS":
            console.log(payload, payload1);
            const filtered = payload1.filter((e) => e.category === payload);
            console.log(filtered);
            return { ...state, shops: [...filtered] }

        case "AREA_SHOPS":
            console.log(payload, payload1);
            const filtered1 = payload1.filter((e) => e.area === payload);
            console.log(filtered1);
            return { ...state, shops: [...filtered1] }

        case "STATUS_SHOPS":
            console.log(payload, payload1);
            const filtered2 = payload.filter((e) => e.offDay != payload1);
            console.log(filtered2);
            return { ...state, shops: [...filtered2] }

        case "STATUS1_SHOPS":
            console.log(payload, payload1);
            const filtered3 = payload.filter((e) => e.offDay == payload1);
            console.log(filtered3);
            return { ...state, shops: [...filtered3] }



        default: return state;
    }
}

export default categoryReducers;