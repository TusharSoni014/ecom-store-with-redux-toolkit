import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  return await response.json();
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    state: "idle", //idle, loading, success, failed
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
        //jb fullfilled ho jaega promise toh payload mil jaega
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
export const { loadProducts } = productSlice.actions;
