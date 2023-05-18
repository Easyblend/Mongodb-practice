import React from "react";

export const Deposit = () => {
  return (
    <div className="container">
      <h1
        className="text-center mx-auto my-5 border-bottom border-4 border-dark"
        style={{ width: "fit-content" }}>
        Deposit Funds
      </h1>
      <div className="row mt-5">
        <div className="col">
          <div
            className="bg-dark text-light rounded-3 p-4 "
            style={{ width: "fit-content" }}>
            <h6>Current Balance</h6>
            <h1 className=" display-1 fw-bold">&#8373; 198.00</h1>
          </div>

          <div className="mt-5">
            <form class="row g-3">
              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Password
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Amount in &#8373;"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">
                  Deposit &#8373;500
                </button>
              </div>
            </form>
          </div>
          <div className="my-5">
            <p className="text-secondary">
              This is a Test for MongoDB noSQL database, You can laugh at <br />
              Dont mind my UI, once again this is just a front end page to test
              my backend
            </p>
            <div className="gap-2 d-flex mx-auto ">
              <button className="btn btn-success">I laughed</button>
              <button className="btn btn-secondary">I didn't</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img
            src="https://www.freepngimg.com/thumb/smartphone/68695-mobile-smartphone-design-iphone-apple-free-hd-image.png"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};
