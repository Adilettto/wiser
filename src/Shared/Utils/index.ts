import { IUser } from "../Types";

export const getFullName = (user: IUser) => {
  return user.last_name + " " + user.first_name;
}