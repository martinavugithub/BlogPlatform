import blogPosts, { getAll, addBlog } from './blog';

export default function handler(req, res) {
  const { method } = req;
  console.log("api handler....");
  switch (method) {
    case "GET":
      let { id } = req.query;

      if (id) {
        const blog = getAll().find((blog) => blog.id === parseInt(id));
        if (!blog) {
          res.status(404).json({
            message: `Blog with id ${id} not found.`,
          });
        } else {
          res.status(200).json(blog);
        }
      } else {
        res.status(200).json(getAll());
      }
      break;
    case "POST":
      const { title, content } = req.body;
      let uid = getAll().length ? getAll()[getAll().length - 1].id + 1 : 1;
      console.log("uid: " + uid);
      let newBlog = { id: uid, title: title, content: content };
      addBlog(newBlog);
      res.status(200).json(newBlog);
      break;
    case "PUT":
      const { id: updateId } = req.body;
      const index = getAll().findIndex((blog) => blog.id === updateId);
      if (index > -1) {
        const { title: newTitle, content: newContent } = req.body;
        getAll()[index] = { id: updateId, title: newTitle, content: newContent };
        res.status(200).json(getAll()[index]);
      } else {
        res.status(404).json({
          message: `Blog with id ${updateId} not found.`,
        });
      }
      break;
    case "DELETE":
      const { id: deleteId } = req.body;
      const deleteIndex = getAll().findIndex((blog) => blog.id === deleteId);
      if (deleteIndex > -1) {
        const deletedBlog = getAll()[deleteIndex];
        getAll().splice(deleteIndex, 1);
        res.status(200).json(deletedBlog);
      } else {
        res.status(404).json({
          message: `Blog with id ${deleteId} not found.`,
        });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
