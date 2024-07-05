import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                {" "}
                <h1 className="text-5xl font-bold text-center">SignUp</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">School ID</span>
                  </label>
                  <input
                    type="text"
                    placeholder="School ID"
                    className="input input-bordered"
                    required
                  />
                </div>{" "}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">FullName</span>
                  </label>
                  <input
                    type="text"
                    placeholder="FullName"
                    className="input input-bordered"
                    required
                  />
                </div>{" "}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Parent's Nnmber</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Parent's Number"
                    className="input input-bordered"
                    required
                  />
                </div>{" "}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">UserName</span>
                  </label>
                  <input
                    type="text"
                    placeholder="UserName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Create Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Create Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white text-xl">
                    SignUp
                  </button>
                </div>
                <p>
                  <span className="underline">Already have an account</span>{" "}
                  <Link to="/login">
                    {" "}
                    <span className="text-blue-500 underline font-bold">
                      Login
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
