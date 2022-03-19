import { FC, useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeStatus } from '../../store/actions';
import { Reducer } from '../../store/store';
import { Column } from '../../components';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { columns } from '../../const';
import './Board.scss';

const Board: FC = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state[Reducer.Launches].isLoading);

    const onDragEnd = useCallback((result: any) => {
        const { destination, source, draggableId } = result;
        dispatch(changeStatus(source.droppableId, destination.droppableId, draggableId));
    }, [dispatch]);

    const renderColumns = () => {
        if (isLoading) {
            return Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <Box key={index} sx={{ width: '30%' }}>
                            <Skeleton
                                sx={{ bgcolor: 'grey.50', opacity: '.5' }}
                                variant="text"
                                width={'50%'}
                                height={75}
                                animation="wave"
                            />
                            <Skeleton
                                sx={{ bgcolor: 'grey.50', opacity: '.5', borderRadius: '10px' }}
                                variant="rectangular"
                                height={'70vh'}
                                animation="wave"
                            />
                        </Box>
                    ));
        }

        return (
            <DragDropContext onDragEnd={(result => onDragEnd(result))}>
                {columns.map((column) => (
                    <Column key={column.type} column={column} />
                ))}
            </DragDropContext>
        );
    };

    return (
        <div className="board">
            <div className="board__columns">
                {renderColumns()}
            </div>
        </div>
    );
};

export default Board;