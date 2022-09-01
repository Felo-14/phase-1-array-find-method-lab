// code your solution here
function superbowlWin(record) {
    const result = record.find(value => value.result === "W");
    if (result){
        return result.year
    }
}