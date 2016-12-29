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
      <div className='row'>
        <hr />
        <div className='col-md-8'>
          <div className='form-control-static text-right'>
            <i>合計</i>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='form-control-static text-center'>{this.estimateTotal()}</div>
        </div>
      </div>
    );
  }
}
