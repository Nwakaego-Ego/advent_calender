import "./loading.css";

const Spinner = () => {
  return (
    <>
      <div className="spinner ">
        <span className="loading">Loading</span>
        <div className="spinner-circle spinner-red"></div>
        <div className="spinner-circle spinner-blue"></div>
        <div className="spinner-circle spinner-yellow"></div>
      </div>
    </>
  );
};

export default Spinner;
