export const houseRobber = (houses: number[]) => {
  let currentMax: number = 0;
  let prevMax: number = 0;

  for(let i = 0; i < houses.length; i++) {
    let currentHouse: number = houses[i];
    let newMax: number = Math.max(currentMax, prevMax + currentHouse)
    prevMax = currentMax;
    currentMax = newMax;
  }

  return currentMax;
};