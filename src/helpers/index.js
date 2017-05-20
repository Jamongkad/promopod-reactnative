import moment from 'moment';

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatMyDate = (my_date) => {
    return moment.utc(my_date, 'YYYY-MM-DD HH:mm:ss').local().format('MMM d, YYYY');
}

export const formatMyDay = (my_date) => {
    return moment.utc(my_date, 'YYYY-MM-DD HH:mm:ss').local().format('dddd');
}
