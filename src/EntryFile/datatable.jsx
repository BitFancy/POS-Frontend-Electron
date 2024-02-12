import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import './antd.css';
import { itemRender, onShowSizeChange } from '../components/pagination';

const Datatable = ({ props, columns, dataSource }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { t } = useTranslation();
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <Table
      key={props}
      className="table datanew dataTable no-footer"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
      pagination={{
        total: dataSource.length,
        showTotal: (total, range) =>
          ` ${range[0]} ${t('to')} ${range[1]} ${t('of')} ${total} ${t(
            'items'
          )}`,
        showSizeChanger: true,
        onShowSizeChange: onShowSizeChange,
      }}
      rowKey={(record) => record.id}
    />
  );
};

export default Datatable;
