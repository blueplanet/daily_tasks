class TaskList extends React.Component {
  render () {
    var taskNodes = this.props.tasks.map((task) => {
      return(
        <Task key={task.id} task={task} onUpdateTask={this.props.onUpdateTask.bind(this)} />
      );
    });

    return(
      <div className='task-list'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='form-control-static text-center bg-info'>タスク名</div>
          </div>
          <div className='col-md-2'>
            <div className='form-control-static text-center bg-success'>見積（分）</div>
          </div>
        </div>
        {taskNodes}
        <TaskSummary tasks={this.props.tasks} />
      </div>
    );
  }
}
