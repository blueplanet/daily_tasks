class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {editMode: false, task: props.task};
  }

  onClickEdit (e) {
    e.preventDefault();
    this.setState({editMode: true});
  }

  onClickUpdate (e) {
    e.preventDefault();
    this.setState({editMode: false});

    this.props.onUpdateTask(this.state.task);
  }

  onChangeName (e) {
    this.state.task.name = e.target.value.trim();
    this.setState({task: this.state.task});
  }

  onChangeEstimate (e) {
    this.state.task.estimate = parseInt(e.target.value.trim());
    this.setState({task: this.state.task});
  }

  render () {
    return(
      <div className='row task-item' key={this.props.task.id}>
        <div className='col-md-8'>
          <div className={'form-control-static text-center ' + (this.state.editMode ? 'hide' : '')}>{this.state.task.name}</div>
          <input className={'form-control ' + (this.state.editMode ? '' : 'hide')} type='text' value={this.state.task.name} onChange={this.onChangeName.bind(this)} />
        </div>
        <div className='col-md-2'>
          <div className={'form-control-static text-center ' + (this.state.editMode? 'hide' : '')}>{this.state.task.estimate}</div>
          <input className={'form-control ' + (this.state.editMode ? '' : 'hide')} type='text' value={this.state.task.estimate} onChange={this.onChangeEstimate.bind(this)} />
        </div>
        <div className='col-md-2'>
          <div className={'form-control-static text-center ' + (this.state.editMode ? 'hide' : '')}>
            <a href='#' className='edit' onClick={this.onClickEdit.bind(this)}>
              <span className='glyphicon glyphicon-edit'></span>
            </a>
          </div>
          <a href='#' className={'btn btn-primary btn-block ' + (this.state.editMode ? '' : 'hide')} onClick={this.onClickUpdate.bind(this)}>
            保存
          </a>
        </div>
      </div>
    );
  }
}
