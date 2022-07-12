export default function Discription(props) {
  return (
    <span>
       <div>
        <h1>About</h1>
        <hr />
        <h3>Description</h3>
        <p>{props.profile.Description}</p>
      </div>
      <br /> 
      </span>
  );
}
