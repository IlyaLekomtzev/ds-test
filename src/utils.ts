export const getDateFromUnix = (dateUnix: number | null) => {
    if (dateUnix === null) return '';

    const date = new Date(Number(dateUnix) * 1000);
    const day = `0${date.getDate()}`;
    const month = `0${date.getMonth() + 1}`;
    const year = date.getFullYear();

    return `${day.substr(-2)}.${month.substr(-2)}.${year}`;
};