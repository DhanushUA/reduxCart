import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllproducts = createAsyncThunk(
  "products/getAllproducts",
  async () => {
    const result = await axios.get("https://dummyjson.com/products");
    console.log(result.data.products);
    return result.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: true,
    allproducts: [],
    dummyAllproducts: [],
    error: "",
  },
  reducers: {
    serachProduct: (state, action) => {
      // const searchTerm = (action.payload || "").toLowerCase();
      state.allproducts = state.dummyAllproducts.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllproducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allproducts = action.payload
        state.dummyAllproducts = action.payload
        state.error = "";
      })
      builder.addCase(getAllproducts.pending, (state, action) => {
        state.loading = true;
        state.allproducts = [];
        state.dummyAllproducts = action.payload;
        state.error = "";
      })
      builder.addCase(getAllproducts.rejected, (state) => {
        state.loading = false;
        state.allproducts = [];
        state.dummyAllproducts = [];
        state.error = "API Call Failed";
      });
  },
});

export const { serachProduct } = productSlice.actions;

export default productSlice.reducer;
