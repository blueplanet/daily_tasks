class TaskSummary extends React.Component {
  estimateTotal () {
    var total = 0;
    for (var task of this.props.tasks) {
      total += task.estimate;
    }

    return total;
  }

  render () {
    return(
      <tr>
        <td className='text-right'>合計</td>
        <td>{this.estimateTotal()}</td>
      </tr>
    );
  }
}
