const Caramels = props => {
  const remainingCaramel = props.totalCaramels % props.groups;

  return <h2> 3.Caramels left: {remainingCaramel}</h2>;
};

export default Caramels;
