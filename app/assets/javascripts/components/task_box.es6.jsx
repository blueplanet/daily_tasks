class TaskBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tasks: props.tasks };
  }

  onAddTask(task) {
    var tasks = this.state.tasks;
    var newTasks = tasks.concat(task);
    this.setState({tasks: newTasks});

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

  onUpdateTask(task) {
    this.setState({tasks: this.state.tasks});

    $.ajax({
      url: '/tasks/' + task.id,
      dataType: 'json',
      type: 'PATCH',
      data: {task: task},
      success: (tasks) => { this.setState({tasks: tasks}); },
      errors: (xhr, status, error) => {
        console.error(status, err.toString());
      }
    })
  }

  render () {
    return(
      <div className='task-box'>
        <TaskForm onAddTask={this.onAddTask.bind(this)} />
        <TaskList tasks={this.state.tasks} onUpdateTask={this.onUpdateTask.bind(this)} />
      </div>
    );
  }
}
