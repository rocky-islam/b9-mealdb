import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigatePath = useNavigate();
  const navigate = () =>{
    // alert('click navigate');
    navigatePath('/mealDB');
  }

  return (
    <div>
      <div
        className="hero h-screen my-20"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button onClick={navigate} className="btn btn-primary">Explorer Foods</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

