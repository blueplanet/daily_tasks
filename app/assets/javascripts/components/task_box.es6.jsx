class TaskBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tasks: props.tasks };
  }

  render () {
    return(
      <TaskForm />
      <TaskList tasks={this.state.tasks} />
    );
  }
}
