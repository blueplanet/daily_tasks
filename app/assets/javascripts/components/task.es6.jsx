class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {editMode: false};
  }

  onClickEdit () {
    this.setState({editMode: true});
  }

  render () {
    return(
      <div className='row task-item' key={this.props.task.id}>
        <div className='col-md-8'>
          <div className='form-control-static text-center {this.state.editMode ? "hide" : ""}'>{this.props.task.name}</div>
        </div>
        <div className='col-md-2'>
          <div className='form-control-static text-center'>{this.props.task.estimate}</div>
        </div>
        <div className='col-md-2'>
          <div className='form-control-static text-center'>
            <a href='#' className='edit' onClick={this.onClickEdit.bind(this)}>
              <span className='glyphicon glyphicon-edit'></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
