class Task extends React.Component {
  render () {
    return(
      <tr className='task-item'>
        <td>{this.props.task.name}</td>
        <td>{this.props.task.estimate}</td>
      </tr>
    );
  }
}
