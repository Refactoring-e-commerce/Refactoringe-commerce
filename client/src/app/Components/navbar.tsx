

import Link from "next/link";

interface MyComponentProps {
  // Define the props here if there are any
}

function MyComponent(props: MyComponentProps) {
  return (
    <div className="flex items-stretch justify-between gap-11 max-md:flex-wrap mt-5">
      <div className="flex items-start center justify-between gap-10 px-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-lime-600 text-4xl font-bold self-center whitespace-nowrap my-auto">
          Logo
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-4 px-4 py-3.5 rounded-[300px] border-[0.5px] border-solid border-white border-opacity-50 max-md:pr-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5c79fb03e13b147597049f039dd09f6c2d72734a25e794f5e95c38517e27b2c?"
            className="aspect-square object-contain object-center w-[21px] fill-white overflow-hidden shrink-0 max-w-full"
            alt="Logo"
          />
          <Link
            href="/Search"
            className="text-white text-sm tracking-wide self-center grow whitespace-nowrap my-auto"
          >
            Search
          </Link>
        </div>
        <Link
          href="/Home"
          className="text-green-800 text-base font-semibold self-center my-auto"
        >
          Home
        </Link>
        <br />
        <Link
          href="/Brand"
          className="text-green-800 text-base font-semibold self-center my-auto"
        >
          Brand
        </Link>
        <br />
        <Link
          href="/FavoriteList"
          className="text-green-800 text-base font-semibold self-center my-auto"
        >PersonalCollection
        </Link>
        <Link
          href="/AllProduct"
          className="text-green-800 text-base font-semibold self-center my-auto"
        >
          AllProduct
        </Link>

        <Link
          href="/More"
          className="text-green-800 text-base font-semibold self-center my-auto"
        >
          {" "}
          More
        </Link>
      </div>
      <br />
      <div className="flex items-start gap-2.5 px-5 self-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f82c10f13384df40dd432f70ca57f1214f1fdc4941d8d52ea5a944683cac4b0?"
          className="aspect-[2.71] object-contain object-center w-[57px] overflow-hidden self-center shrink-0 max-w-full my-auto"
          alt="Wallet Icon"
        />
        <Link
          href="/Wallet"
          className="text-white text-base font-semibold tracking-wide whitespace-nowrap justify-center items-stretch self-center grow my-auto px-8 py-2.5 rounded-md border-[0.5px] border-solid border-white max-md:px-5"
        >
          Wallet
        </Link>

        <img
          loading="lazy"
          src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
          className="aspect-square object-contain object-center w-11 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
          alt="Some Image"
        />
      </div>
    </div>
  );
}

export default MyComponent;




// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className=" w-[100%] flex flex-row items-center justify-between py-[26px] px-8 box-border text-left text-[36px] text-red font-roboto ipad:w-[100%] ipad:items-center ipad:justify-between ipad:gap-[1px] phone:w-[100%] ">
//       <div className="w-[100%] shrink-0 flex flex-row items-center justify-between py-0 pr-6 pl-14 box-border pc:w-[100%] pc:pl-10 pc:box-border ipad:w-[100%] phone:w-[100%] phone:items-center phone:justify-between phone:gap-[0px] phone:pl-0 phone:pr-0 phone:box-border">
//         <b className="relative [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
//           Logo
//         </b>
//         <div className="relative bg-[transparent] rounded-[184px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border shrink-0 flex flex-row items-center justify-start border-[1px] border-solid phone:hidden border-white mr-2.5 ml-2.5 ">
//           {/* <input
//             className="[outline:none] font-sf-pro-display text-[14px] items-center px-10 text-white [border:none] w-full h-full [background:transparent] [&_(34:526)]:active:flex-1 pc:flex-1 pc:items-center pc:justify-start pc:pl-10 pc:box-border ipad:w-[100%] ipad:flex-row ipad:items-center ipad:justify-start ipad:pl-[34px] ipad:pr-1.5 ipad:box-border phone:hidden "
//             placeholder="Search Items, Fashion, Collection and Users"
//             type="text"
//             value={searchBarValue}
//             onChange={(event) => setSearchBarValue(event.target.value)}
//           /> */}
//           <img
//             className="absolute  w-[22px] h-[21px] object-cover z-[2] left-[10px] top-[7px] phone:hidden"
//             alt=""
//             src="./src/public/Vector.png"
//           />
//         </div>
//         <div className="w-[510px] h-[19px] flex flex-row items-center justify-between pc:pl-[3px] pc:pr-[3px] pc:box-border ipad:hidden">
//           <Link
//             className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay active:text-lightgray"
//             href="/Home"
//           >
//             Home
//           </Link>
          
