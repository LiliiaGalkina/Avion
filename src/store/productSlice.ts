import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { IProduct, IProductState } from "./types";
import { prices } from "./types";

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
  filterByCategory: "",
  filterByPrice: 0,
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
    setSelectedCategory: (state, action) => {
      state.filterByCategory = action.payload;
    },
    setSelectedPrice: (state, action) => {
      state.filterByPrice = action.payload;
    },
    filterProducts: (state) => {
      let priceRange, minRange:number, maxRange:number;
      if (state.filterByPrice > 0) {
        priceRange = prices
          .filter((price) => price.includes(+state.filterByPrice))
          .flat();
          if(priceRange.length > 1){
            minRange = priceRange[0];
            maxRange = priceRange[1];
          } else {
            maxRange = priceRange[0];
          }
      }
        if (state.filterByCategory !== "" && state.filterByPrice === 0) {
          state.filtered = state.products.filter((product) =>
            state.filterByCategory.includes(product.category)
          );
        } else if (state.filterByCategory === "" && state.filterByPrice > 0) {
            state.filtered = state.products.filter((product) =>
            priceRange.length > 1 ? product.price >= minRange && product.price <= maxRange : product.price >= maxRange,
          );
        } else if (state.filterByCategory !== "" && state.filterByPrice > 0) {
          state.filtered = state.products.filter((product) =>
            state.filterByCategory.includes(product.category) &&
            (priceRange.length > 1
              ? product.price >= minRange && product.price <= maxRange
              : product.price >= maxRange)
          );
        } else {
          state.filtered = state.products;
        }
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

export const {
  sortProductsPrice,
  sortProductsCategory,
  sortProductsName,
  setSelectedCategory,
  setSelectedPrice,
  filterProducts,
} = productSlice.actions;

export default productSlice.reducer;
