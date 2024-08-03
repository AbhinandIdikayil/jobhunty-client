function formatNumberInLakhs(value:number) {
    if (value >= 10000000) {
        return `${(value / 10000000).toFixed(1)} crore`;
    } else if (value >= 100000) {
        return `${(value / 100000).toFixed(1)} lakh`;
    } else {
        return value.toLocaleString('en-IN'); // for values less than 1 lakh
    }
}

export function formatSalary(start:number, end:number) {
    const startFormatted = formatNumberInLakhs(start).replace(/\.0$/, ''); // Remove decimal point if it's .0
    const endFormatted = formatNumberInLakhs(end).replace(/\.0$/, ''); // Remove decimal point if it's .0
    
    return `${startFormatted} - ${endFormatted}`;
}