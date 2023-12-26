import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import TopButtonHome from "./Components/TopButtonHome";
import Box1 from "./Components/Boxes1Home";
// import { Toaster, toast } from "sonner";
import { BrandCarousel } from "./Components/BrandCarousel";
import { AboutUsHome } from "./Components/AboutUsHome";
import { ItemIncomingHome } from "./Components/ItemIncomingHome";

// const UpCommingCreators = () => {
//   const [creators, setCreators] = useState([]);
//   // const [follow, setFollow] = useState(false);
//   const [iduser, setIduser] = useState("");
//   const [idCreator, setIdCreator] = useState("");
//   const { currentUser } = useContext(userContext);

//   const getCreators = async () => {
//     try {
//       let Creatordata = await axios.get(`http://localhost:8080/creators`);
//       setCreators(Creatordata.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // console.log(currentUser);

//   // Add New Follower to the Creator:
//   const newFollow = async () => {
//     try {
//       if (currentUser) {
//         let getId = await axios.get(
//           `http://localhost:8080/users/${currentUser.email}`
//         );
//         // console.log(getId.data.id);
//         setIduser(getId.data.id);
//         await axios.post(
//           `http://localhost:8080/followingCreator/${idCreator}/${iduser}`
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const removeFollow = async () => {
//     try {
//       if (currentUser) {
//         let getId = await axios.get(
//           `http://localhost:8080/users/${currentUser.email}`
//         );
//         setIduser(getId.data.id);
//         await axios.delete(
//           `http://localhost:8080/followingCreator/${idCreator}/${iduser}`
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getCreators();
//   }, []);

//   return (
//     <div>
//       <div className="flex flex-col lg-flex-row justify-center items-center mt-20 text-5 text-center">
//         <h1 className="text-[#734532] text-3xl font-bold font-['Poppins'] mb-3">
//           {" "}
//           UpComming Creators
//         </h1>
//         <div className="flex flex-col  text-slate-600 m-6 text-[#3b3b3b] w-[600px]">
//           Unveil the future of fashion with our upcoming creators, where fresh
//           perspectives and boundless creativity redefine style.
//         </div>
//       </div>
//       <div className="grid grid-cols-3 lg:grid-row mb-12 w-86">
//         {creators.map((artists, i) => {
//           // console.log(artists);
//           return (
//             <CardCreator
//               key={artists.id}
//               {...artists}
//               new={newFollow}
//               remove={removeFollow}
//               setIduser={setIduser}
//               setIdCreator={setIdCreator}
//               currentUser={currentUser}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// const CardCreator = (props) => {
//   // console.log(props);
//   const [follow, setFollow] = useState(false);
//   return (
//     !props.status && (
//       <div
//         key={props.id}
//         className="md:max-w-sm lg:max- xl:max md:mx-auto lg:mx-auto xl:mx-auto mt-12 bg-[#ffffff97] shadow-xl rounded-lg text-gray-900"
//       >
//         <div className="rounded-t-lg h-38 overflow-hidden">
//           <img
//             className="object-cover object-top w-full h-48"
//             src={props.bgImage}
//             alt="Image Not Found"
//           />
//         </div>

//         <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-[#5a57559f] rounded-full overflow-hidden">
//           <img
//             className="object-cover object-center h-full w-60"
//             src={props.pfImage}
//             alt="Image Not Found"
//           />
//         </div>

//         <div className="text-center mt-2 relative flex flex-col  items-center">
//           <span className="flex items-center gap-2 ">
//             <h2 className="font-semibold">{props.fullName} </h2>
//             <MdVerified className="  text-[#4869d5] " />
//           </span>
//           <p className="text-[#7e7e7e] ">{props.bio}</p>
//         </div>

//         <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
//           <li className="flex flex-col items-center justify-around">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//             </svg>
//             <div>2k</div>
//           </li>
//           <li className="flex flex-col items-center justify-between">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
//             </svg>
//             <div>10k</div>
//           </li>
//           <li className="flex flex-col items-center justify-around">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
//             </svg>
//             <div>15</div>
//           </li>
//         </ul>

//         <div className="p-4 border-t mx-8 mt-2">
//           {!follow && (
//             <button
//               onClick={() => {
//                 !props.currentUser
//                   ? toast.error("You Need Login First")
//                   : props.setIdCreator(props.id),
//                   props.new(),
//                   props.currentUser ? setFollow(true) : "";
//               }}
//               className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
//             >
//               {" "}
//               Follow <Toaster richColors />
//             </button>
//           )}
//           {follow && (
//             <button
//               onClick={() => {
//                 props.setIdCreator(props.id), props.remove(), setFollow(false);
//               }}
//               className="w-1/2 block mx-auto rounded-full bg-[#09080876] hover:shadow-lg font-semibold text-white px-6 py-2"
//             >
//               Unfollow
//             </button>
//           )}
//         </div>
//       </div>
//     )
//   );
// };
// const UpCommingBrands = () => {
//   const [brands, setBrands] = useState([]);
//   const [iduser, setIduser] = useState("");
//   const [idBrand, setIdBrand] = useState("");
//   const { currentUser } = useContext(userContext);

//   const getBrands = async () => {
//     try {
//       let Creatordata = await axios.get(`http://localhost:8080/brands`);
//       setBrands(Creatordata.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Add New Follower to the Brand:
//   const newFollowBrand = async () => {
//     try {
//       if (currentUser) {
//         let getId = await axios.get(
//           `http://localhost:8080/users/${currentUser.email}`
//         );
//         // console.log(getId.data.id);
//         setIduser(getId.data.id);
//         await axios.post(
//           `http://localhost:8080/followingBrand/${idBrand}/${iduser}`
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const removeFollowBrand = async () => {
//     try {
//       if (currentUser) {
//         let getId = await axios.get(
//           `http://localhost:8080/users/${currentUser.email}`
//         );
//         setIduser(getId.data.id);
//         await axios.delete(
//           `http://localhost:8080/followingBrand/${idBrand}/${iduser}`
//         );
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getBrands();
//   }, []);
//   return (
//     <div>
//       <div className="flex flex-col lg-flex-row justify-center items-center mt-20 text-5 text-center">
//         <h1 className="text-[#734532] text-3xl font-bold font-['Poppins'] mb-3">
//           {" "}
//           UpComming Brands
//         </h1>
//         <div className="flex flex-col   m-6 text-[#3b3b3b] w-[600px]">
//           Explore the forefront of luxury with our upcoming brands, where
//           innovation meets sophistication, setting new standards for
//           contemporary elegance.
//         </div>
//       </div>
//       <div className="grid grid-cols-3 lg:grid-row mb-12 w-86">
//         {brands.map((brand, i) => {
//           // console.log(brand);
//           return (
//             <CardBrands
//               key={brand.id}
//               {...brand}
//               new={newFollowBrand}
//               remove={removeFollowBrand}
//               setIduser={setIduser}
//               setIdBrand={setIdBrand}
//               currentUser={currentUser}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// const CardBrands = (props) => {
//   const [follow, setFollow] = useState(false);

//   return (
//     !props.status && (
//       <div
//         key={props.id}
//         className="md:max-w-sm lg:max- xl:max md:mx-auto lg:mx-auto xl:mx-auto mt-12 bg-[#ffffff97] shadow-xl rounded-lg text-gray-900"
//       >
//         <div className="rounded-t-lg h-38 overflow-hidden">
//           <img
//             className="object-cover object-top w-full h-48"
//             src={props.bgImage}
//             alt="Image Not Found"
//           />
//         </div>

//         <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-[#5a57559f] rounded-full overflow-hidden">
//           <img
//             className="object-cover object-center h-full w-60"
//             src={props.brandImage}
//             alt="Image Not Found"
//           />
//         </div>

//         <div className="text-center mt-2 relative flex flex-col  items-center">
//           <span className="flex items-center gap-2 ">
//             <h2 className="font-semibold">{props.brandName} </h2>
//             <MdVerified className="  text-[#4869d5] " />
//           </span>
//           {/* <p className="text-[#7e7e7e] ">{props.bio}</p> */}
//         </div>

//         <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
//           <li className="flex flex-col items-center justify-around">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//             </svg>
//             <div>322k</div>
//           </li>
//           <li className="flex flex-col items-center justify-between">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
//             </svg>
//             <div>8M</div>
//           </li>
//           <li className="flex flex-col items-center justify-around">
//             <svg
//               className="w-4 fill-current text-[#2c2420b5]"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
//             </svg>
//             <div>15</div>
//           </li>
//         </ul>

//         <div className="p-4 border-t mx-8 mt-2">
//           {!follow && (
//             <button
//               onClick={() => {
//                 !props.currentUser
//                   ? toast.error(" You Need To Login First")
//                   : props.setIdBrand(props.id),
//                   props.new(),
//                   props.currentUser ? setFollow(true) : "";
//               }}
//               className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
//             >
//               {" "}
//               Follow <Toaster richColors />{" "}
//             </button>
//           )}
//           {follow && (
//             <button
//               onClick={() => {
//                 props.setIdBrand(props.id), props.remove(), setFollow(false);
//               }}
//               className="w-1/2 block mx-auto rounded-full bg-[#09080876] hover:shadow-lg font-semibold text-white px-6 py-2"
//             >
//               Unfollow
//             </button>
//           )}
//         </div>
//       </div>
//     )
//   );
// };
// const Quetions = () => {
//   const allLabels = [
//     {
//       oneLabel: "Describe Your Experience",
//     },
//     {
//       oneLabel: "Your Thoughts Matter",
//     },
//   ];

//   const SecondLabel = [
//     {
//       oneLabel: "Let Us Know Your Insights",
//     },
//     {
//       oneLabel: "Describe Your Interaction",
//     },
//     {
//       oneLabel: "Detail Your Feedback",
//     },
//   ];

//   return (
//     <div className="flex flex-col lg-flex-row justify-center items-center">
//       <h1 className="text-[#734532] font-['Poppins'] mb-3 mt-20 text-4xl font-extrabold text-center">
//         Frequently Asked <br />
//         Quetion{" "}
//       </h1>
//       <p className="text-[#3b3b3b] m-6 text-center w-[600px]">
//         Get the answers you need quickly and effortlessly with our Frequently
//         Asked Questions—your key to a smooth and informed{" "}
//         <strong>FancyMama</strong> experience.
//       </p>
//       <div className="flex items-center  justify-around flex-col gap-6 p-6 pt-8 mb-6 bg-[#6e574058]">
//         <p className="text-[#734532] font-bold">Wanna Ask Something?</p>

//         <div className="flex gap-4 flex-col lg:flex-row">
//           <div className="flex flex-col w-96  ">
//             {allLabels.map((holder, i) => {
//               return <InputQuetions key={i} {...holder} />;
//             })}
//           </div>
//           <div className="flex flex-col  w-96  ">
//             {SecondLabel.map((holder, i) => {
//               return <InputQuetions key={i} {...holder} />;
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const InputQuetions = ({ oneLabel }) => {
//   const [label, setLabel] = useState(false);
//   // console.log(oneLabel);

//   return (
//     <div className="flex flex-col">
//       <label
//         className={`  ${
//           label ? "translate-y-0" : "translate-y-10"
//         } font-semibold transition-all`}
//       >
//         {oneLabel}
//       </label>
//       <input
//         type="text"
//         onClick={() => {
//           setLabel(true);
//         }}
//         onBlur={() => setLabel(false)}
//         className="opacity-50  border-b-2 bg-transparent border-solid border-stone-600 outline-none p-2"
//       />
//     </div>
//   );
// };

const Home = () => {
  return (
    <div className="flex flex-col justify-center   ">

      <div className=" relative flex  flex-col items-center">
        <video
          autoPlay={true}
          loop={true}
          // controls
          muted={true}
          className="fixed top-0 brightness-75  z-[-1] h-full"
          src="https://images.puma.com/video/fetch/q_auto/https://videos.puma.net/videos/fn/%7Eregional%7EEEA%7Eothers%7E23AW_SP_Fenty-Creeper_Rihanna_1440x500_15s.mp4"
        ></video>
        <Box1 />
      </div>

      <BrandCarousel />
      <AboutUsHome />
      <ItemIncomingHome />
      {/*
      {UpCommingCreators()}
      {UpCommingBrands()}
      {Quetions()}  */}
      <TopButtonHome />
  
    </div>
  );
};

export default Home;
