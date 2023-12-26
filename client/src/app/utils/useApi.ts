import { useMutation, useQuery } from "@tanstack/react-query";
import { Mutation } from "react-query";

export const signup = async (user: any) => {
  try {
    const response = await fetch("http://localhost:8080/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const signin = async (login: any) => {
  try {
    const response = await fetch("http://localhost:8080/users/signin", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    return response;
  } catch (err) {
    console.log("Unexpected Error:", err);
  }
};

export const forgetPassword = async (data: any) => {
  try {
    const response = await fetch("http://localhost:8080/users/forgetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (err) {
    console.log("Unexpected Error:", err);
  }
};
export const verifyCode = async (data: any) => {
  try {
    const response = await fetch("http://localhost:8080/users/verifyCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (err) {
    console.log("Unexpected Error:", err);
  }
};

export const updatePassword = async (data: any) => {
  try {
    const response = await fetch("http://localhost:8080/users/updatePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (err) {
    console.log("Unexpected Error:", err);
  }
};

// =========================================================================== Ahmed

export const getAllproduct = () => {
  const query = useQuery<Product[]>({
    queryKey: ["Product"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/Product/product/");
      const data = await result.json();

      return data;
    },
  });
  return query;
};

export const filterbyPrice = () => {
  const query = useQuery<Product[]>({
    queryKey: ["Product"],
    queryFn: async () => {
      const result = await fetch(
        "http://localhost:8080/Product/product/:minprice/:maxprice"
      );
      const data = await result.json();

      return data;
    },
  });
  return query;
};

export const getProductsByCategory = (categoryy: string) => {
  const query = useMutation({
    mutationKey: [categoryy],
    mutationFn: async (category: string) => {
      console.log(categoryy);
      const result = await fetch(`http://localhost:8080/Product/${category}`);
      const data = await result.json();
      return data;
    },
    onSuccess: (data) => {
      return data;
    },
  });
  return query;
};

export const getOneProductByReference = () => {
  const query = useQuery<Product[]>({
    queryKey: ["Product"],
    queryFn: async () => {
      const result = await fetch(
        "http://localhost:8080/Product/product/:reference"
      );
      const data = await result.json();
      return data;
    },
  });
  return query;
};

export const createProduct = () => {
  const query = useQuery<Product[]>({
    queryKey: ["Product"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/Product/create");
      const data = await result.json();
      return data;
    },
  });
  return query;
};

export const updateProduct = () => {
  const query = useQuery<Product[]>({
    queryKey: ["Product"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/Product/update/:id");
      const data = await result.json();
      return data;
    },
  });
  return query;
};

export const deleteProduct = () => {
  const query = useQuery<Product[]>({
    queryKey: ["Product"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/Product/:id");
      const data = await result.json();
      return data;
    },
  });
  return query;
};

export const getOneCreator = () => {
  const query = useQuery<Creator[]>({
    queryKey: ["Creator"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/Creator/creator/:id");
      const data = await result.json();
      return data;
    },
  });
  return query;
};

export const getAllCreator = () => {
  const query = useQuery<Creator[]>({
    queryKey: ["Creator"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/Creator/creators/");
      const data = await result.json();
      return data;
    },
  });
  return query;
};

// =========================================================================== Raja
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
export const getallCollectionbyBrand = () => {
  const query = useQuery<Collection[]>({
    queryKey: ["collection"],
    queryFn: async () => {
      const result = await fetch("http://localhost:8080/collection/by-brand/1");
      const data = await result.json();
      return data.data;
    },
  });
  return query;
};

// =========================================================================== Wided
// Wallet :

export const getwalletByid = () => {
  const query = useQuery<Wallet[]>({
    queryKey: ["Wallet"],
    queryFn: async () => {
      const result = await fetch(`http://localhost:8080/wallet/1`);
      const data = await result.json();
      console.log(data);
      return data;
    },
    select: (data) => data,
  });
  return query;
};
const Addprod = async (productId: string) => {
  const response = await fetch(
    `http://localhost:8080/wallet/addwallet/1/${productId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: productId, userId: 1 }),
    }
  );
  console.log(response);
};

export const Addwallet = () => {
  return useMutation({
    mutationKey: ["Addprod"],
    mutationFn: Addprod,
  });
};
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
      console.log(data);
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

const Addproduct = async (productId: string) => {
  const response = await fetch(
    `http://localhost:8080/favorite/add/1/${productId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: productId, userId: 1 }),
    }
  );
  console.log(response);
};
export const Addfav = () => {
  return useMutation({
    mutationKey: ["Addproduct"],
    mutationFn: Addproduct,
  });
};
// =========================================================================== Nesrine
