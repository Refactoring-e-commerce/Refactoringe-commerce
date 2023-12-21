import { useQuery } from "@tanstack/react-query";

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