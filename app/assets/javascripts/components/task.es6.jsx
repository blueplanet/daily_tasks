class Task extends React.Component {
  render () {
    return(
      <tr className='task-item' key={this.props.task.id}>
        <td>{this.props.task.name}</td>
        <td>{this.props.task.estimate}</td>
      </tr>
    );
  }
}
