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


export const getwalletByid = () => {
  const query = useQuery<Wallet[]>({
    queryKey: ["Wallet"],
    queryFn: async () => {
      const result = await fetch(`http://localhost:8080/wallet/1`);
      const data = await result.json();
      return data.data;
    },
    select: (data) => data,
  });
  return query;
};
export const addproduct = () => {
  const query = useQuery<Wallet[]>({
    queryKey: ["Wallet"],
  });
};

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

