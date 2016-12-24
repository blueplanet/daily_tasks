class TaskForm extends React.Component {
  render() {
    return(
      <form className='form'>
        <div className='form-group'>
          <div className='col-md-8'>
            <input className='form-control' type='text' ref='name' placeholder='タスク内容'></input>
          </div>
          <div className='col-md-2'>
            <input className='form-control' type='text' ref='estimate' placeholder='見積（分）'></input>
          </div>
          <div className='col-md-2'>
            <input className='btn btn-primary btn-block' type='submit' value='追加'></input>
          </div>
        </div>
      </form>
    );
  }
}
