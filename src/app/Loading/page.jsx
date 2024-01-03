import "./loading.css";

const Loading = () => {
  return (
    <>
      <div className="spinner">
        Loading
        <div className="spinner-circle spinner-red"></div>
        <div className="spinner-circle spinner-blue"></div>
        <div className="spinner-circle spinner-yellow"></div>
      </div>
    </>
  );
};

export default Loading;
