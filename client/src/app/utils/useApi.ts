
import { useQuery } from "@tanstack/react-query";


export const getAllproduct = () => {
    const query = useQuery<Product[]>({
        queryKey: ["product"],
        queryFn: async () => {
      const result = await fetch("http://localhost:8080/Product/product");
      
      const data = await result.json();
      return data;
    },
  });
  return query;
};

// export const getData = () => {
//     const query = useQuery<Card[]>({
//       queryKey: ["cards"],
//       queryFn: async () => {
//         const result = await fetch("http://localhost:3000/cards");
//         const data = await result.json();
//         return data;
//       },
//       select: (data) => data,
//     });
//     return query;
//   };
