export const getUrl = () => {
    if (process.env.NODE_ENV === "production") {
      return "https://codelynx-blog-clone.vercel.app/";
    }
  
    return "http://localhost:3000";
  };