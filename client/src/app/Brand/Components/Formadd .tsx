"use client";


import React, { useState } from "react";
import {
  PostNewCollection,
  getCreatorsByBrand,
  getallCollectionbyBrand,
  PostNewProduct,
} from "../../utils/useApi";
import {imageDb} from "../../firebase.config"
import { getDownloadURL, ref, uploadBytes ,uploadBytesResumable} from 'firebase/storage'
import { v4  } from 'uuid'

const Formadd = () => {
  //  new collection
  const [nameCollection, setNameCollection] = useState("");
  const [creatorId, setCreatorId] = useState("");

  // new product
  const [nameProduct, setNameProduct] = useState("");
  const [imageProduct, setImageProduct] = useState([])
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [reference, setReference] = useState("");
  const [status, setStatus] = useState(true);
  const [imageUrl,setImageUrl]=useState([])
  const [collectionId, setCollectionId] = useState("");

  console.log(nameProduct);
  console.log(imageProduct);
  console.log(description);
  console.log(price);
  console.log(category);
  console.log(quantity);
  console.log(reference);
  console.log(status);
  console.log(collectionId);

  const {
    data: creatorData,
    isLoading: creatorLoading,
    isError: creatorError,
  }: { data: any; isLoading: boolean; isError: boolean } = getCreatorsByBrand();
  const {
    data: collectionData,
    isLoading: collectionLoading,
    isError: collectionError,
  }: {
    data: any;
    isLoading: boolean;
    isError: boolean;
  } = getallCollectionbyBrand();

  const addNewCollection = PostNewCollection("1");
  const addNewProduct = PostNewProduct();

  if (creatorLoading || collectionLoading) {
    return <h1>Loading</h1>;
  }
  if (creatorError || collectionError) {
    return <h1>Error</h1>;
  }

  const filteredCreator = creatorData.filter((ele: any) => {
    return ele.brandId === "1";
  });

  // const handleClick = async () => {
  // const imageIds = Array(imageProduct).map((el:any) =>el.name+ v4());
  // const uploadPromises = Array(imageProduct).map((file:any, index) => {
  // const imageStorageRef = ref(imageDb, `files/${imageIds[index]}`);
  //   return uploadBytes(imageStorageRef, file.name);
  // });
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!Array.isArray(imageProduct) || imageProduct.length === 0) {
      console.error("No files selected for upload");
      return;
    }

    const imageIds = imageProduct.map((el) => el.name + v4());

    const uploadTasks = imageProduct.map((file, index) => {
      const imageStorageRef = ref(imageDb, `files/${imageIds[index]}`);
      return uploadBytes(imageStorageRef, file);
    });

    try {
      const snapshots = await Promise.all(uploadTasks);

      const downloadUrls = await Promise.all(
        snapshots.map((snapshot) => getDownloadURL(snapshot.ref))
      );

      console.log(downloadUrls);
      setImageUrl(downloadUrls.map(url => `'${url}'`));
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };


    // const storageRef = ref(imageDb, `/files/${imageProduct.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, imageProduct);
    // uploadTask.on(
    //     "state_changed",
    //     (snapshot) => {
    //         const percent = Math.round(
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //         );
    //     },
    //     (err) => console.log(err),
    //     () => {
    //         getDownloadURL(uploadTask.snapshot.ref).then((url:string) => {
    //             console.log(url);
    //             setImageUrl([url])
    //         });
    //     }
    // );





console.log(imageUrl,"jhbjhvjvjhvjhvbjb");



  return (
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <form>
        <label
          htmlFor="create collection "
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Create New Collection
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          required
          onChange={(e) => setNameCollection(e.target.value)}
        />
        <select
          onChange={(e) => setCreatorId(e.target.value)}
          id="small"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Select a Creator</option>
          {filteredCreator.map((element: any) => {
            return (
              <option key={element.id} value={element.id}>
                {element.fullName}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          className="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            addNewCollection.mutate({
              name: nameCollection,
              creatorId: creatorId,
            });
          }}
        >
          {" "}
          Submit collection{" "}
        </button>
      </form>

      <form>
        <label
          htmlFor="create post"
          className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
        >
          Create a New Post
        </label>
        <input
          type="text"
          id="collection name"
          className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="..."
          required
        />
        <button
          type="submit"
          className="text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            addNewCollection.mutate({
              name: nameCollection,
              creatorId: creatorId,
            });
          }}
        >
          {" "}
          Submit Post{" "}
        </button>
      </form>

      <form>
        <label
          htmlFor="create product"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Create a New Product
        </label>
        <input
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          required
          onChange={(e) => setNameProduct(e.target.value)}
        />
        <div className="flex items-center">
          <input
            type="file"
            multiple
            id="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Image Link"
            required
            onChange={(e) => setImageProduct(Array.from(e.target.files) || [])}
          />
          <button  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={(e)=>{
            handleUpload(e)
          }}>
            upload
          </button>
        </div>
        <input
          type="text"
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          id="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Price"
          required
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          type="text"
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Category"
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          id="quantity"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Quantity"
          required
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <input
          type="text"
          id="reference"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Reference"
          required
          onChange={(e) => setReference(e.target.value)}
        />
        <select
          id="small"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={(e) => setStatus(Boolean(e.target.value))}
        >
          <option value="True"> True </option>
          <option value="False"> False </option>
        </select>
        <select
          onChange={(e) => setCollectionId(e.target.value)}
          id="small"
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>collection</option>
          {collectionData.map((element: any) => {
            return (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            addNewProduct.mutate({
              name: nameProduct,
              image: imageUrl,
              description: description,
              price: price,
              category: category,
              quantity: quantity,
              reference: reference,
              status: status,
              collectionId: collectionId,
            });
          }}
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default Formadd;
