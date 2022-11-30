import {createSlice} from "@reduxjs/toolkit";
import {
    createTuitThunk,
    deleteTuitThunk,
    findTuitsThunk,
    updateTuitThunk
} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
    "topic": "Space",
    "time": "now",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
    "disliked": false
}

const templateTuit = {
    ...currentUser,
    // currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": "false",
    "replies": "0",
    "retuits": "0",
    "likes": "0",
    "dislikes": "0",
    "disliked": "false"
}

const tuitsSlice = createSlice({
   name: 'tuits',
   initialState,
   extraReducers: {
       [findTuitsThunk.pending]:
           (state) => {
               state.loading = true
               state.tuits = []
           },
       [findTuitsThunk.fulfilled]:
           (state, { payload }) => {
               state.loading = false
               state.tuits = payload
           },
       [findTuitsThunk.rejected]:
           (state) => {
               state.loading = false
           },
       [deleteTuitThunk.fulfilled]:
           (state, { payload }) => {
               state.loading = false
               state.tuits = state.tuits.filter(t => t._id !== payload)
           },
       [createTuitThunk.fulfilled]:
           (state, { payload }) => {
               state.loading = false
               state.tuits.push({...currentUser,  ...payload})
           },
       [updateTuitThunk.fulfilled]: (state, {payload}) => {
           state.loading = false
           const tuitIndex = state.tuits.findIndex((tuit) => tuit._id === payload._id)
           state.tuits[tuitIndex] = {
               ...state.tuits[tuitIndex],
               ...payload
           }
       }
   },

   reducers: {
       deleteTuit(state, action) {
           const index = state
               .findIndex(tuit =>
                              tuit._id === action.payload);
           state.splice(index, 1);
       },
       createTuit(state, action) {
           state.unshift({
                 ...action.payload,
                 ...templateTuit,
                 _id: (new Date()).getTime(),
             })

       }
   }
});

// const tuitsSlice = createSlice({
//    name: 'tuits',
//    initialState: tuits,
//    reducers: {
//        deleteTuit(state, action) {
//            const index = state
//                .findIndex(tuit =>
//                               tuit._id === action.payload);
//            state.splice(index, 1);
//        },
//        createTuit(state, action) {
//            state.unshift({
//                ...action.payload,
//                ...templateTuit,
//                _id: (new Date()).getTime(),
//          })
//        }
//    }
// });

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;