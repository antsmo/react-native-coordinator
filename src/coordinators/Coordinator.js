const Coordinator = props => {
  const { currentScreen, children } = props;
  return children.find(screen => screen.props.id === currentScreen);
};

export default Coordinator;
