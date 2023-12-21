import { useQuery } from "@tanstack/react-query";


export const getoneBrandProfile = () => {
    const query = useQuery<Brand[]>({
      queryKey: ["Brand"],
      queryFn: async () => {
        const result = await fetch("http://localhost:8080/brand/getone/2");
        const data = await result.json();
        return data.data;
      },
      select: (data) => data,
    });
    return query;
  };