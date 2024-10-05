export const getUrl = () => {
/*************  ✨ Codeium Command 🌟  *************/
    if (process.env.NODE_ENV === "production") {
      return (
        process.env.VERCEL_URL ||
        "https://codelynx-blog-clone-r22gtnt97-bahooozs-projects.vercel.app/"
      );
    }/******  e763d24d-02c4-4e91-8fd5-1af3fa6e1b5f  *******/
  
    return "http://localhost:3000";
  };