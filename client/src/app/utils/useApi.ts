import { useMutation, useQuery } from "@tanstack/react-query";

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
