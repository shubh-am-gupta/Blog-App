import spinner from "./spinner.gif";

const Loader = () => {
  return (
    <div className="loader" style={{ textAlign: "center" }}>
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default Loader;
