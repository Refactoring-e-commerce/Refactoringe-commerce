import { useMutation, useQuery } from "@tanstack/react-query";

export const getAllproduct = () => {
  const query = useQuery<Product[]>({
    queryKey: ["product"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/Product/product");
      const data = await result.json();
      return data;
    },
    select: (data) => data,
  });
  return query;
};


const signup = async (user: any) => {
  const response = await fetch("http://localhost:8080/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  console.log(response);
};

export const UserData = () => {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: signup,
  });
};

const signin = async (login: any) => {
  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  });
  console.log(response);
};
export const LoginData = () => {
  return useMutation({
    mutationKey: ["signin"],
    mutationFn: signin,
  });
}; 
export const getallCollectionbyBrand  = () => {
  const query = useQuery<Collection[]>({
    queryKey: ["collection"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/collection/by-brand/1");
      const data = await result.json();
      return data.data;
    },
    select: (data) => data,
  });
  return query;
};



export const getoneBrandProfile = () => {
  const query = useQuery<Brand[]>({
    queryKey: ["Brand"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/brand/getone/1");
      const data = await result.json();
      return data;
    },

  });
  return query;
}; 
// Wallet : 

export const getwalletByid = () => {
  const query = useQuery<Wallet[]>({
    queryKey: ["Wallet"],
    queryFn: async () => {
      const result = await fetch(`http://localhost:8080/wallet/1`);
      const data = await result.json();
      console.log(data)
      return data;
    },
    select: (data) => data,
  });
  return query;
};
const Addprod  = async (productId:string) => {
  const response = await fetch(`http://localhost:8080/wallet/addwallet/1/${productId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({productId:productId,userId:1}),
  });
  console.log(response);
}; 
export const Addwallet =()=>{
  return useMutation({
    mutationKey:["Addprod"],
    mutationFn: Addprod
  })
} 
const DeleteFromwallet = async (productId: string) => {
  const result = await fetch(
    `http://localhost:8080/wallet/delete/1/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return result.json();
};

export const deletewallet = () => {
  return useMutation({
    mutationKey: ["DeleteFromwallet"],
    mutationFn: DeleteFromwallet,
  });
};








// FavoriteList :

export const getFav = () => {
  const query = useQuery<Favorite[]>({
    queryKey: ["Favorite"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/favorite/1");
      const data = await result.json();
      console.log(data)
      return data;
    },

  });
  return query;
};

const Delete = async (productId: string) => {
  const result = await fetch(
    `http://localhost:8080/favorite/delete/1/${productId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return result.json();
};

export const deleteFavoriteProduct = () => {
  return useMutation({
    mutationKey: ["Delete"],
    mutationFn: Delete,
  });
};  

const Addproduct  = async (productId:string) => {
  const response = await fetch(`http://localhost:8080/favorite/add/1/${productId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({productId:productId,userId:1}),
  });
  console.log(response);
}; 
export const Addfav =()=>{
  return useMutation({
    mutationKey:["Addproduct"],
    mutationFn: Addproduct
  })
}

