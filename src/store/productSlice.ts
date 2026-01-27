import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { IProduct, IProductState } from "./types";

export const fetchProducts = createAsyncThunk<
  IProduct[],
  undefined,
  { rejectValue: string }
>("products/fetchProducts", async function (_, { rejectWithValue }) {
  const res = await fetch("./products.json");
  if (!res.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await res.json();
  return data;
});

const initialState: IProductState = {
  products: [],
  filtered: [],
  filterByCategory: [],
  filterByPrice: [],
  cart: [],
  isLoading: false,
  isError: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortProductsPrice: (state) => {
      state.products = state.filtered.sort((a, b) => a.price - b.price);
    },
    sortProductsCategory: (state) => {
      state.products = state.filtered.sort((a, b) =>
        a.category.localeCompare(b.category),
      );
    },
    sortProductsName: (state) => {
      state.filtered.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.products = action.payload;
          state.filtered = action.payload;
          state.isLoading = false;
          state.isError = false;
        },
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { sortProductsPrice, sortProductsCategory, sortProductsName } = productSlice.actions;

export default productSlice.reducer;
