const Markers = props => {
  const markersPerBox = props.boxes * props.markers;

  return <h2>2.Total markers: {markersPerBox}</h2>;
};

export default Markers;
