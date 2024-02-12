import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import {
  ClosesIcon,
  Excel,
  Filter,
  Pdf,
  Printer,
  Search,
} from '../EntryFile/imagePath';
import { useTranslation } from 'react-i18next';

const Tabletop = ({ inputfilter, togglefilter }) => {
  const { t } = useTranslation();
  return (
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
          {/* <Link to="#" className="btn btn-searchset">
            <img src={Search} alt="img" />
          </Link> */}
        </div>
      </div>
      {/* <div className="wordset">
        <ul>
          <ReactTooltip place="top" type="dark" effect="solid" />
          <li>
            <a data-tip="Pdf">
              <img src={Pdf} alt="img" />
            </a>
          </li>
          <li>
            <a data-tip="Excel">
              <img src={Excel} alt="img" />
            </a>
          </li>
          <li>
            <a data-tip="Print">
              <img src={Printer} alt="img" />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Tabletop;
