import "./App.css"
import { useState } from "react";
export default function App() {  
  const [person, setNew] = useState({
    fullName: "Shakira",
    bio: "columbian-libanese singer",
    profession: "Singer",
    imgSrc:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvs_QQIjGggmBnQY4Iojy-T5gl2SoixWEBk6xsFiTlUHXcpzJB",
  });
  const [show, setShow] = useState(false);
  function Profile() {
  return  setShow(!show);
  }
  return (
    <>
    <div className="comp">
      <h1>Profile</h1>
      <button onClick={Profile}>Click me</button>
      {show && (
        <div>
          <div className="mia">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p> {person.profession}</p>
            <p>{person.bio}</p>
          </div>
        </div>
        
      )}</div>
    </>
  );
}
