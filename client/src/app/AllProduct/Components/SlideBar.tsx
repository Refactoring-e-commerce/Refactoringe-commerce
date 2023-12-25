"use client";
export const SlideBar = () => {
     
    return (


<div className="shadow-sm bg-white w-[170px] bg-opacity-10 flex max-w-[300px] md:w-full flex-col items-stretch mx-auto pl-6 mt-10 pr-5 py-11 rounded-xl">
  <div className="px-4 py-4 ">
    <ul className="mt-6 space-y-1">
      <li>
        <a
          href=""
          className="block rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700"
        >
          FILTER
        </a>
      </li>

      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-10 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <span className="text-sm font-medium"> Collection </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-10 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Spring-Summer
              </a>
            </li>

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                AutunmWinter
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-10 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <span className="text-sm font-medium"> Category </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-10 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Men
              </a>
            </li>

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Women
              </a>
            </li>
          </ul>
        </details>
      </li>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-10 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <span className="text-sm font-medium"> Status </span>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-2 space-y-1 px-4">
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-10 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Ok
            </a>
          </li>

          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Not OK
            </a>
          </li>
        </ul>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-10 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <span className="text-sm font-medium"> Price </span>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-2 space-y-1 px-4">
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-10 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              A--Z
            </a>
          </li>

          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Z--A
            </a>
          </li>
        </ul>
      </details>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-10 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <span className="text-sm font-medium"> ALL </span>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-2 space-y-1 px-4">
          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-10 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              FavList
            </a>
          </li>

          <li>
            <a
              href=""
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Wallet
            </a>
          </li>
        </ul>
      </details>
      <li>
        <a
          href=""
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          BrandProfile
        </a>
      </li>
      <br />
      <li>
        <a
          href=""
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          CreatorProfile
        </a>
      </li>
    </ul>
  </div>
</div>
    )}
