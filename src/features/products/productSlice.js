import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchAllProductsByFilter} from "./productAPI";

const initialState = {
  products:[],
  status: "idle",
};

export const fetchAllProductAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    // console.log(response.data)
    // console.log(response.data)
    return response.data;
  }
);
export const fetchAllProductByFiltersAsync = createAsyncThunk(
  "product/fetchAllProductsByFilter",
  async ({filter,sort}) => {
    const response = await fetchAllProductsByFilter(filter,sort);
    // The value we return becomes the `fulfilled` action payload
    // console.log(response.data)
    // console.log(response.data)
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductByFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
  },
});

export const { increment } = productSlice.actions;

export const selectAllProduct = (state) => state.product.products;

export default productSlice.reducer;
