import React from "react";

function ProjectInfo(props) {
  return (
    <>
      <h1 className="display-1 text-center">{props.headline}</h1>
      <blockquote className="blockquote">
        <p className="box-p">
          In this section I will try to explain why I decided to create the
          Cook Book app. First of all, of course, I love cooking. Ever since I
          was a little kid, I've been hanging around in my mom or grandma's
          kitchen. I was always diligently helping them and watching the
          creation of what the whole family would then sit down to for lunch. As
          time went on, I took the plunge and started cooking on my own as well,
          I think I would be able to cook anything now. Of course you need
          recipes when you cook, whether you follow them literally or use them
          as inspiration.
        </p>
      </blockquote>
    </>
  );
}

export default ProjectInfo;
