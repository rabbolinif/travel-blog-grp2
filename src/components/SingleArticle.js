import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const contentful = require("contentful");
const client = contentful.createClient({
  accessToken: process.env.REACT_APP_API_KEY,
  space: "h5ckac8m4bnj",
});
const SingleArticle = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    client.getEntry(`${id}`).then(function (entry) {
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
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <img
          className="image-fluid mt-5 mb-5"
          style={{ width: `${60}rem` }}
          src={post.imageUrl}
        ></img>
        <div>
          <p>{post.paragraph}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
            consequat, leo eget bibendum sodales, augue velit cursus nunc,
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
