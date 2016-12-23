class TaskBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tasks: props.tasks };
  }

  render () {
    return(
      <TaskList tasks={this.state.tasks} />
    );
  }
}
