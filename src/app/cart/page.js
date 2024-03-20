
/* eslint-disable react-hooks/exhaustive-deps */

"use client";
import ProductCardComponent from "@/components/ProductCardComponent";
import cartSlice, { selectCart } from "@/redux/features/cart/cartSlice";
import React from "react";
import { useSelector } from "react-redux";

export default function page() {


	return (
		<main className="flex min-h-screen flex-col items-center gap-10 p-24">
			<h1 className="text-4xl text-teal-500">Cart</h1>
			<ProductCardComponent />
		</main>
	);
}
