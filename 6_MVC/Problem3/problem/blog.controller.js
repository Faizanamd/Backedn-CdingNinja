// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  // console.log(req.body);
  // validate the data
  const { title, description, image } = req.body;
  let errors = [];

  try {
    new URL(image);
  } catch (err) {
    errors.push("Image URL is invalid");
  }

  if (!title) {
    errors.push('Title cannot be empty.');
  }
  if (title.length < 3) {

    errors.push('Title should have a minimum length of three characters.');
  }

  if (!description) {
    errors.push("Description cannot be empty.");
  }
  if (description.length < 10) {
    errors.push('Description should have a minimum length of ten characters.');
  }


  if (errors.length > 0) {
    // console.log(errors);
    return res.render('addBlog', { errors: errors, success: false });
  }
  //default code

  res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
