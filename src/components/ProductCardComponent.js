/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ProductCardComponent() {

    

	return (
		<div>
			<a
				href="#"
				class="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<div className="w-10/12 flex">
					<img
						class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
						src="https://www.ione.com.kh/wp-content/uploads/2022/09/1-16.jpg"
						alt=""
					/>
					<div class="flex flex-col justify-between p-4 leading-normal">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Noteworthy technology acquisitions 2021
						</h5>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Here are the biggest enterprise technology
							acquisitions of 2021 so far, in reverse
							chronological order.
						</p>
						<p className="text-red-500 font-bold text-lg">$10</p>
					</div>
				</div>
				<div>
					<p className="text-2xl font-bold ">Quantity</p>
					<div className="flex ">
						<button
							type="button"
							class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
							-
						</button>
						<span className="text-xl font-bold">1</span>
						<button
							type="button"
							class="text-white bg-gradient-to-r ml-2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
							+
						</button>
					</div>
				</div>
			</a>
		</div>
	);
}
