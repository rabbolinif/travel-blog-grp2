import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/posts");
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="container card-deck justify-content-evenly d-flex flex-wrap overflow-auto">
        {posts.map((post) => {
          console.log(post.image);
          return (
            <div
              key={crypto.randomUUID()}
              className="card m-4 "
              style={{ width: `${18}rem`, height: 500, borderRadius: 15 }}
            >
              <img
                className="card-img-top"
                src={`http://localhost:5000/uploads/${post.image}`}
                alt="#"
              />
              <div className="card-body d-flex flex-start flex-column justify-content-between">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text mb-3">
                  {`${post.paragraph.slice(0, 120)}...`}
                </p>
                <Link
                  to={post.id}
                  className="btn btn-primary"
                  style={{ width: `${50}%` }}
                >
                  Book now
                </Link>
                <div className="card-footer mt-4">
                  <small className="text-muted">Last viewed 3 mins ago</small>
                </div>
              </div>
            </div>
            // <ul key={crypto.randomUUID()}>
            //   <li key={crypto.randomUUID()}>{post.title}</li>
            //   <li key={crypto.randomUUID()}>{post.author}</li>
            //   <li key={crypto.randomUUID()}>{post.date}</li>
            //   <li key={crypto.randomUUID()}>{post.imageUrl}</li>
            //   <li key={crypto.randomUUID()}>{post.paragraph}</li>
            // </ul>
          );
        })}
      </div>
    </>
  );
};

export default Home;
