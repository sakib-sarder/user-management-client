import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowFromRight } from "react-icons/bi";

const AddUser = () => {
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email, gender, status };
    console.log(user);
  };

  return (
    <div className="my-8">
      <div>
        <Link className="text-[#5A2B98] flex items-center gap-1 font-semibold ">
          <BiArrowFromRight className="text-xl" />
          <span>All Users</span>
        </Link>
      </div>
      <div className="mt-20">
        <h2 className="text-center font-bold text-3xl">New User</h2>
        <p className="text-gray-500 text-center text-sm">
          Use the below form to create a new account
        </p>
        <form onSubmit={handleAddUser} className="w-3/5 mx-auto space-y-4">
          <div className="form-control w-full">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Account"
              className="input input-bordered"
            />
          </div>
          <div className="flex items-center gap-7">
            <label>Gender</label>
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Male</span>
              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                value="Male"
                className="radio checked:bg-blue-500"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Female</span>
              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                value="Female"
                className="radio checked:bg-blue-500"
              />
            </label>
          </div>
          <div className="flex items-center gap-7">
            <label>Status</label>
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Active</span>
              <input
                onChange={(e) => setStatus(e.target.value)}
                type="radio"
                name="status"
                value="Active"
                className="radio checked:bg-blue-500"
              />
            </label>
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Inactive</span>
              <input
                onChange={(e) => setStatus(e.target.value)}
                type="radio"
                name="status"
                value="Inactive"
                className="radio checked:bg-blue-500"
              />
            </label>
          </div>
          <div>
            <input
              className="bg-[#06D6A0] text-center py-2 text-lg font-semibold cursor-pointer w-full"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
