import React, { useEffect, useState } from "react";

const contentful = require("contentful");
const client = contentful.createClient({
  accessToken: process.env.REACT_APP_API_KEY,
  space: "h5ckac8m4bnj",
});
const SingleArticle = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    client.getEntry("fOxW4tZa5qhXH19BD3ap4").then(function (entry) {
      // logs the entry metadata
      console.log(entry.sys);

      // logs the field with ID title
      console.log(entry.fields);

      setPost({
        title: entry.fields.name,
        imageUrl: entry.fields.photo.fields.file.url,
        author: entry.fields.author,
        paragraph: entry.fields.body.content[0].content[0].value,
        date: entry.fields.date,
      });
    });
  }, []);

  console.log(post);
  return <div>SingleArticle</div>;
};

export default SingleArticle;
