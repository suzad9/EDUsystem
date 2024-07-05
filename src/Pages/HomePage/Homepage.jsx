import homeImg from "../../assets/homeImg.png";
const Homepage = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={homeImg} className=" rounded-lg  mr-5" />
          <div>
            <h1 className="text-5xl font-bold">
              ENHANCE YOUR ACADEMIC PERFORMANCE with US.
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">
              Try it for free
            </button>
            <p className="mt-[90px]">
              50,000+{" "}
              <span className="text-gray-400">
                students and teacher <br />
                are here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
