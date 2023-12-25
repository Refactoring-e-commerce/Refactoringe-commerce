"use client"

// Import necessary modules from Next.js and React
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import axios from "axios";
import { MdEdit } from "react-icons/md";
// import { jwtDecode } from "jwt-decode";
import { getCreator } from "../utils/useApi";

// Define the ArtistPage component
const ArtistPage = () => {
  // Initialize state variables using TypeScript
  const [view, setView] = useState<string | undefined>();
  const [posts, setPosts] = useState<any[]>([]);

  // Get router instance from Next.js
//   const router = useRouter();
const {
  data,
  isLoading,
  isError,
}: { data: any; isLoading: boolean; isError: boolean } = getCreator();

console.log(data);

if (isLoading) {
  return <h1>Loading</h1>;
}

if (isError) {
  return <h1>Error</h1>;
}
 
  // Get user information from local storage using TypeScript
  //   const { Token, id } = JSON.parse(
  //     window.localStorage.getItem("User") || '{"Token": "", "id": ""}'
  //   );
  //   const artist = jwtDecode(Token);

  // Define the useEffect hook for fetching posts
  //   useEffect(() => {
  //     const getPosts = async () => {
  //       try {
  //         // Use Next.js API route or the appropriate API endpoint for fetching posts
  //         const { data } = await axios.get(`/api/post/all/${id}`);
  //         setPosts(data);
  //       } catch (err) {
  //         console.error("Error fetching posts:", err);
  //       }
  //     };
  //     getPosts();
  //   }, [id]);

  // Define the Edit function
  //   const Edit = () => {
  //     setView("edit");
  //   };

  return (
    <div className="flex-col flex relative  jusify-center  ">
      <div className="">
        <div className="flex flex-col items-center">
          <div className=" bg-opacity-50 rounded-[5px]">
            <img className="w-[900px] h-[300px]" src={data.image} />
            <div className="flex  flex-col float-right relative bottom-20 ">
              <button
                onClick={() => setView("edit")}
                className="float-right w-[100px] h-[30px] rounded-[20px] text-white  bg-white bg-opacity-10 flex flex-col-2  "
              >
                <MdEdit /> edit
              </button>
            </div>
            <button
              onClick={() => setView("create")}
              className="float-left w-[100px] h-[30px] rounded-[20px] text-white  bg-white bg-opacity-10 flex flex-col-2  "
            >
              <MdEdit /> Post
            </button>
          </div>
          <div className="relative bottom-20 items-center flex flex-col">
            <img
              className="w-[120px] h-[120px] rounded-full border-2 border-white"
              src={data.image}
            />
            <h1 className="text-xl text-white">
              {data.name} {data.lastName}
            </h1>
          </div>
        </div>

        {/* {view === "edit" && (
          <div>
            {" "}
            <ArtistEdit setview={setView} id={id} artist={artist} />
          </div>
        )}
        {view === "create" && (
          <div>
            <CreatePost setview={setView} user={id} />
          </div>
        )}
      </div> */}
      <div className=" m-4 flex-wrap flex gap-40">
        {/* all photos */}
        <div className=" relative w-[340px] m-4  ">
          <div className=" h-[371p-x] bg-white bg-opacity-10 rounded-[5px]">
            <div>
              <h1 className="p-4 text-white text-xl font-semibold font-['SF Pro Display'] tracking-tight">
                Photos
              </h1>
              <a className=" p-4 left-52 bottom-10 relative text-indigo-500 text-base font-semibold font-['SF Pro Display'] tracking-tight">
                See All Photos
              </a>
            </div>
            <div className="p-4 relative left-1 flex flex-wrap gap-2">
              {posts.slice(0, 8).map((e) => {
                return (
                  <img className="w-[95px] h-[91px] rounded" src={e.img} />
                );
              })}
            </div>
          </div>
          {/* post */}
        </div>
        <div className=" flex flex-col gap-10  ">
          {posts &&
            posts.map((e) => {
              return (
                <div className=" flex flex-col items-center   ">
                  <div className=" relative right-16   flex flex-col   gap-10">
                    <div className="flex-wrap flex gap-3">
                      <img
                        className="w-[63px] h-[63px] rounded-full"
                        src={data.image}
                      />
                      <h1 className="text-white text-xl font-semibold font-['SF Pro Display']">
                        {data.name} {data.lastName}
                      </h1>
                      <div className="text-white text-opacity-50 text-base font-normal font-['SF Pro Display']">
                        4m
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col items-center gap-10">
                    <div className="text-white text-base font-medium font-['SF Pro Display']">
                      {e.title}
                    </div>
                    <div className="text-white text-base font-medium font-['SF Pro Display']">
                      {e.description}
                    </div>
                    <img
                      className="rounded-[5px] h-[450px] w-[500px]"
                      src={e.img}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
    </div>
  );
};


// Export the component
export default ArtistPage;
