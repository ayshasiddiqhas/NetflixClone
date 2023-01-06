import React from "react";
import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import {BiPlay} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";
// import { Link } from "react-router-dom";

const apiKey = "3f0f3e90aba535540968d1d6e4a85d7c";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Popular = "popular";
const TopRated = "top_rated";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({
  title,
  arr = [],
  //   arr = [
  //     // {
  //     //   img: "https://e1.pngegg.com/pngimages/974/699/png-clipart-movies-and-popcorn-folder-icon-movies-thumbnail.png",
  //     // },
  //     // {
  //     //     img: "https://e1.pngegg.com/pngimages/974/699/png-clipart-movies-and-popcorn-folder-icon-movies-thumbnail.png",
  //     //   }
  //   ],
}) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [PopularMovies, setPopularMovies] = useState([]);
  const [TopRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      // console.log(data.results);
      setUpcomingMovies(results);
      // console.log(upcomingMovies);
    };
    fetchUpcoming();

    const fetchPopularMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${Popular}?api_key=${apiKey}`);
      // console.log(data.results);
      setPopularMovies(results);
      // console.log(Popular);
    };
    fetchPopularMovies();

    const fetchTopRatedMovies = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${TopRated}?api_key=${apiKey}`);
      // console.log(data.results);
      setTopRatedMovies(results);
      // console.log(TopRatedMovies);
    };
    fetchTopRatedMovies();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: PopularMovies[0]
            ? `url(${`${imgUrl}/${PopularMovies[0].poster_path}`})`
            : "rgb(16,16,16);",
        }}
      >
        {PopularMovies[0] && <h1>{PopularMovies[0].original_title}</h1>}
        {PopularMovies[0] && <p>{PopularMovies[0].overview}</p>}

       <div>
       <button><BiPlay/> Play </button>
       <button>My List  <AiOutlinePlus/> </button>
       </div>
      </div>

      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Popular"} arr={PopularMovies} />
      <Row title={"Top Rated"} arr={TopRatedMovies} />
    </section>
  );
};

export default Home;
