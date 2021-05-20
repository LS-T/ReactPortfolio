import React from "react";
import "./styles.css";
import Container from "../Container";

function RepoCard(props) {
  const { deploy, image, name, gitHub } = props.content;
  console.log(image)
  return (
    <Container>
      <div className="col-md-6 mt-5">
            <div>
                <p className="text">{name}</p>
            </div>

            <a href={deploy}>
            <img src={`${process.env.PUBLIC_URL}${image}`}alt={name} className="card1" />
            </a>
            <a className="gitHub" href={gitHub}>
            Repo
            </a>
      </div>
    </Container>
  );
}

export default RepoCard;
