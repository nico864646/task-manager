export function getDate(): string {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let mounth = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return day + '/' + mounth + '/' + year
}