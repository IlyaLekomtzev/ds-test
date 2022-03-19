import { FC, memo } from 'react';
import cn from 'classnames';
import { Droppable } from 'react-beautiful-dnd';
import { useAppSelector } from '../../hooks/redux';
import { Reducer } from '../../store/store';
import { ColumnTypes } from '../../const';
import { Typography } from '@mui/material';
import { CardLaunch } from '../../components';
import './Column.scss';

interface ColumnPropsTypes {
    column: ColumnTypes;
}

const Column: FC<ColumnPropsTypes> = ({ column }) => {
    const items = useAppSelector((state) => state[Reducer.Launches].items);

    return (
        <div className="column">
            <Typography
                variant="h4"
                component="h2"
                style={{
                    padding: '1rem 0',
                    color: '#fff'
                }}
            >
                {column.title}
            </Typography>
            <Droppable key={column.type} droppableId={column.type} isDropDisabled={!column.draggable}>
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={cn('column__items', {
                            'column__items--is-bragging': snapshot.isDraggingOver
                        })}
                    >
                        {items[column.type] !== undefined && items[column.type].map((item, index) => (
                            <CardLaunch key={item.id} column={column} item={item} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default memo(Column);