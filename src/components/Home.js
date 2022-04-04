import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const contentful = require("contentful");
const client = contentful.createClient({
  accessToken: process.env.REACT_APP_API_KEY,
  space: "h5ckac8m4bnj",
});
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.getEntries().then(function (entries) {
      entries.items.forEach(function (entry) {
        if (entry.fields.name) {
          setPosts((prev) => [
            ...prev,
            {
              title: entry.fields.name,
              imageUrl: entry.fields.photo?.fields.file.url,
              author: entry.fields?.author,
              paragraph: entry.fields.body.content[0].content[0].value,
              date: entry.fields?.date,
              id: entry.sys?.id,
            },
          ]);
        }
      });
    });
  }, []);

  return (
    <>
      <div className="container card-deck justify-content-evenly d-flex flex-wrap overflow-auto">
        {posts.map((post) => {
          return (
            <div
              key={crypto.randomUUID()}
              className="card m-4 "
              style={{ width: `${18}rem`, height: 500, borderRadius: 15 }}
            >
              <img className="card-img-top" src={post.imageUrl} alt="#" />
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
