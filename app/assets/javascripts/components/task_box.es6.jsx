class TaskBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tasks: props.tasks };
  }

  onAddTask(task) {
    var tasks = this.state.tasks;
    var newTasks = [task].concat(tasks);
    this.setState({tasks: newTasks});

    // TODO: post to server
    $.ajax({
      url: '/tasks',
      dataType: 'json',
      type: 'POST',
      data: {task: task},
      success: (tasks) => { this.setState({tasks: tasks}); },
      errors: (xhr, status, error) => {
        console.error(status, err.toString());
      }
    });
  }

  render () {
    return(
      <div className='task-box'>
        <TaskForm onAddTask={this.onAddTask.bind(this)} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}
