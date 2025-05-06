const Apples = props => {
  const applesPerBox = props.totalApples / props.boxes;

  return <h2>5.Apples per box: {applesPerBox}</h2>;
};

export default Apples;
