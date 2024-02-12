import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Table from '../../EntryFile/datatable';
import Tabletop from '../../EntryFile/tabletop';
import {
  PlusIcon,
  EyeIcon,
  EditIcon,
  DeleteIcon,
  search_whites,
} from '../../EntryFile/imagePath';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import { api } from '../../utils/api';
import Spinner from '../Component/Spinner';
import alertify from 'alertifyjs';
import LoadingSpinner from '../../InitialPage/Sidebar/LoadingSpinner';
import { useTranslation } from 'react-i18next';
// import useProduct from '../../hooks/useProduct';

const ProductList = () => {
  const [inputfilter, setInputfilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  // const [productData, setProductData] = useState({});
  const togglefilter = (value) => {
    setInputfilter(value);
  };
  const confirmDelete = (id) => {
    alertify.confirm(
      'Delete Product',
      'Are you sure you want to delete this product?',
      function () {
        api.delete(`/product/delete/${id}`).then((response) => {
          setData(data.filter((item) => item._id !== id));
        });
        alertify.success('Product deleted successfully');
      },
      function () {}
    );
  };

  const columns = [
    {
      title: t('products.table.product_name'),
      dataIndex: 'productName',
      sorter: (a, b) => a.productName.length - b.productName.length,
    },
    {
      title: t('products.table.category'),
      dataIndex: 'category',
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: t('products.table.product_type'),
      dataIndex: 'productType',
      sorter: (a, b) => a.unit.length - b.unit.length,
    },
    {
      title: t('price'),
      dataIndex: 'price',
      sorter: (a, b) => a.price.length - b.price.length,
    },
    {
      title: t('action'),
      render: (data) => {
        return (
          <>
            <Link
              className="me-3"
              to={`/dream-pos/product/product-details/${data._id}`}
            >
              <img src={EyeIcon} alt="img" />
            </Link>
            <Link
              className="confirm-text"
              to="#"
              onClick={() => confirmDelete(data._id)}
            >
              <img src={DeleteIcon} alt="img" />
            </Link>
          </>
        );
      },
    },
  ];

  // const handleViewProduct = (data) => {
  //   setProductData(data);
  // };

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    (async () => {
      const fetchData = await api.get('/product/');
      let inputData = fetchData.data;
      for (let i = 0; i < inputData.length; i++) {
        for (let j = 0; j < inputData[i].category.length; j++) {
          inputData[i].category[
            j
          ] = `${inputData[i].category[j].categoryName}, `;
        }
        inputData[i].category[inputData[i].category.length - 1] = inputData[
          i
        ].category[inputData[i].category.length - 1].slice(0, -2);
        for (let k = 0; k < inputData[i].productType.length; k++) {
          switch (inputData[i].productType[k]) {
            case 0:
              inputData[i].productType[k] = 'Main Product';
              break;
            case 1:
              inputData[i].productType[k] = 'Sub Product1';
              break;
            case 2:
              inputData[i].productType[k] = 'Sub Product2';
              break;
            case 3:
              inputData[i].productType[k] = 'Sub Product3';
              break;
            case 4:
              inputData[i].productType[k] = 'Addon';
              break;
            case 5:
              inputData[i].productType[k] = 'Minus';
              break;
          }
        }
      }
      setData(inputData);
    })();
  }, []);

  // if (!data.length) {
  //   return <LoadingSpinner />;
  // }
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>{t('products.title')}</h4>
              <h6>{t('products.description')}</h6>
            </div>
            <div className="page-btn">
              <Link
                to="/main/product/addproduct-product"
                className="btn btn-added"
              >
                <img src={PlusIcon} alt="img" className="me-1" />
                {t('products.add_button')}
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <Tabletop inputfilter={inputfilter} togglefilter={togglefilter} />
              <div
                className={`card mb-0 ${inputfilter ? 'toggleCls' : ''}`}
                id="filter_inputs"
                style={{ display: inputfilter ? 'block' : 'none' }}
              ></div>
              <div className="table-responsive">
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
