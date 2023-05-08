import React, { useState } from "react";
import { BiEditAlt, BiUser, BiX } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
        //   console.log(data);
          if (data.deletedId) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        });
    });
  };
  return (
    <div className="my-16">
      <div>
        <Link
          to="/add-user"
          className="text-[#5915E0] flex items-center gap-1 font-semibold w-fit px-2 py-1  shadow-[#5915e049] shadow-lg rounded-md"
        >
          <span>New Users</span>
          <BiUser className="text-xl" />
        </Link>
      </div>
      {/* table section   */}
      <div className="overflow-x-auto mt-20">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td className="flex gap-2">
                  <button className="bg-[#06D6A0] p-2 rounded-md">
                    <BiEditAlt className="text-lg" />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="rounded-md bg-[#06D6A0] p-2"
                  >
                    <BiX className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
