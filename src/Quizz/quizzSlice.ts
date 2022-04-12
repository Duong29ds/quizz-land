import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQuizz } from "./services";
import { Quizz } from "./interface";

export const getQuizzByCategory = createAsyncThunk(
  "quizz/getByCategory",
  async (category: number) => {
    const response = await getQuizz({ category });
    return { ...response, category };
  }
);

interface initState {
  isLoading: boolean;
  category: number;
  categoryName: string;
  quizzes: Array<Quizz>;
  error: string;
  isEnd: boolean;
}

const initialState: initState = {
  isLoading: false,
  category: 0,
  categoryName: "",
  quizzes: [],
  error: "",
  isEnd: false,
};

const quizzSlice = createSlice({
  name: "quizz",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setCategoryName(state, action) {
      state.categoryName = action.payload;
    },
    resetQuizz(state) {
      state.quizzes = [];
      state.category = 0;
    },
    setEndQuizz(state) {
      state.isEnd = !state.isEnd;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuizzByCategory.pending, (state) => {
      state.quizzes = [];
      state.isLoading = true;
    });
    builder.addCase(getQuizzByCategory.rejected, (state) => {
      state.error = "Can not fetch quizz!!";
    });
    builder.addCase(getQuizzByCategory.fulfilled, (state, action) => {
      state.category = action.payload.category;
      state.quizzes = action.payload.results;
      state.isLoading = false;
    });
  },
});

export const { setCategory, setCategoryName, resetQuizz, setEndQuizz } =
  quizzSlice.actions;

export default quizzSlice;
