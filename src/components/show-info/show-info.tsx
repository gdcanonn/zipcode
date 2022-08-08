import { ZipCode } from "utils/@types";

const ShowInfo = ({ ...props }: ZipCode) => {
  return <p>
    <strong>Country: </strong>{props.country_code}&nbsp;&nbsp;&nbsp;
    <strong>Place: </strong>{props.place}&nbsp;&nbsp;&nbsp;
    <strong>State: </strong>{props.state}&nbsp;&nbsp;&nbsp;
    <strong>State code: </strong>{props.state_code}&nbsp;&nbsp;&nbsp;
    <strong>Province: </strong>{props.province}&nbsp;&nbsp;&nbsp;
    <strong>Province code: </strong>{props.province_code}&nbsp;&nbsp;&nbsp;
    <strong>Longitude: </strong>{props.longitude}&nbsp;&nbsp;&nbsp;
    <strong>Latitude: </strong>{props.latitude}
  </p>;
}

export default ShowInfo