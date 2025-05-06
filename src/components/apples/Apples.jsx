const Apples = ({ totalApples, boxes }) => {
  const applesPerBox = totalApples / boxes;

  return <h2>5.Apples per box: {applesPerBox}</h2>;
};

export default Apples;
