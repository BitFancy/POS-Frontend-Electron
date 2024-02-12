import React,{useState} from "react";
import { Table } from "antd";
import "./antd.css";

const Datatables = ({ props, columns, dataSource }) => {
  return (
    <Table    
      className="table datanew dataTable no-footer"      
      columns={columns}
      dataSource={dataSource}      
      pagination={false}
      rowKey={(record) => record.id}
    />
  );
};

export default Datatables;
