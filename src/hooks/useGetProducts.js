import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

	useEffect(() => {
		try {
			async function fetchMyAPI() {
				const response = await axios(API);
				setProducts(response.data);
			};

			fetchMyAPI();
		} catch {
			console.log(error);
		}
	}, []);

    return products;
};

export default useGetProducts;