const CreatePost = () => {
  return (
    <form
      className="container d-flex flex-column justify-content-between align-items-center flex-wrap"
      action="https://localhost:5000/posts"
      enctype="multipart/form-data"
      method="post"
    >
      <div className="col-6 form-group">
        <input
          type="text"
          className="mt-5 form-control"
          placeholder="Title"
          name="title"
        />
        <input
          type="text"
          placeholder="Author"
          className="mt-5 form-control"
          name="author"
        />
      </div>
      <div class="col-6 mt-5 form-group">
        <label for="exampleFormControlTextarea1">Article</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="12"
          name="paragraph"
        ></textarea>
      </div>
      <input
        type="file"
        className=" col-6 mt-5 form-control-file align-self-center"
        name="avatar"
      />
      <button type="submit" className="col-3 mt-5 btn btn-primary">
        Create new post
      </button>
    </form>
  );
};

export default CreatePost;
