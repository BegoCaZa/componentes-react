const Mails = props => {
  const mailsPerHour = props.quantity / props.hours;

  return <h2>1.Mails per hour: {mailsPerHour}</h2>;
};

export default Mails;