//           <Link
//             className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay active:text-lightgray"
//             href="/AllProduct"
//           >
//            AllProduct
//           </Link>
          
//           <div className="relative w-[66.5px] h-[19px]">
//             <Link
//               href="/Explore"
//               className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay"
//             >
//               Explore
//             </Link>
//             <img
//               className="absolute h-[26.32%] w-[13.53%] top-[42.11%] right-[0%] bottom-[31.58%] left-[86.47%] max-w-full overflow-hidden max-h-full object-cover"
//               alt=""
//               src="./src/public/Vector (1).png"
//             />
//           </div>
//           <Link
//             href="/Personal Collection"
//             className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay"
//           >
//             Personal Collection
//           </Link>
//           <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay">
//             Drops
//           </button>
//           <Link
//             href="/Sign Out"
//             className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay"
//           >
//             Sign Out
//           </Link>
//           <div className="relative w-[51px] h-[19px]">
//             <Link
//               href="/Static"
//               className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-base font-semibold font-sf-pro-display text-white text-left inline-block hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:mix-blend-overlay"
//             >
//               More
//             </Link>
//             <img
//               className="absolute h-[26.32%] w-[17.65%] top-[47.37%] right-[0%] bottom-[26.32%] left-[82.35%] max-w-full overflow-hidden max-h-full object-cover"
//               alt=""
//               src="./src/public/Vector (1).png"
//             />
//           </div>
//         </div>
//         <div className="relative w-[197px] h-11">
//           <div className="absolute top-[0px] left-[0px] w-[197px] h-11">
//             <Link
//               href="/Wallet"
//               className="cursor-pointer p-2.5 bg-[transparent] absolute top-[3px] left-[0px] rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[108px] h-[38px] flex flex-row items-center justify-center m-[2PX] border-[0.5px] border-solid border-white active:box-border active:border-[0.5px] active:border-solid active:border-gainsboro-200 pc:pl-0 pc:pr-0 pc:box-border phone:hidden"
//             >
//               <div className="relative text-base tracking-[0.02em] font-semibold font-sf-pro-display text-white text-left hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] active:text-gainsboro-100">
//                 Wallet
//               </div>
//             </Link>
//             <button className="cursor-pointer [border:none] p-0 bg-[transparent]  hidden flex-col items-center justify-between  phone:flex hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))]">
//               <img
//                 className="absolute top-[13px] left-[90px] w-[22px] h-[22px] object-cover  "
//                 alt=""
//                 src="./src/public/Vector.png"
//               />
//             </button>
//             {/* {user.status
//           ===
// "artist" && 
//             <img
//            href="/ArtistPage')}
//               className="absolute top-[0px] left-[128px] rounded w-[60px] h-[60px] object-cover"
//               alt=""
//               src={user.img}
//             /> */}
//           </div>

//           <button className=" bcursor-pointer [border:none] p-0 bg-[transparent] absolute top-[12px] left-[208px] h-5 hidden flex-col items-center justify-between ipad:flex phone:flex hover:[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] ">
//             <img
//               className="relative w-7 h-5 object-cover"
//               alt=""
//               src="./src/public/vector@2x.png"
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

//     // <div>
//     //   <Link href="/AllProduct">AllProduct</Link>;
//     // </div>