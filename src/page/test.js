import React, { Component } from "react";
import { Upload, message, Button, Icon } from "antd";
import base from '../services/base';
import Player from "../components/Player";

class Test extends Component {


  handleUploadChange(info){
    if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }

  render() {
    return (
      <div style={{width: "100%"}}>
        <Player/>
        {/* <Upload
            action = {`${base}/upload`} 
            onChange={this.handleUploadChange.bind(this)}>
          <Button>
            <Icon type="upload" /> 上传
          </Button>
        </Upload> */}
      </div>
    );
  }
}

export default Test;
