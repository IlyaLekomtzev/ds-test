import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { ILaunch } from '../../models/ILaunch';
import { Box, Typography, Breadcrumbs } from '@mui/material';
import { AppRoute } from '../../const';
import { getDateFromUnix } from '../../utils';

const DetailsInfo: FC<ILaunch> = ({ id, name, details, date_unix, ...props }) => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '2rem',
                backgroundColor: 'grey.50',
                borderRadius: '10px'
            }}
        >
            <Breadcrumbs aria-label="breadcrumb">
                <Link to={AppRoute.Main} style={{ color: 'grey' }}>Home</Link>
                <Typography color="text.primary">{name}</Typography>
            </Breadcrumbs>
            <Box
                sx={{
                    width: '100%',
                    paddingTop: '1rem',
                }}
            >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {getDateFromUnix(date_unix)}
                </Typography>
                <Typography variant="h1" color="text.primary" style={{ fontSize: 32 }}>{name}</Typography>
                <Typography component="p" style={{ marginTop: '.5rem' }}>{details}</Typography>
            </Box>
        </Box>
    );
};

export default memo(DetailsInfo);