import SingleArticle from "./stelios_comp/SingleArticle";

const contentful = require("contentful");
const client = contentful.createClient({
  space: "h5ckac8m4bnj",
  accessToken: "8QnCWCQ_AAFD1jgJtBYFzUeCK3qHz2zpZEhBrIb9oc4",
});
const App = () => {
  return (
    <>
      <div> Hello there</div>
      <SingleArticle />
    </>
  );
};

export default App;

client.getEntry("fOxW4tZa5qhXH19BD3ap4").then(function (entry) {
  // logs the entry metadata
  console.log(entry.sys);

  // logs the field with ID title
  console.log(entry.fields);
});
