//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
  <p>Created by Niiti </p>
  <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Your Name All Rights Reserved</p>
</div>,
document.getElementById("root");
); 