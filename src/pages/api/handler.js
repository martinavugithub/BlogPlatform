import blogService from "../../services/blog";

export default function handler(req, res) {
    const { method } = req;
    console.log("api handler....");
    switch (method) {
      case "GET":
        res.json(blogService.getPosts());
        break;
      case "POST":
        const { title, content } = req.body;
        const newBlog = blogService.addPost({ title, content })
        res.json(newBlog);
        break;
      case "DELETE":
        const { id: blogId } = req.body;
        if (blogService.deletePost(blogId)) {
          return res.status(204);
        }
        res.status(500).json({
          message: `Deletion failed.`,
        });
        break;
      default:
        // res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
