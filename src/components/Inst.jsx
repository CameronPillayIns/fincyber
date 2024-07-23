import React from "react";

const Inst = () => {
  return (
    <div className="  w-[300px]  md:w-full py-[10rem] px-4">
          <h1 className='text-black text-center text-4xl font-extrabold   sm:text-2xl mb-8'>Accountable Insititutions</h1>
        <ul className="space-y-3 ">
        <ListItem text="Credit Providers" />
        <ListItem text="Gambling Institutions" />
        <ListItem text="Insurance Companies" />
        <ListItem text="Estate Agents" />
        <ListItem text="Certain Paralegal Partners" />
        <ListItem text="Motor Vehicle Dealers" />
        <ListItem text="Financial Institutions" />
        <ListItem text="Dealers in goods over R100k" />
      </ul>
    </div>
  );
};

export default Inst;

const ListItem = ({ text }) => {
  return (
   <div className="mx-auto ">
          
    <li className="flex  text-base text-body-color dark:text-dark-6">
      <span className="  mr-2.5 mt-0.5 text-primary">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {text}
          </li>
          </div>
  );
};
