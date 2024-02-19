import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Product62, Product63 } from '../../EntryFile/imagePath';
import MainProduct from '../../MainPage/Component/MainProduct';
import SubProductOne from '../../MainPage/Component/SubProductOne';
import SubProductTwo from '../../MainPage/Component/SubProductTwo';
import SubProductThree from '../../MainPage/Component/SubProductThree';
import { api } from '../../utils/api';
import Addon from '../../MainPage/Component/AddOn';
import { useOrderContext } from '../../context/OrderContext';
import { useTranslation } from 'react-i18next';
import './index.css';

const Posleft2 = (props) => {
  const [mainProducts, setMainProducts] = useState([]);
  const [subProductOne, setSubProductOne] = useState([]);
  const [subProductTwo, setSubProductTwo] = useState([]);
  const [subProductThree, setSubProductThree] = useState([]);
  const [addOn, setAddOn] = useState([]);
  const [minus, setMinus] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [isCategoryActive, setIsCategoryActive] = useState({});
  const { t } = useTranslation();

  // const { changeAction, setChangeAction } = useOrderContext();

  const handleActiveClear = () => {
    Object.keys(props.activeState).map((key) => {
      props.activeState[key] = false;
    });
    props.setActiveState({ ...props.activeState });
    props.setProductList([]);
  };

  useEffect(() => {
    const tempActiveState = {};
    props.productList.map((product) => {
      tempActiveState[product._id] = true;
    });
    props.setActiveState({ ...tempActiveState });
  }, [props.productList]);

  useEffect(() => {
    (async () => {
      const res = await api.get('/product');
      setProducts(res.data);
    })();
  }, []);

  const handleSubmit = async (id) => {
    const tempCategoryActive = { ...isCategoryActive };
    Object.keys(tempCategoryActive).map((key) => {
      tempCategoryActive[key] = false;
    });
    setIsCategoryActive({ ...tempCategoryActive, [id]: true });

    // const updatedActiveCategories = Object.keys(isCategoryActive).reduce(
    //   (acc, key) => {
    //     if (key === id) {
    //       acc[key] = true;
    //     } else {
    //       acc[key] = false;
    //     }
    //     return acc;
    //   },
    //   {}
    // );

    // console.log(updatedActiveCategories);

    // setIsCategoryActive(updatedActiveCategories);

    setMainProducts(
      products.filter(
        (item) =>
          item.category.map((category) => category._id).includes(id) &&
          item.productType.includes(1)
      )
    );

    setSubProductOne(
      products.filter(
        (item) =>
          item.category.map((category) => category._id).includes(id) &&
          item.productType.includes(2)
      )
    );
    setSubProductTwo(
      products.filter(
        (item) =>
          item.category.map((category) => category._id).includes(id) &&
          item.productType.includes(3)
      )
    );
    setSubProductThree(
      products.filter(
        (item) =>
          item.category.map((category) => category._id).includes(id) &&
          item.productType.includes(4)
      )
    );
    setAddOn(products.filter((item) => item.productType.includes(5)));
    setMinus(products.filter((item) => item.productType.includes(6)));
    // });
  };

  useEffect(() => {
    const categoryIds = props.categories.map((category) => category.id);
    setIsCategoryActive({ ...isCategoryActive, [categoryIds[0]]: true });

    setMainProducts(
      products.filter(
        (item) =>
          item.category[0]._id === categoryIds[0] &&
          item.productType.includes(1)
      )
    );
    setSubProductOne(
      products.filter(
        (item) =>
          item.category[0]._id === categoryIds[0] &&
          item.productType.includes(2)
      )
    );
    setSubProductTwo(
      products.filter(
        (item) =>
          item.category[0]._id === categoryIds[0] &&
          item.productType.includes(3)
      )
    );
    setSubProductThree(
      products.filter(
        (item) =>
          item.category[0]._id === categoryIds[0] &&
          item.productType.includes(4)
      )
    );
    setAddOn(products.filter((item) => item.productType.includes(5)));
    setMinus(products.filter((item) => item.productType.includes(6)));
  }, [products]);

  // const handleSelected = (id, isActive) => {
  //   if (isActive === true) {
  //     setProductList([...productList, id]);
  //   } else {
  //     setProductList(productList.filter((item) => item !== id));
  //   }
  // };

  const showMainProducts = mainProducts.map((product, index) => {
    return (
      <MainProduct
        productId={product._id}
        activeState={props.activeState}
        setActiveState={props.setActiveState}
        key={index}
        name={product.productName}
        price={product.price}
        handleSelected={props.handleSelected}
      />
    );
  });

  const showSubProductOne = subProductOne.map((product, index) => {
    return (
      <SubProductOne
        productId={product._id}
        key={index}
        name={product.productName}
        price={product.price}
        handleSelected={props.handleSelected}
        activeState={props.activeState}
        setActiveState={props.setActiveState}
      />
    );
  });
  const showSubProductTwo = subProductTwo.map((product, index) => {
    return (
      <SubProductTwo
        productId={product._id}
        key={index}
        name={product.productName}
        price={product.price}
        handleSelected={props.handleSelected}
        activeState={props.activeState}
        setActiveState={props.setActiveState}
      />
    );
  });
  const showSubProductThree = subProductThree.map((product, index) => {
    return (
      <SubProductThree
        productId={product._id}
        key={index}
        name={product.productName}
        price={product.price}
        handleSelected={props.handleSelected}
        activeState={props.activeState}
        setActiveState={props.setActiveState}
      />
    );
  });

  return (
    <div className="col-lg-7 col-sm-12 tabs_wrapper">
      <div className="order-list">
        <div className="orderid">
          <h4>{t('pos.product_menu')}</h4>
        </div>
      </div>
      <div className="card card-order">
        <div className="split-card"></div>
        <div className="row">
          <div className="col-3 border-end">
            <div className="">
              <div className="category-table">
                {props.categories.map((category, index) => (
                  <div
                    onClick={() => {
                      handleSubmit(category.id);
                    }}
                    key={index}
                    id={category.text}
                    className={`d-flex justify-content-center ${
                      isCategoryActive[category.id]
                        ? 'product-lists-category-selected'
                        : 'product-lists'
                    }`}
                    style={{
                      // transform: 'hover:scale(1.1)',
                      boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.15)',
                      margin: '1rem 2rem',
                      border: '2px',
                      // borderRadius: '6rem 1rem 6rem 2rem',
                      color: `${
                        isCategoryActive[category.id]
                          ? 'rgba(0,0,0,0.7)'
                          : 'rgba(0, 0, 0, 0.5)'
                      }`,
                    }}
                  >
                    <p
                      style={{
                        fontSize: `${
                          isCategoryActive[category.id] ? '20px' : '18px'
                        }`,
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {category.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="col-9"
            style={{ paddingBottom: '10px', height: '92%' }}
          >
            {/* <div className=""> */}
            <div className="product-table m-2 d-flex flex-column justify-content-between">
              {/* {showMainProducts.length > 0 && (
                    <div className="row">
                      <div className="col-10">
                        <h4>Products</h4>
                      </div>
                      <div className="col-2">
                        {props.productList.length > 0 && (
                          <div className="totalitem">
                            <div onClick={handleActiveClear}>Clear all</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )} */}
              <div>
                <div className="flex-wrap d-flex">{showMainProducts}</div>
                <div className="flex-wrap d-flex mt-3">{showSubProductOne}</div>
              </div>
              <div>
                <div className="flex-wrap d-flex mt-3">{showSubProductTwo}</div>
                <div className="flex-wrap d-flex mt-3">
                  {showSubProductThree}
                </div>
              </div>
            </div>
            <div
              className="row p-0 m-0 d-flex justify-content-end border-top"
              style={{ marginBottom: '10px', padding: '20px 20px 0px 20px' }}
            >
              {addOn.length > 0 && (
                <div className="col-4 mt-2">
                  <button
                    className="btn btn-adds"
                    data-bs-toggle="modal"
                    data-bs-target="#addon"
                  >
                    <i className="fa fa-plus me-2" />
                    {t('pos.addon')}
                  </button>
                </div>
              )}
              {minus.length > 0 && (
                <div className="col-4 mt-2">
                  <button
                    to="#"
                    className="btn btn-adds"
                    data-bs-toggle="modal"
                    data-bs-target="#minus"
                  >
                    <i className="fa fa-minus me-2" />
                    {t('pos.minus')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posleft2;
