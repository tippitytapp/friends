import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
      this.setState({
        selectedFile: event.target.files[0]
      })
    console.log(event.target.files[0])
  }
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.post('http://localhost:5000/uploads', fd)
      .then(res => {
        console.log(res)
      })
  }

  render(){
  return (
    <div className="App">
      <form onSubmit={this.fileUploadHandler} encType="multipart/form-data">
      <input type="file" accept="image/*" onChange={this.fileSelectedHandler} />
      <button>Submit</button>
      </form>
    </div>
  );
}
}

export default App;
