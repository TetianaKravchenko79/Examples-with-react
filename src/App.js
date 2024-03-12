import React from "react";
import Counter from "./components/counter/Counter";
import MyModal from "./components/modal/MyMOdal";
import MyModal2 from "./components/modal/MyModal2";
import List from "./components/List";
import Currency from "./components/currency converter/Currency";
import Photos from "./components/photos/Photos";

function App() {
  return (
    <div>
      <div
        style={{
          fontSize: "50px",
          display: "flex",
          justifyContent: "center",
          color: "brown",
          textShadow: "2px 2px 4px #000000",
        }}
      >
        Hello everyone!
      </div>
      <Counter />
      <div
        style={{
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
          marginTop: " 30px",
          textShadow: "2px 2px 5px green",
        }}
      >
        This is Modal Window! ↓ ↓ ↓
      </div>
      <MyModal />
      <div
        style={{
          fontSize: "40px",
          display: "flex",
          justifyContent: "center",
          marginTop: " 30px",
          textShadow: "2px 2px 5px green",
        }}
      >
        The next point is little quiz! ↓ ↓ ↓
      </div>
      <MyModal2 />
      <div
        style={{
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          marginTop: " 40px",
          textShadow: "2px 2px 5px green",
        }}
      >
        <p
          style={{
            fontSize: "30px",
          }}
        >
          You can invite every user you want for your event! ↓ ↓ ↓
        </p>
      </div>
      <List />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 150px",
        }}
      >
        <p
          style={{
            fontSize: "30px",
          }}
        >
          If you have your own API key you add it into the code and use this
          currency convector. If you don't have it and click this example you
          get a mistake. In this case you have reload this page
        </p>
      </div>
      <Currency />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 150px",
          marginBottom: "40px",
          textShadow: "2px 2px 5px blue",
        }}
      >
        <p style={{ fontSize: "30px" }}>
          You can see all photos into every page. If you choose one category,
          you can see less photos. There won't be enough for all pages. But you
          get the point. ☺ ☺ ☺
        </p>
      </div>
      <Photos />
    </div>
  );
}
export default App;
