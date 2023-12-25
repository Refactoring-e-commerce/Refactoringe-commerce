import { useMutation, useQuery } from "@tanstack/react-query";

export const signup = async (user: any) => {
  const response = await fetch("http://localhost:8080/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response
};

export const UserData = () => {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: signup,
  });
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

// ===========================================================================

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
      const result = await fetch("http://localhost:8080/brand/by-brand/1");
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
