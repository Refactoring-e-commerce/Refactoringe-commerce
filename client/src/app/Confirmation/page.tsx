// Import necessary components from flowbite-react
import { Button, TextInput, Checkbox, Label, Select } from 'flowbite-react';
import Link from 'next/link';

function Confirmation() {
  return ( <div>
    <h1 className="mb-4 text-3x4  text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Confirmation
          </span>
        </h1>
    <div className="flex items-center justify-center h-screen ">
      <div className="max-w-md p-8 w-full h-4/5 bg-emerald-600 rounded shadow-lg">
        {/* Country Select */}
        <div className="mb-4 ">
          <Label htmlFor="countries" value="Select your country" />
          <Select id="countries" required>
            <option>Monastir</option>
            <option>Sousse</option>
            <option>Gabes</option>
            <option>Tunis</option>
            <option>Gafsa</option>
            <option>Mahdia</option>
            <option>Nabeul</option>
            <option>Beja</option>
          </Select>
        </div>

        {/* Address Input */}
        <div className="mb-4">
          <Label htmlFor="address" value="Your address" />
          <TextInput id="address" type="address" placeholder="Address" required />
        </div>

        {/* Checkboxes */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center">
            <Checkbox id="accept" defaultChecked />
            <Label htmlFor="accept" className="flex">
              I agree with the&nbsp;
              <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                terms and conditions
              </a>
            </Label>
          </div>

          <div className="flex items-center">
            <Checkbox id="promotion" />
            <Label htmlFor="promotion" className="text-black">I want to get promotional offers</Label>
          </div>

          <div className="flex items-center">
            <Checkbox id="age" />
            <Label htmlFor="age" className="text-black">I am 18 years or older</Label>
          </div>

          <div className="flex items-center">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className='text-black'>Remember me</Label>
          </div>
        </div>

        {/* Submit Button */} 
        <Link
        href='/'
        >
        <div className="flex items-center justify-center">
          <Button type="submit" className="bg-green-500 text-white">
            Submit
          </Button>
        </div> 
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Confirmation;
