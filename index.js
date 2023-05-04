const element = (
  // Write your code here.
  <div className="container">
    <h1 className="mainHeading">congratulations</h1>

    {/* card container */}
    <div className="container2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="mainHeading">kiran V</h1>
      <p class="paraElement">
        Vishnu institue of computer education and technlolgy,Bhimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
