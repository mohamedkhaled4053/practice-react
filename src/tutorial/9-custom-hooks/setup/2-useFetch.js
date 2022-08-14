import { useState, useEffect } from 'react';



export function useFetch(url) {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
  
    const getProducts = async () => {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    }
  
    useEffect(() => {
      getProducts()
    }, [url])
  
    return {products, loading}
  }