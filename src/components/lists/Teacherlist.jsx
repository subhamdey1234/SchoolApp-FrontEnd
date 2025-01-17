import React, { useState } from 'react';
import { teachersData } from '../../libs/teacherlist';
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaArrowDownWideShort, FaPlus, FaArrowUpShortWide } from "react-icons/fa6";

function Teacherlist() {
  // State to manage modal visibility
  const [showForm, setShowForm] = useState(false);

  // Toggle the form modal
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='overflow-x-auto max-h-[82vh] text-white'>
      {/* Header Section */}
      <div className='flex justify-between p-4'>
        <h1 className='text-2xl font-semibold underline'>All Teachers:-</h1>
        <div className='flex justify-center items-center gap-4'>
          {/* Search Bar */}
          <div className='ring-slate-300 ring-1 rounded-3xl w-[255px] h-8 flex justify-center items-center gap-2'>
            <IoIosSearch className='text-2xl ms-2 text-white' />
            <input
              type="text"
              className='px-3 focus:ring-0 focus:outline-none bg-inherit rounded-md text-white font-semibold w-56 placeholder:text-center placeholder:text-white'
              placeholder='Enter Teacher name'
            />
          </div>
          {/* Icons */}
          <div className="flex gap-4">
            <div className='h-10 w-10 cursor-pointer bg-yellow-100 flex justify-center items-center rounded-full text-center text-black'>
              <FaArrowDownWideShort />
            </div>
            <div
              onClick={toggleForm} // Show the form modal
              className='cursor-pointer h-10 w-10 bg-yellow-100 flex justify-center items-center rounded-full text-center text-black'
            >
              <FaPlus />
            </div>
            <div className='h-10 w-10 bg-yellow-100 flex justify-center items-center rounded-full text-center text-black cursor-pointer'>
              <FaArrowUpShortWide />
            </div>
          </div>
        </div>
      </div>

      {/* Teacher List Table */}
      <div className="overflow-x-auto text-white">
        <table className="table text-white">
          <thead>
            <tr className='text-white text-xl underline'>
              <th>Info</th>
              <th>Teacher ID</th>
              <th>Subjects</th>
              <th>Classes</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachersData.map((teacher) => (
              <tr key={teacher.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-full h-12 w-12">
                        <img src={teacher.photo} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{teacher.name}</div>
                      <div className="text-sm opacity-75 text-white">
                        {teacher.address}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{teacher.teacherId}</td>
                <td>{teacher.subjects.toString()}</td>
                <td>{teacher.classes.toString()}</td>
                <td>{teacher.phone}</td>
                <td>{teacher.address}</td>
                <td>
                  <div className="flex gap-2">
                    <div className="bg-slate-400 h-10 w-10 flex justify-center items-center rounded-full opacity-70 cursor-pointer">
                      <FaRegEye className='text-2xl text-black' />
                    </div>
                    <div className="bg-red-600 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer opacity-80">
                      <RiDeleteBin5Fill className='text-2xl' />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-slate-800 rounded-lg p-6 w-[700px]">
            <h2 className="text-xl font-bold mb-4">Add New Teacher</h2>
            <form>
            <p className='underline mb-3 text-green-300'>Authentication Information</p>
              <div className='flex gap-2 justify-between'>
                
              <div className="mb-4">
                <label className="block font-semibold mb-2">Username</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter Username"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter Password"
                />
              </div>
              </div>
<p className='mb-3 underline text-green-300'>Personal Information</p>
              <div className='flex gap-2 justify-between'>
              <div className="mb-4">
                <label className="block font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Phone</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter Phone No."
                />
              </div>
              </div>

              <div className='flex gap-2 justify-between'>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter Address"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Blood Type</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Enter the Blood type"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Date Of Birth</label>
                <input
                  type="datetime-local"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder=""
                />
              </div>
              </div>

              <div className='flex gap-2 justify-between'>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Sex</label>
               <select className='w-full border border-gray-300 rounded px-3 py-2' name="Sex" id="Sex">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
               </select>
              </div>
              
              <div className="mb-4">
                <label className="block font-semibold mb-2">Upload Photo</label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Upload"
                />
              </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={toggleForm}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teacherlist;
