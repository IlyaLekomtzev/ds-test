import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILaunch } from '../../models/ILaunch';
import { LaunchType } from '../../const';

interface LaunchesState {
    items: {
        [key in LaunchType]: ILaunch[]
    };
    isLoading: boolean;
    isLoaded: boolean;
    error: string;
}

interface setItemsPayloadState {
    key: LaunchType;
    items: ILaunch[];
}

const initialState: LaunchesState = {
    items: {
        [LaunchType.Past]: [],
        [LaunchType.Available]: [],
        [LaunchType.Booked]: [],
    },
    isLoaded: false,
    isLoading: false,
    error: ''
};

export const launchesSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {
        launchesGetting: (state) => {
            state.isLoading = true;
        },
        launchesGettingSuccess: (state) => {
            state.isLoading = false;
            state.isLoaded = true;
        },
        launchesGettingFailure: (state) => {
            state.isLoading = false;
            state.isLoaded = false;
            state.error = 'Не удалось получть запуски';
        },
        setItems: (state, action: PayloadAction<setItemsPayloadState>) => {
            state.items[action.payload.key] = action.payload.items;
        }
    }
});

export default launchesSlice.reducer;