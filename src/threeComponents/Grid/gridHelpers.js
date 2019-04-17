import { List } from "immutable";

export const createGrid = ({ shape: [x, y] }) => {
  const grid = List(new Array(x)).map(() => List(new Array(y)));
  return grid;
};
