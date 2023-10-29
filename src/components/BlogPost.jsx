import Card from "./Card";
import MainTitle from "./MainTitle";
import Title from "./Title";

function BlogPost() {
  return (
    <div className="blogpost">
      <Title />
      <MainTitle />
      <div className="bogpostcard">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default BlogPost;
