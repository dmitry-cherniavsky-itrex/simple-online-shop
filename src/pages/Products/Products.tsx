import {useEffect, useState} from 'react';

import {ProductCard} from "./components/ProductCard/ProductCard";

import type {TProduct} from "../../types/product";

import {ProductsContainer} from "./Products.styles";

export const Products = () => {
    const [products, setProducts] = useState<TProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    'https://dummyjson.com/products?limit=12&select=title,price,description,thumbnail'
                );

                if (!response.ok) {
                    setError('Something went wrong!');
                    return;
                }

                const data: { products: TProduct[] } = await response.json();
                setProducts(data.products);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unexpected error occurred.');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);


    if (error) {
        return (
            <h3>An error occurred: {error}</h3>
        );
    }

    return (
        <ProductsContainer>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
            )}
        </ProductsContainer>
    );
}