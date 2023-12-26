"use client";
// import { getwalletByid, deletewallet } from "../utils/useApi";
import { deletewallet } from "../utils/useApi";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
// import ProductQuantity from "./components/Quantity"
// import Total from "./components/Total"; 



export const Walletuser = () => {
  const [open, setOpen] = useState(true); 
  const [init,setInit]=useState(1) 
  const [removed, setRemoved] = useState("default");
  const { refetch, isFetching, data } = useQuery<Wallet[]>({
    queryKey: ["Wallet", removed],
    refetchOnWindowFocus: true,
    staleTime: 0,
    refetchInterval: 0,
    queryFn: async () => {
      const result = await fetch(`http://localhost:8080/wallet/1`);
      const data = await result.json();
      return data;
    },
  });

  const { mutate } = deletewallet();

  // if(isLoading) return <h1>Loading</h1>
  // if(isError) return <h1>error</h1>
  const remove = (
    productId: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    mutate(productId);
   
  };
  
  const openWallet = () => {
    setOpen(true);
    const x = setTimeout(() => {
      clearTimeout(x);
    }, 900);
    
  };
  const closeWallet = () => {
    setOpen(false);
    const x = setTimeout(() => {
      clearTimeout(x);
    }, 900);

    
  };  
  const calculateTotal = ():number => {

    if (!data) return 0;  
    
  
    return data.reduce((total, product: any) => {
      
      return total + product.Product.price*init;

    }, 0);
  }; 
  
  
  const Increment  =  (productId:string, 
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setInit ((prevInit) => prevInit + 1) 
    console.log(productId)
  } 
  const Decrement = (productId:string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    if(init>1){
    setInit((prevInit)=>prevInit-1)
  }}
    
  
  

  return (
    <Transition.Root show={open} >
      <Dialog as="div" className="relative z-10" onClose={closeWallet}>
      
    
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child >

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-700 sm:duration-1000"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-700 sm:duration-1000"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>

                        <div className="ml-3 flex h-7 items-center">
                          <Link href="/AllProduct">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-black hover:text-gray-500"
                              onClick={() => {
                                setOpen(false);
                              }}
                            >
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </Link>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {data?.map((product: any) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.Product.image}
                                    alt={`Product: ${product.Product.name}`}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a>{product.Product.name}</a>
                                      </h3>
                                      <p className="ml-4">
                                        ${product.Product.price}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    

                                    <div className="flex items-center space-x-3">
                                      <button className="text-black text-xl bg"
                                      onClick={(event: React.MouseEvent<
                                        HTMLButtonElement,
                                        MouseEvent
                                      >
                                      )=>{
                                      Decrement(product.Product.id,event)
                                      refetch()
                                      }}
                                      >
                                        -
                                      </button>
                                      <p className="text-xl text-black">{init}</p>
                                      <button className="text-black text-xl " 
                                      onClick={(event: React.MouseEvent<
                                        HTMLButtonElement,
                                        MouseEvent
                                      >
                                      )=>{
                                      Increment(product.Product.id,event)
                                      refetch()
                                      }}
                                      >
                                        +
                                      </button>
                                    </div>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-green-600 hover:text-indigo-500"
                                        onClick={(
                                          event: React.MouseEvent<
                                            HTMLButtonElement,
                                            MouseEvent
                                          >
                                        ) => {
                                          remove(product.Product.id, event);
                                          refetch(); 
                                        }}
                                      >
                                        Remove
                                      </button>
                                    </div>

                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p> ${calculateTotal()} </p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="/Confirmation"
                          className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" 
                          
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or 
                          <Link
                          href='/AllProduct'
                          >
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> </span>
                          </button> 
                          </Link>
                        </p>
                      </div>
                    </div>

                  </div>
                </Dialog.Panel>
              </Transition.Child> 
              </div>
            </div>
          </div>
        
    
      </Dialog>
    </Transition.Root>
  );
};
export default Walletuser
