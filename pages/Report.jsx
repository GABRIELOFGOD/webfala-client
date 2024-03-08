import React from 'react'

const Report = () => {

  const submitForm = () => {
    
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex  flex-col items-center justify-center bg-[#f1f0ec] p-4 shadow-base mt-8 rounded-2xl w-2/4">
        <form onSubmit={submitForm}>
          <div className="mb-8">
            <h1 className="text-[2rem] text-[#0a0a0a] font-light leading-4">
              Your Review
            </h1>
          </div>
          <div className=" p-6 bg-[#0000000f] rounded-md mb-4">
            <p className="  text-sm ">
              Send us the website address of the material that you suspect
              contains child sexual abuse material. For example, it can be a link
              to a website, file sharing folder, forum or chat.
            </p>
          </div>

          <h2>Website Address</h2>
          <div className="bg-white py-2 px-3 border rounded mb-3 mt-2">
            <input
              className="bg-transparent outline-none border-none w-[100%]"
              type="text"
              placeholder="Fill in the web address here"

            />
          </div>
          <h2 className="text-xl">Information</h2>
          <span className="text-stone-400 text-sm">
            Add any relevant Information or description of the materials
          </span>
          <div className="bg-white py-2 px-3 border rounded mt-3">
            <textarea className="bg-transparent outline-none border-none w-[100%]" />
          </div>
          <p className="mt-8 text-base">
            If you add your contact details, we have the opportunity to ask
            follow-up questions to your inquiry, if relevant. Your inquiry is
            anonymous if you do not add contact information.
          </p>
          <button className="mt-8 text-center  w-[100%] h-12 bg-[#3296F6] text-white rounded-lg text-lg">SEND</button>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default Report
