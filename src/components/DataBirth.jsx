import React, { useState } from "react";
import { data } from "./BirthdayData";
import { date } from "./BirthdayData";
const DataBirth = () => {
  const [male, setMale] = React.useState(data);
  const [girl,setGirl]=React.useState(date)
  const deleteGirl=(id)=>{
      setGirl((oldgirl)=>{
            const newgirl=oldgirl.filter((person)=>person.id !== id)
            return newgirl;
      })
  }
  const DeleteItem=(id)=>{
       setMale((oldPeople)=>{
           let newPeople=oldPeople.filter((person)=>person.id !== id)
           return newPeople;
       })
  }
  return (
    <div className="bg-gray-400 z-0">
      <div className="grid place-items-center pb-5  items-center">
        
      </div>
      <div className=" px-10 grid grid-cols-1 bg-gray-400  z-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="z-0">
          {male.map((singlemen) => {
            const { id, img, name, dbirth, currentage } = singlemen;
            return (
              <div
                key={id}
                className="flex flex-shrink relative px-2 py-3 rounded-lg items-center space-x-6 m-3 shadow-lg bg-green-500 text-white"
              >
                <img
                  className="w-10 h-10 rounded-full ring-1 "
                  src={img}
                  alt={name}
                  alt=""
                />
                <h1 className="font-bold">{name}</h1>
                <h1>{dbirth}</h1>
                <h1>{currentage}</h1>
                <img
                  onClick={() => DeleteItem(id)}
                  className=" md:pl-6 absolute cursor-pointer h-12 right-10"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-close-sales-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
                />
              </div>
            );
          })}
          <button
            onClick={() => setMale([])}
            className="flex items-center cursor-pointer px-4 py-1 bg-gray-500 shadow-lg rounded-lg mt-4 ml-3 space-x-3 text-white"
          >
            <h1>Clear all</h1>
            <img
              className="h-8 text-white"
              src="https://img.icons8.com/ios/50/000000/broom.png"
            />
          </button>
        </div>
        <div className="">
          {girl.map((singlemen) => {
            const { id, img, name, dbirth, currentage } = singlemen;
            return (
              <div
                key={id}
                className="flex relative  px-2 py-3 rounded-lg items-center space-x-6 m-3 bg-green-500 shadow-lg flex-shrink text-white"
              >
                <img
                  className="w-10 h-10 rounded-full ring-1 "
                  src={img}
                  alt={name}
                />
                <h1 className="font-bold">{name}</h1>
                <h1>{dbirth}</h1>
                <h1>{currentage}</h1>
                <img
                  onClick={() => deleteGirl(id)}
                  className="flex cursor-pointer h-12 absolute right-10"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-close-sales-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
                />
              </div>
            );
          })}
          <button
            onClick={() => setGirl([])}
            className="flex mt-4 items-center cursor-pointer px-4 py-1 bg-gray-500 shadow-lg rounded-lg ml-3 space-x-3 text-white"
          >
            <h1>Clear all</h1>
            <img
              className="h-8 text-white"
              src="https://img.icons8.com/ios/50/000000/broom.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataBirth;
