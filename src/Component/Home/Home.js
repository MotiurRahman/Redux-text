import React from "react";

const Home = () => {
  return (
    <div>
      <form action="">
        <div className="form-control mx-auto w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control mt-2 mx-auto w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control mt-2  mx-auto w-full max-w-xs">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default Home;
