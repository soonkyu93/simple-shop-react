import { configureStore, createSlice, current } from "@reduxjs/toolkit";

let cartItem = createSlice({
    name: 'cartItem',
    initialState: [],
    reducers: {
        addCount(state, action) {
            let item = state.find(element => element.id === action.payload);
            item.count++;
        },
        removeCount(state, action) {
            let itemIdx = state.findIndex(element => element.id === action.payload);
            state.splice(itemIdx, 1);
        },
        insertItem(state, action) {
            let item = action.payload;
            let itemIndex = state.findIndex(element => element.id === item.id);

            if (itemIndex === -1) {
                state.push({id: item.id, title: item.title, count: 1});
                return;
            }

            state[itemIndex].count++;
        }
    }
});

export let { addCount, removeCount, insertItem } = cartItem.actions

export default configureStore({
    reducer: { 
        cartItem: cartItem.reducer
    }
});