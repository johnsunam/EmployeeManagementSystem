import React from 'react';
import { Table, Divider, Tag, Button } from 'antd';
import Link from 'next/link';
const { Column, ColumnGroup } = Table;

const CommonTable = props => {
    return <Table 
              dataSource={props.tableData.data} 
              rowKey={record => record._id}
              >
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
          <Link href={`/users/profile?user=${record._id}&org=${record.org}`} as={`users/${record._id}/profile`} ><a>Profile Detail</a></Link>
          <Divider type="vertical" />
          <Button type="danger" ghost onClick={()=> props.delete(record._id)}>Delete</Button>
        </span>
      )}
    />
  </Table>
}

export default CommonTable;



