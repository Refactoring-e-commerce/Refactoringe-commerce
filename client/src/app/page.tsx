import Cookies from "universal-cookie";

const Home = () => {
  const cookies = new Cookies();

  const token = cookies.get("access_token");
  // console.log(token.value);
  return <div>Home</div>;
};

export default Home;
