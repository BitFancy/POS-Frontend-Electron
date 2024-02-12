import React, { useEffect, useState } from 'react';
import { Upload } from '../../EntryFile/imagePath';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import { api } from '../../utils/api';
import alertify from 'alertifyjs';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [productType, setProductType] = useState('');
  const [price, setPrice] = useState('');
  const { t } = useTranslation();

  const productTypes = [
    { id: 1, text: t('product_type.main_product') },
    { id: 2, text: t('product_type.sub_product_one') },
    { id: 3, text: t('product_type.sub_product_two') },
    { id: 4, text: t('product_type.sub_product_three') },
    { id: 5, text: t('product_type.addon') },
    { id: 6, text: t('product_type.minus') },
  ];

  const data = {
    productName,
    category,
    productType,
    price,
  };

  const handleSubmit = async () => {

    await api
      .post('/product/add', data)
      .then((res) => {
        alertify.success('Successfully Product Added');
        setProductName('');
        setCategory('');
        setProductType('');
        setPrice('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const getCategoryType = async () => {
      await api.get('/category/all').then((res) => {
        res.data.forEach((row) => {
          setCategories((prevCategory) => [
            ...prevCategory,
            { id: row._id, text: row.categoryName },
          ]);
        });
      });
    };
    getCategoryType();
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>{t('add_product.title')}</h4>
              <h6>{t('add_product.description')}</h6>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>{t('add_product.product_name')}</label>
                    <input
                      type="text"
                      onChange={(event) => setProductName(event.target.value)}
                      value={productName}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>{t('add_product.category')}</label>
                    <Select2
                      className="select"
                      data={categories}
                      options={{
                        placeholder: t('add_product.choose_category'),
                      }}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>{t('add_product.product_type')}</label>
                    <Select2
                      className="select"
                      data={productTypes}
                      options={{
                        placeholder: t('add_product.choose_product_type'),
                      }}
                      onChange={(e) => setProductType(e.target.value)}
                      value={productType}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>{t('price')}</label>
                    <input
                      type="text"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-submit me-2"
                  >
                    {t('submit')}
                  </button>
                  <button className="btn btn-cancel">{t('cancel')}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
