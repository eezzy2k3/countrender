import { useParams } from "react-router-dom";

const CountdownPage = () => {
  const { event } = useParams();
  return event;
};
export default CountdownPage;
