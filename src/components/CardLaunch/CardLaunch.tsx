import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, Typography } from '@mui/material';
import { getDateFromUnix } from '../../utils';
import { ILaunch } from '../../models/ILaunch';
import { ColumnTypes } from '../../const';

interface CardLaunchPropsTypes {
    index: number;
    item: ILaunch;
    column: ColumnTypes;
}

const CardLaunch: FC<CardLaunchPropsTypes> = ({ column, item, index }) => {
    return (
        <Draggable draggableId={item.id} index={index} isDragDisabled={!column.draggable}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                        ...provided.draggableProps.style
                    }}
                >
                    <Link to={`/launch/${column.type}/${item.id}`}>
                        <Card>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {getDateFromUnix(item.date_unix)}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {item.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            )}
        </Draggable>
    );
};

export default memo(CardLaunch);