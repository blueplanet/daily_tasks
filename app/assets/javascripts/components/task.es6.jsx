class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {editMode: false, task: props.task};
  }

  onClickEdit (e) {
    e.preventDefault();
    this.setState({editMode: true});
  }

  onChangeName (e) {
    // this.setState({name: e.target.value.trim()});
    console.log('on change name!!!!!!!!!!!!!!!!!!!!!!!!!');
  }

  onChangeEstimate (e) {
    this.setState({estimate: parseInt(e.target.value.trim())});
  }

  render () {
    return(
      <div className='row task-item' key={this.props.task.id}>
        <div className='col-md-8'>
          <div className={'form-control-static text-center ' + (this.state.editMode ? 'hide' : '')}>{this.props.task.name}</div>
          <input className={'form-control ' + (this.state.editMode ? '' : 'hide')} type='text' value={this.state.task.name} onChange={this.onChangeName.bind(this)} />
        </div>
        <div className='col-md-2'>
          <div className={'form-control-static text-center ' + (this.state.editMode? 'hide' : '')}>{this.props.task.estimate}</div>
          <input className={'form-control ' + (this.state.editMode ? '' : 'hide')} type='text' value={this.props.task.estimate} onChange={this.onChangeEstimate.bind(this)} />
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
