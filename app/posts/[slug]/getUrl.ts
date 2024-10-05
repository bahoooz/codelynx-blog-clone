export const getUrl = () => {
    if (process.env.NODE_ENV === "production") {
      return "https://codelynx-blog-clone-r22gtnt97-bahooozs-projects.vercel.app/";
    }
  
    return "http://localhost:3000";
  };