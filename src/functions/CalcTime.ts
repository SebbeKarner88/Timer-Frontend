
export const calcTime = (time: number) => {

    const totalMin = Math.floor(time / 60);
    const sec = time % 60;
    const hrs = Math.floor(totalMin / 60);
    const min = totalMin % 60;

    if (hrs < 1 && min < 1) return sec + ' s';
    if (hrs < 1) return min + ' m  :  ' + sec + ' s';
    return hrs + ' h  :  ' + min + ' m  :  ' + sec + ' s';
}