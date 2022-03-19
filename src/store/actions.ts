import api from '../services/api';
import { AppDispatch, Reducer, RootState } from './store';
import { launchesSlice } from './slices/launchesSlice';
import { ILaunch } from '../models/ILaunch';
import { ApiRoute, LaunchType } from '../const';

export const getLaunches = () => async (dispatch: AppDispatch) => {
    dispatch(launchesSlice.actions.launchesGetting());

    try {
        const { data } = await api.get<ILaunch[]>(ApiRoute.Launches);

        if (data && data.length) {
            const pastItems = data.filter((item) => !item.upcoming);
            const availableItems = data.filter((item) => item.upcoming);

            dispatch(launchesSlice.actions.setItems({
                key: LaunchType.Past,
                items: pastItems
            }));
            dispatch(launchesSlice.actions.setItems({
                key: LaunchType.Available,
                items: availableItems
            }));
        }

        dispatch(launchesSlice.actions.launchesGettingSuccess());
    } catch (e) {
        dispatch(launchesSlice.actions.launchesGettingFailure());
    }
};

export const changeStatus = (from: LaunchType, to: LaunchType, id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    if (from === to) return;

    if (from === LaunchType.Booked) {
        if (!window.confirm('Подтверждаете удаление брони?')) return;
    }

    const fromItems = [...getState()[Reducer.Launches].items[from]];
    const toItems = [...getState()[Reducer.Launches].items[to]];

    const index = fromItems.findIndex((item) => item.id === id);
    if (index === -1) return;

    const item = fromItems.splice(index, 1)[0];
    dispatch(launchesSlice.actions.setItems({
        key: from,
        items: fromItems
    }));

    toItems.push(item);
    dispatch(launchesSlice.actions.setItems({
        key: to,
        items: toItems
    }));
};