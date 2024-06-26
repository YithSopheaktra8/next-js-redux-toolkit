import { BASE_URL } from "@/redux/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	status: "idle | pending | succeeded | failed",
	error: null,
};

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async ({ limit, offset }) => {
		const response = await fetch(
			`${BASE_URL}products?limit=${limit}&offset=${offset}`
		);
		const data = await response.json();
		return data;
	}
);

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = "pending";
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

// export actions
export const {} = productSlice.actions;

//export reducer
export default productSlice.reducer;

// export selectors
export const selectAllProducts = (state) => state.products.products;
export const selectProductById = (state, productId) =>
	state.products.products.find((product) => product.id === productId);
export const selectProductStatus = (state) => state.products.status;
export const selectProductError = (state) => state.products.error;
