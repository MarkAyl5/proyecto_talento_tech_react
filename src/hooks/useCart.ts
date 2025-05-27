import ProductsConnection from "../Api/productsConnection"
import { useState, useMemo, useEffect } from "react"
import type { CartItem, Product } from "../types"

export const useCart = () =>{

    const initialCart = () : CartItem[] =>{
        const localStorageCart = localStorage.getItem("cart")
        
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const {products} = ProductsConnection()

    const [data] = useState(products)
    const [cart, setCart] = useState(initialCart)
    const MIN_ITEMS = 1
    const MAX_ITEMS = 5

    useEffect(()=>{
            localStorage.setItem('cart', JSON.stringify(cart))
        }, [cart])
    
    function addToCart(item : Product){
        const itemExist = cart.findIndex((product) => product.id === item.id)

        if (itemExist >= 0 ) {
            const updatedCart = [...cart]
            updatedCart[itemExist].quantity++
            setCart(updatedCart)
        }else{
            const newItem : CartItem = {...item, quantity: 1}
            setCart([...cart, newItem])
        }
    }
    
    function removeFromCart(id : Product["id"]) {
        setCart(prevCart => prevCart.filter((item) => item.id !== id))
    }

    function increaseQuantity(id : Product["id"]){
        const updatedCart = cart.map((item)=>{
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return{
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function decreaseQuantity(id : Product["id"]){
        const updatedCart = cart.map((item)=>{
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return{
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function emptyCart(){
            setCart([])
    }

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return{
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        emptyCart, 
        isEmpty,
        cartTotal

    }

}