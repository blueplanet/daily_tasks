class TaskList extends React.Component {
  render () {
    var taskNodes = this.props.tasks.map((task) => {
      return(
        <Task key={task.id} task={task} />
      );
    });

    return(
      <table className='table task-list'>
        <thead>
          <tr>
            <td>タスク名</td>
            <td>見積（分）</td>
          </tr>
        </thead>
        <tbody>
          {taskNodes}
        </tbody>
      </table>
    );
  }
}
