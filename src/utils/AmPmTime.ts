
export const AmPmTime = (value: string) => {
    const timeSplit = value.split(':');
    let hours = parseInt(timeSplit[0]);
    const minutes = timeSplit[1];
    let meridian;

    if (hours > 12) {
        meridian = 'PM';
        hours -= 12;
    } else if (hours < 12) {
        meridian = 'AM';
        if (hours === 0) {
            hours = 12;
        }
    } else {
        meridian = 'PM';
    }

    const formatted = `${hours}:${minutes} ${meridian}`;
    return formatted
}