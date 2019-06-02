import React from 'react';
import { Table } from 'antd';

class DataTable extends React.Component {
  render() {
    return (
      <Table columns={this.props.columns} dataSource={this.props.data} />
    )
  }
}
export default DataTable
