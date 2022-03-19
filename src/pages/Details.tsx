import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { Reducer } from '../store/store';
import { AppRoute, LaunchType } from '../const';
import { DetailsInfo } from '../components';
import Skeleton from '@mui/material/Skeleton';

const Details: FC = () => {
    const { status, id } = useParams();

    const item = useAppSelector((state) => state[Reducer.Launches].items[status as LaunchType].find((el) => el.id === id));
    const isLoaded = useAppSelector((state) => state[Reducer.Launches].isLoaded);

    if (!item && isLoaded) {
        return <Navigate to={AppRoute.Main} />;
    }

    return (
        <section className="page">
            {!isLoaded || !item ? (
                <Skeleton
                    sx={{ bgcolor: 'grey.50', opacity: '.5', borderRadius: '10px' }}
                    variant="rectangular"
                    height={'30vh'}
                    animation="wave"
                />
            ) : (
                <DetailsInfo {...item} />
            )}
        </section>
    );
};

export default Details;