/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import CardComponent from "@/components/CardComponent";
import {
	fetchProducts,
	selectAllProducts,
	selectProductStatus,
} from "@/redux/features/product/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

export default function Home() {
	const dispatch = useDispatch();
	const products = useSelector(selectAllProducts);
	const status = useSelector(selectProductStatus);

	useEffect(() => {
		dispatch(fetchProducts({ limit: 10, offset: 0 }));
	}, []);

	if (status === "pending") {
		return (
			<main className="grid h-screen place-content-center">
				<img
					src="/loading.gif"
					alt="loading"
					width={500}
					height={500}
				/>
			</main>
		);
	}

	return (
		<main className="flex min-h-screen flex-wrap items-center justify-between p-24">
			{/* <CardComponent
				key={product.id}
				name={product.name}
				price={product.price}
				quantity={product.quantity}
				image={product.iamge}
				description={product.description}
				id={product.id}
			/> */}
			{products.length > 0 &&
				products.map((product) => (
					<CardComponent
						key={product.id}
						name={product.title}
						price={product.price}
						quantity={product.quantity}
						image={product.images[0]}
						description={product.description}
						id={product.id}
					/>
				))}
		</main>
	);
}
