import { useParams } from "react-router-dom";
import "./CountdownPage.css";

const CountdownPage = () => {
  const { event } = useParams();
  //Capitalize first letter of Event name
  const capitalEvent = event.charAt(0).toUpperCase() + event.slice(1);

  return (
    <div className="countdown__container">
      <h1>{capitalEvent}</h1>
      <div className="countdown flex">
        <div className="days">
          <span> 00 </span>
          <p> Days </p>
        </div>
        <div className="hours">
          <span> 00 </span>
          <p> Days </p>
        </div>
        <div className="mins">
          <span> 00 </span>
          <p> Days </p>
        </div>
        <div className="secs">
          <span> 00 </span>
          <p> Days </p>
        </div>
      </div>
    </div>
  );
};
export default CountdownPage;
