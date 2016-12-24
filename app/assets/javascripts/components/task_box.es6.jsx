class TaskBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tasks: props.tasks };
  }

  render () {
    return(
      <div className='task-box'>
        <TaskForm />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}
