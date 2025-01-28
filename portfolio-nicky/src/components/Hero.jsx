import me from "../assets/me2.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gray-800 w-full text-center p-7 my-4 font-mono"
    >
      <h1 className="text-white text-2xl">Hey There, I'm</h1>
      <p className="text-white p-2 text-lg">
        <span className="text-gray-500 font-medium">Nicky </span>
        Alexander, A
        <span className="text-gray-500 font-medium">
          {" "}
          Front-End Developer.{" "}
        </span>
      </p>
      <button
        className="text-white focus:outline-none hover:bg-white hover:text-gray-800 my-2 
      rounded-4xl px-3 bg-gray-500 py-2 text-sm font-sans"
      >
        My Projects
      </button>
      <div className="relative flex-1">
        <img className="rounded-full h-50" src={me} alt="Profile"></img>
      </div>
    </section>
  );
}

export default Hero;
