import React, { useState } from "react";
import Table from "../../EntryFile/datatable";
import { Link } from "react-router-dom";
import Tabletop from "../../EntryFile/tabletop"
import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  PlusIcon,
  Printer,
  Search,
  MacbookIcon,
  IphoneIcon,
  SamsungIcon,
  EarpodIcon,
  OrangeImage,
  PineappleImage,
  StawberryImage,
  AvocatImage,
  EyeIcon,
  EditIcon,
  DeleteIcon,
  search_whites,
} from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";

const SubCategoryList = () => {
  const options2 = [
    { id: 1, text: "Choose Category", text: "Choose Category" },
    { id: 2, text: "Computers", text: "Computers" },
    { id: 3, text: "Fruits", text: "Fruits" },
  ];
  const options3 = [
    { id: 1, text: "Choose Sub Category", text: "Choose Sub Category" },
    { id: 2, text: "Computers", text: "Computers" },
  ];
  const options4 = [
    { id: 1, text: "CT001", text: "CT001" },
    { id: 2, text: "CT002", text: "CT002" },
  ];
  const [inputfilter, setInputfilter] = useState(false);

  const togglefilter = (value) => {
    setInputfilter(value);
  };

  const [data] = useState([
    {
      id: 1,
      image: MacbookIcon,
      category: "Noodles",
      parentCategory: "Main Food",
      categoryCode: "PT001",
      description: "Computer Description",
      createdBy: "Admin",
    },
    // {
    //   id: 2,
    //   image: OrangeImage,
    //   category: "Orange",
    //   parentCategory: "Orange",
    //   categoryCode: "CTO02",
    //   description: "Fruit Description",
    //   createdBy: "Admin",
    // },
    // {
    //   id: 3,
    //   image: PineappleImage,
    //   category: "Pinapple",
    //   parentCategory: "Pinapple",
    //   categoryCode: "CTO03",
    //   description: "Fruit Description",
    //   createdBy: "Admin",
    // },
    // {
    //   id: 4,
    //   image: StawberryImage,
    //   category: "Strawberry",
    //   parentCategory: "Strawberry",
    //   categoryCode: "CTO04",
    //   description: "Fruit Description",
    //   createdBy: "Admin",
    // },
    // {
    //   id: 5,
    //   image: AvocatImage,
    //   category: "Avocat",
    //   parentCategory: "Avocat",
    //   categoryCode: "CTO05",
    //   description: "Computer Description",
    //   createdBy: "Admin",
    // },
    // {
    //   id: 6,
    //   image: MacbookIcon,
    //   category: "Macbook pro",
    //   parentCategory: "Macbook pro",
    //   categoryCode: "CTO06",
    //   description: "Computer Description",
    //   createdBy: "Admin",
    // },
  ]);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (text, record) => (
        <div className="productimgname">
          <Link to="#" className="product-img">
            <img alt="" src={record.image} />
          </Link>
        </div>
      ),
      sorter: (a, b) => a.category.length - b.category.length,
    },

    {
      title: "Category",
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Parent Category",
      dataIndex: "parentCategory",
      sorter: (a, b) => a.parentCategory.length - b.parentCategory.length,
    },
    {
      title: " Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      sorter: (a, b) => a.createdBy.length - b.createdBy.length,
    },
    {
      title: "Action",
      render: () => (
        <>
          <>
            <Link className="me-3" to="/dream-pos/product/editsubcategory-product">
              <img src={EditIcon} alt="img" />
            </Link>
            <Link className="confirm-text" to="#">
              <img src={DeleteIcon} alt="img" />
            </Link>
          </>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Sub Category List </h4>
              <h6>View/Search product Category</h6>
            </div>
            <div className="page-btn">
              <Link
                to="/dream-pos/product/addsubcategory-product"
                className="btn btn-added"
              >
                <img src={PlusIcon} alt="img" className="me-1" />
                Add Sub Category
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card">
            <div className="card-body">
              <Tabletop inputfilter={inputfilter} togglefilter={togglefilter} />
              {/* /Filter */}
              <div
                className={`card mb-0 ${ inputfilter ? "toggleCls" : ""}`}
                id="filter_inputs"
                style={{ display: inputfilter ? "block" :"none"}}
              >
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Category</label>
                        <Select2
                          className="select"
                          data={options2}
                          options={{
                            placeholder: "Choose Category",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Sub Category</label>
                        <Select2
                          className="select"
                          data={options3}
                          options={{
                            placeholder: "Choose Sub Category",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-12">
                      <div className="form-group">
                        <label>Category Code</label>
                        <Select2
                          className="select"
                          data={options4}
                          options={{
                            placeholder: "CT001",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-1 col-sm-6 col-12 ms-auto">
                      <div className="form-group">
                        <label>&nbsp;</label>
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
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
    </>
  );
};
export default SubCategoryList;
