import React from 'react';
import { Table, Divider, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

const CommonTable = props => {
    return <Table dataSource={props.tableData.data}>
            {props.tableData.header.map(field => <Column
        title={<span style={{textTransform: "capitalize"}}>
                    { field.replace(/([a-z])([A-Z])/g, '$1 $2') }
            </span>}
        dataIndex={field}
        key={field}
      />)}
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <span>
          <a href="javascript:;">Invite {record.lastName}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      )}
    />
  </Table>
}

export default CommonTable;



