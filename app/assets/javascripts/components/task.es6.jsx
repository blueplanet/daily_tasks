class Task extends React.Component {
  render () {
    return(
      <div className='row task-item' key={this.props.task.id}>
        <div className='col-md-8'>
          <div className='form-control-static text-center'>{this.props.task.name}</div>
        </div>
        <div className='col-md-2'>
          <div className='form-control-static text-center'>{this.props.task.estimate}</div>
        </div>
      </div>
    );
  }
}
