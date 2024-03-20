"use client";
import CardComponent from "@/components/CardComponent";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [product, setProduct] = useState({
		id: 1,
		name: "product 1",
		price: 100,
		quantity: 1,
		iamge: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
		description: "this is description",
	});
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<CardComponent
				key={product.id}
				name={product.name}
				price={product.price}
				quantity={product.quantity}
				image={product.iamge}
        description={product.description}
        id={product.id}
			/>
		</main>
	);
}
