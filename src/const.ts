export enum LaunchType {
    Past = 'past',
    Available = 'available',
    Booked = 'booked'
}

export enum ApiRoute {
    Launches = '/launches'
}

export enum AppRoute {
    Main = '/',
    Details = '/launch/:status/:id'
}

export interface ColumnTypes {
    type: LaunchType;
    title: string;
    draggable: boolean;
}

export const columns: ColumnTypes[] = [
    {
        type: LaunchType.Past,
        title: 'Past',
        draggable: false
    },
    {
        type: LaunchType.Available,
        title: 'Available',
        draggable: true
    },
    {
        type: LaunchType.Booked,
        title: 'Booked',
        draggable: true
    }
];