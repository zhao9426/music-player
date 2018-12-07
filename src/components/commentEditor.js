import React, { Component } from "react";
import { Form, Button } from "antd";

export default class Editor extends Component {
    render() {
        const { onChange, onSubmit, submitting, value } = this.props
        return (
            <div>
                <Form.Item>
                    <TextArea rows={4} onChange={onChange} value={value} />
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        loading={submitting}
                        onClick={onSubmit}
                        type="primary"
                    >
                        Add Comment
                    </Button>
                </Form.Item>
            </div>
        )
    }
}