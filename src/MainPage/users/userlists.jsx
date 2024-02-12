import React, { useEffect, useState } from 'react';
import Table from '../../EntryFile/datatable';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  Calendar,
  Printer,
  search_whites,
  Search,
  PlusIcon,
  EditIcon,
  DeleteIcon,
} from '../../EntryFile/imagePath';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import { api } from '../../utils/api';
import { useTranslation } from 'react-i18next';

const UserLists = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [inputfilter, setInputfilter] = useState(false);
  const [userList, setUserList] = useState([]);
  const { t } = useTranslation();

  const options = [
    { id: 1, text: 'Disable', text: 'Disable' },
    { id: 2, text: 'Enable', text: 'Enable' },
  ];
  const togglefilter = (value) => {
    setInputfilter(value);
  };

  useEffect(() => {
    // console.log(data);
    (async () => {
      await api.get('/users/all').then((res) => {
        res.data.map((user) => {
          if (user.role === 1) {
            user.role = 'Admin';
          } else {
            user.role = 'User';
          }
          user.createdAt = new Date(user.createdAt).toDateString();
        });
        setUserList(res.data);
      });
    })();
  }, []);

  const columns = [
    {
      title: t('users.table.user_name'),
      dataIndex: 'userName',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: t('email'),
      dataIndex: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: t('role'),
      dataIndex: 'role',
      sorter: (a, b) => a.Role.length - b.Role.length,
    },
    {
      title: t('created_at'),
      dataIndex: 'createdAt',
      sorter: (a, b) => a.On.length - b.On.length,
    },
    {
      title: t('action'),
      render: (text, record) => (
        <>
          <Link className="me-3" to="newuseredit">
            <img src={EditIcon} alt="img" />
          </Link>
          <Link className="me-3 confirm-text" to="#">
            <img src={DeleteIcon} alt="img" />
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>{t('users.title')}</h4>
            <h6>{t('users.description')}</h6>
          </div>
          <div className="page-btn">
            <Link to="/main/users/newuser" className="btn btn-added">
              <img src={PlusIcon} alt="img" className="me-2" />
              {t('users.add_button')}
            </Link>
          </div>
        </div>
        {/* /product list */}
        <div className="card">
          <div className="card-body">
            <div className="table-top">
              <div className="search-set">
                <div className="search-path">
                  <a
                    className={` btn ${
                      inputfilter ? 'btn-filter setclose' : 'btn-filter'
                    } `}
                    id="filter_search"
                    onClick={() => togglefilter(!inputfilter)}
                  >
                    <img src={Filter} alt="img" />
                    <span>
                      <img src={ClosesIcon} alt="img" />
                    </span>
                  </a>
                </div>
                <div className="search-input">
                  <input
                    className="form-control form-control-sm search-icon"
                    type="text"
                    placeholder={t('search')}
                  />
                </div>
              </div>
              <div className="wordset">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="pdf"
                    >
                      <img src={Pdf} alt="img" />
                    </a>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="excel"
                    >
                      <img src={Excel} alt="img" />
                    </a>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="print"
                    >
                      <img src={Printer} alt="img" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /Filter */}
            <div
              className={`card mb-0 ${inputfilter ? 'toggleCls' : ''}`}
              id="filter_inputs"
              style={{ display: inputfilter ? 'block' : 'none' }}
            >
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter User Name" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Phone" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Email" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <div className="input-groupicon">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        <div className="addonset">
                          <img src={Calendar} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="form-group">
                      <Select2
                        className="select"
                        data={options}
                        options={{
                          placeholder: 'Select',
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                    <div className="form-group">
                      <a className="btn btn-filters ms-auto">
                        <img src={search_whites} alt="img" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Filter */}
            <div className="table-responsive">
              <Table columns={columns} dataSource={userList} />
            </div>
          </div>
        </div>
        {/* /product list */}
      </div>
    </div>
  );
};

export default UserLists;
