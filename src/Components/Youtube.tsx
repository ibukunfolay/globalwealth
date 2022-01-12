import Vidlink from "./Vidlink";

const youtube = () => {
  const opts = {
    height: 390,
    width: 300,
  };
  return (
    <div className=" bg-gradient-to-b from-black via-Gray-900 to-BlueGray-900 min-h-screen py-[4em] px-[6em] text-white justify-center items-center mx flex font-bold">
      <div className="video flex flex-col lg:flex-row">
        <div className="youtube lg:mr-10 mb-[2em]">
          <Vidlink videoId="UfgbZ5wJszs" />
        </div>
        <div className="text-left">
          <h1 className="text-2xl my-4">Lorem, ipsum dolor.</h1>
          <p className="font-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            dicta quos quis est culpa sit.
          </p>
          <button
            type="submit"
            className="my-6 px-10 py-2 rounded-full  bg-gradient-to-r from-Cyan-500 to-Blue-500"
          >
            Let's start
          </button>
        </div>
      </div>
      <div className="text-icons">
        <div className="text"></div>
        <div className="icons">
          <div className="icon"></div>
        </div>
      </div>
    </div>
  );
};

export default youtube;
