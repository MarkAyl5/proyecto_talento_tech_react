export type Review = {
    reviewerName: string
    valuation: string
    reviewText: string
}
export type Product = {
    name:string
    image:string
    description:string
    price: number
    category: string
    stock:number
    reviews: Review[]
    id:string
}