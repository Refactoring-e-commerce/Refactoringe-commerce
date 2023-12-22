
import { useQuery } from "@tanstack/react-query";

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
        return data.data;
      },
      select: (data) => data,
    });
    return query;
  };


  export const getallCollectionbyBrand =()=>{
    const query = useQuery<Collection[]>({
      queryKey: ["collection"],
      queryFn: async () => {
        const result = await fetch("http://localhost:8080/collection/by-brand/1");
        const data = await result.json();
        // console.log(data)
        return data.data;
      },
      select: (data) => data,
    });
    return query;
  };

  