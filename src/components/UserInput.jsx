import React, { useState } from "react";

const UserInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [descri, setDescri] = useState("");
  const [usesDetail, setUsersDetail] = useState([]);
  const [fname, setFName] = useState("");
  const [femail, setFemail] = useState("");
  const [fphone, setFphone] = useState("");
  const [fage, setFage] = useState("");
  const [fdescri, setFdescri] = useState("");
  const [fdetail, setFdetail] = useState([]);
  const handleFDetail = (e) => {
    e.preventDefault();
    if (fname && femail && fphone && fage && fdescri) {
      const fperson = {
        id: new Date().getTime().toString(),
        fname,
        femail,
        fphone,
        fage,
        fdescri,
      };
      setFdetail((fusers) => {
        return [...fusers, fperson];
      });
      setFName("");
      setFphone("")
      setFemail("")
      setFage("")
      setFdescri("")
    } else {
      console.log("No values are Found");
    }
  };
   console.log(fdetail);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && age && descri) {
      const person = {
        id: new Date().getTime().toString(),
        name,
        email,
        phone,
        age,
        descri,
      };
      setUsersDetail((users) => {
        return [...users, person];
      });
      setName("");
      setEmail("");
      setPhone("");
      setAge("");
      setDescri("");
    } else {
      console.log("Values are empty");
    }
  };
  console.log(usesDetail);
  return (
    <div className=" bg-gray-400 text-white">
      <div className="w-full divide-black divide-gray-900 space-x-2  gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-5   bg-gray-400  text-white">
        <div className="">
          <h1 className="text-2xl ml-2 pb-8 grid place-items-center text-black font-semibold ">
            Enter the Boys Birthday Details
          </h1>
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-2  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
          >
            <div className="flex md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-2 items-center mb-3">
              <img
                className=" h-10 mr-2"
                src="https://img.icons8.com/color/48/000000/name--v1.png"
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                className="  rounded-sm   w-full flex-grow px-2 bg-transparent text-black outline-none bg-gray-50 py-1"
              />
            </div>
            <div className="flex pl-2 md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-2   rounded-sm   w-full flex-grow items-center mb-3">
              <img
                className="h-10  mr-2"
                src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-interface-kiranshastry-lineal-color-kiranshastry.png"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email"
                className=" px-2 col-span-2   rounded-sm   w-full flex-grow bg-transparent  text-black outline-none bg-gray-50 py-1"
              />
            </div>
            <div className="flex  col-span-2  md:col-span-1 lg:col-span-1 xl:col-span-1 items-center mb-3">
              <img
                className="h-10 mr-2"
                src="https://img.icons8.com/cute-clipart/64/000000/number-pad.png"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="Enter phone"
                className=" px-2   rounded-sm   w-full flex-grow bg-transparent  text-black outline-none bg-gray-50 py-1"
              />
            </div>
            <div className="flex pl-2 col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 items-center mb-3">
              <img
                className="h-10 mr-2"
                src="https://img.icons8.com/color/48/000000/compare-heights.png"
              />
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                placeholder="Enter age"
                className=" px-2   rounded-sm   w-full flex-grow bg-transparent  text-black outline-none bg-gray-50 py-1"
              />
            </div>
            <div className="  col-span-2">
              <div className="flex justify-between  px-2 items-center">
                <h1>Enter Birthday Descirption</h1>
                <img
                  className="h-10"
                  src="https://img.icons8.com/emoji/48/000000/keyboard-emoji.png"
                />
              </div>
              <textarea
                value={descri}
                onChange={(e) => setDescri(e.target.value)}
                name=""
                id=""
                cols="30"
                className=" outline-none p-1 px-3 text-black  flex-grow  rounded-lg   w-full"
                placeholder="Enter your Birthday Reminder.. "
                rows="10"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className=" font-bold col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex px-2 rounded-sm py-1 shadow-lg mt-4 justify-between  bg-indigo-700  text-white  items-center"
            >
              <h1>Save</h1>

              <img
                className="h-8 ml-2"
                src="https://img.icons8.com/color-glass/48/000000/save-as.png"
              />
            </button>
          </form>
        </div>
        <div className="">
          <h1 className="text-2xl ml-2 pb-8 text-black font-semibold grid place-items-center ">
            Enter the Girls Birthday Details
          </h1>
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
          >
            <div className="flex md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-2 items-center mb-3">
              <img
                className=" h-10 mr-2"
                src="https://img.icons8.com/color/48/000000/name--v1.png"
              />
              <input
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                className="  rounded-sm   w-full flex-grow px-2 bg-transparent text-black outline-none bg-gray-50 py-1"
              />
            </div>
            <div className="flex pl-2 md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-2   rounded-sm   w-full flex-grow items-center mb-3">
              <img
                className="h-10  mr-2"
                src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-interface-kiranshastry-lineal-color-kiranshastry.png"
              />
              <input
                value={femail}
                onChange={(e) => setFemail(e.target.value)}
                type="email"
                placeholder="Enter Email"
                className=" px-2 col-span-2   rounded-sm   w-full flex-grow bg-transparent  text-black outline-none bg-gray-50 py-1"
              />
            </div>
            <div className="flex  col-span-2  md:col-span-1 lg:col-span-1 xl:col-span-1 items-center mb-3">
              <img
                className="h-10 mr-2"
                src="https://img.icons8.com/cute-clipart/64/000000/number-pad.png"
              />
              <input
                value={fphone}
                onChange={(e) => setFphone(e.target.value)}
                type="number"
                placeholder="Enter phone"
                className=" px-2   rounded-sm   w-full flex-grow bg-transparent  text-black outline-none bg-gray-50 py-1"
              />
            </div>
            <div className="flex pl-2 col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 items-center mb-3">
              <img
                className="h-10 mr-2"
                src="https://img.icons8.com/color/48/000000/compare-heights.png"
              />
              <input
                value={fage}
                onChange={(e) => setFage(e.target.value)}
                type="number"
                placeholder="Enter age"
                className=" px-2   rounded-sm   w-full flex-grow bg-transparent  text-black outline-none bg-gray-50 py-1"
              />
            </div>
            <div className="  col-span-2">
              <div className="flex justify-between  px-2 items-center">
                <h1>Enter Birthday Descirption</h1>
                <img
                  className="h-10"
                  src="https://img.icons8.com/emoji/48/000000/keyboard-emoji.png"
                />
              </div>
              <textarea
                value={fdescri}
                onChange={(e) => setFdescri(e.target.value)}
                name=""
                id=""
                cols="30"
                className=" outline-none p-1 px-3 text-black  flex-grow  rounded-lg   w-full"
                placeholder="Enter your Birthday Reminder.. "
                rows="10"
              ></textarea>
            </div>
            <button
              onClick={handleFDetail}
              type="submit"
              className=" font-bold col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex px-2 rounded-sm py-1 shadow-lg mt-4 justify-between  bg-indigo-700  text-white  items-center"
            >
              <h1>Save</h1>

              <img
                className="h-8 ml-2"
                src="https://img.icons8.com/color-glass/48/000000/save-as.png"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 place-items-center px-2 items-center">
        <div className="flex items-center">
          <h1 className="pr-5 pb-5 lg:text-3xl text-xl  md:text-3xl font-semibold">
            List of the Men BirthDay Reminders {`(${usesDetail.length})`}
          </h1>
          <img
            className="h-10"
            src="https://img.icons8.com/color/64/000000/bell.png"
          />
        </div>
        <div className="grid place-items-center px-2 items-center">
          <div className="flex items-center">
            <h1 className="pr-5 pb-5 lg:text-3xl text-xl  md:text-3xl font-semibold">
              List of the Girls BirthDay Reminders {`(${fdetail.length})`}
            </h1>
            <img
              className="h-10"
              src="https://img.icons8.com/color/64/000000/bell.png"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="">
          {usesDetail.map((item) => {
            const { id, name, email, phone, age, descri } = item;
            return (
              <div
                className=" px-5 py-2 rounded-lg shadow-lg mx-2 my-2 bg-green-500 text-white"
                key={id}
              >
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <img
                      className=" h-10 mr-2"
                      src="https://img.icons8.com/color/48/000000/name--v1.png"
                    />
                    <h1 className="pl-1">{name}</h1>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-10  mr-2"
                      src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-interface-kiranshastry-lineal-color-kiranshastry.png"
                    />
                    <h1 className="pl-1">{email}</h1>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-10 mr-2"
                      src="https://img.icons8.com/cute-clipart/64/000000/number-pad.png"
                    />
                    <h1 className="pl-1">{phone}</h1>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-10 mr-2"
                      src="https://img.icons8.com/color/48/000000/compare-heights.png"
                    />
                    <h1 className="pl-1">{age}</h1>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-10"
                      src="https://img.icons8.com/emoji/48/000000/keyboard-emoji.png"
                    />
                    <p className="pl-1">{descri}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="">
            {fdetail.map((item) => {
              const { id, fname, femail, fphone, fage, fdescri } = item;
              return (
                <div
                  className=" px-5 py-2 rounded-lg shadow-lg mx-2 my-2 bg-green-500 text-white"
                  key={id}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <img
                        className=" h-10 mr-2"
                        src="https://img.icons8.com/color/48/000000/name--v1.png"
                      />
                      <h1 className="pl-1">{fname}</h1>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-10  mr-2"
                        src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-interface-kiranshastry-lineal-color-kiranshastry.png"
                      />
                      <h1 className="pl-1">{femail}</h1>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-10 mr-2"
                        src="https://img.icons8.com/cute-clipart/64/000000/number-pad.png"
                      />
                      <h1 className="pl-1">{fphone}</h1>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-10 mr-2"
                        src="https://img.icons8.com/color/48/000000/compare-heights.png"
                      />
                      <h1 className="pl-1">{fage}</h1>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="h-10"
                        src="https://img.icons8.com/emoji/48/000000/keyboard-emoji.png"
                      />
                      <p className="pl-1">{fdescri}</p>
                    </div>
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

export default UserInput;
