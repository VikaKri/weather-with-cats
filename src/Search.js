import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="card mt-4 mb-5">
        <div className="card-body">
          <div className="row">
            <div className="col-10 col-sm-4">
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search City"
                  />
                  <button className="btn btn-outline-secondary" type="submit">
                    <i className="fa-solid fa-paw pawCat"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-2 col-sm-1">
              <form>
                <button className="btn btn-outline-secondary" type="button">
                  <i className="fa-solid fa-location-dot yourLocation"></i>
                </button>
              </form>
            </div>
            <div className="col-sm-7">
              <div className="mt-sm-0 mt-4 d-flex justify-content-center">
                <div>
                  <button
                    className="btn btn-outline-secondary navigation-city"
                    type="button"
                  >
                    <a href="/">London</a>
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-outline-secondary navigation-city"
                    type="button"
                  >
                    <a href="/">New York</a>
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-outline-secondary navigation-city"
                    type="button"
                  >
                    <a href="/">Tokio</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
