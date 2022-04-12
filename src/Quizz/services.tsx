import axiosClient from "../common/api";
import { QuizzParams, QuizzList } from "./interface";

export const getQuizz = async (params: QuizzParams): Promise<QuizzList> => {
  const response: QuizzList = await axiosClient.get("/", {
    params: {
      ...params,
      amount: 4,
      type: "multiple",
    },
  });
  return response;
};
