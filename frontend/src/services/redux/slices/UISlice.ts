import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IRState {
    story: boolean
    rubricator: boolean
}

const initialState: IRState = {
    story: false,
    rubricator: false
}

const UISlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        changeStory(state) {
            state.story = !state.story
        },
        changeRubricator(state) {
            state.rubricator = !state.rubricator
        },
    }
})

export const UIReducer = UISlice.reducer
export const {changeStory, changeRubricator} = UISlice.actions
