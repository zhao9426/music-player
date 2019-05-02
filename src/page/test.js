import React, { Component } from "react";
import { Upload, message, Button, Icon } from "antd";
import base from '../services/base';
// import PropTypes from "prop-types";
import { observer, PropTypes } from "mobx-react";

@observer
class Bar extends Component {
  static propTypes = {
    queue: PropTypes.observableArray //PropTypes.array
  };

  render() {
    const { queue } = this.props;
    return <span>{queue.length}</span>;
  }
}

class Foo extends Component {
  static propTypes = {
    cache: PropTypes.observableObject //PropTypes.object
  };

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
    const { cache, refresh } = this.props;
    return (
      <div>
        <Upload
            action = {`${base}/upload`} 
            onChange={this.handleUploadChange.bind(this)}>
          <Button>
            <Icon type="upload" /> 上传
          </Button>
        </Upload>
        <Bar queue={cache.queue} />
        <button onClick={refresh}>Refresh</button>
      </div>
    );
  }
}

export default Foo;
