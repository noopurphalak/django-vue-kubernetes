import { get } from "./axios";

export const getMessage = async () => {
  const response = await get("message/");
  return response;
};
