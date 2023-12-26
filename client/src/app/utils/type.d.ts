 interface Product {
    id : string,
    name : string 
    image : string[],
    price : number ,
    quantity : number 
}
  interface Wallet {
    id: string,
    userId: string,
    productId: string
} 
 interface Favorite {
    id: string,
    userId : string,
    productId : string
} 
interface Collection {
  id:        String;
  name:      String;
  brandId:   String;
  creatorId: String;
}

interface Creator {
  id: string,
  fullName: String,
  email:String ,     
  password:String,
  image: String,
  cover:String,
  bio: String,
  brandId: String,
  productId : string,
} 