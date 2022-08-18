import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";

export default function Home() {
  const minimizeNav = () => {
    const nav = document.querySelector(".navbar")
    const len = nav.childNodes[0].childNodes.length
    console.log(nav.childNodes[0].childNodes)

    for(let i=0 ; i<len ; i++){

      if(nav.childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].style.display == "none"){
        nav.childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].style.display = "inline-block"
        nav.childNodes[0].childNodes[0].childNodes[1].style.display = "inline-block"
      }
      
      else{
        nav.childNodes[0].childNodes[i+1].childNodes[0].childNodes[1].style.display = "none"
        nav.childNodes[0].childNodes[0].childNodes[1].style.display = "none"
      }
    }

    if(document.getElementsByClassName('.content-container').style.width == '100%')
    {document.getElementsByClassName('.content-container').style.width = '80vw'}

    if(document.getElementsByClassName('.content-container').style.width == '80vw')
    {document.getElementsByClassName('.content-container').style.width = '100%'}
  };

  return (
    <>
      <div className="home-container">
        <div className="nav-container">
          <nav className="navbar">
            <ul>
              <div className="logo-img">
                <i
                  className="fa-regular fa-image"
                  style={{ color: "black" }}
                ></i>
                <span>&nbsp;&nbsp; LAUNDRY</span>
              </div>

              <li>
                <Link to="/">
                  <i
                    className="fa-solid fa-store"
                    style={{ color: "gray" }}
                  ></i>
                  <span>&nbsp; Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <i
                    className="fa-solid fa-tag"
                    style={{ color: "#c84464" }}
                  ></i>
                  <span>&nbsp; Pos</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i
                    className="fa-solid fa-basket-shopping"
                    style={{ color: "#49bd8d" }}
                  ></i>
                  <span>&nbsp; Orders</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i
                    className="fa-solid fa-list-ul"
                    style={{ color: "#d6be9a" }}
                  ></i>
                  <span>&nbsp; Order Status Screen</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i
                    className="fa-solid fa-file-lines"
                    style={{ color: "#cb4e6f" }}
                  ></i>
                  <span>&nbsp; Expense</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i
                    className="fa-solid fa-user"
                    style={{ color: "#bc3ead" }}
                  ></i>
                  <span>&nbsp; Customers</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i
                    className="fa-solid fa-tag"
                    style={{ color: "#0883f2" }}
                  ></i>
                  <span>&nbsp; Services</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i
                    className="uis uis-graph-bar"
                    style={{ color: "#e0b26b" }}
                  ></i>
                  <span>&nbsp;&nbsp; Reports</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i
                    className="fa-solid fa-gear"
                    style={{ color: "#e18a43" }}
                  ></i>
                  <span>&nbsp; Tools</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i
                    className="fa-solid fa-power-off"
                    style={{ color: "#babec2" }}
                  ></i>
                  <span>&nbsp; Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="content-container">
          <div className="top-nav-bar">
            <i
              className="fa-solid fa-bars"
              onClick={ minimizeNav }
              style={{ color: "white", cursor: "pointer" }}
            ></i>
            <div className="top-nav-right-corner">
              <i className="fa-solid fa-circle-plus"></i>
              <i className="fa-solid fa-tag"></i>
              <i className="fa-solid fa-user"></i>
              <div className="dropdown-lang">
                <button>
                  English &nbsp;<i className="fa-solid fa-angle-down"></i>
                </button>
                <div className="drop-lang">
                  <li>
                    <Link to="/">Hindi</Link>
                  </li>
                  <li>
                    <Link to="/">German</Link>
                  </li>
                  <li>
                    <Link to="/">French</Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="orders">
            <div className="order">
              <div className="order-detail">
                <span>PENDING ORDER</span>
                <h3>202</h3>
              </div>
              <button id="pending-order">
                <i className="fa-solid fa-basket-shopping"></i>
              </button>
            </div>
            <div className="order">
              <div className="order-detail">
                <span>PROCESSING ORDER</span>
                <h3>99</h3>
              </div>
              <button id="processing-order">
                <i className="fa-brands fa-react"></i>
              </button>
            </div>
            <div className="order">
              <div className="order-detail">
                <span>READY TO DELIVER</span>
                <h3>263</h3>
              </div>
              <button id="ready-to-deliver">
                <i className="fa-solid fa-thumbs-up"></i>
              </button>
            </div>
            <div className="order">
              <div className="order-detail">
                <span>DELIVERED ORDERS</span>
                <h3>345</h3>
              </div>
              <button id="delivered-orders">
                <i className="fa-solid fa-check"></i>
              </button>
            </div>
          </div>
          <div className="main-content">
            <div className="today-delivery">
              <div className="today-delivery-head">
                <h3>Today's Delivery</h3>
                <div className="search-n-orders">
                  <input type="text" placeholder="Search Here" />
                  <button>
                    All Orders<i className="fa-solid fa-angle-down"></i>
                  </button>
                </div>
              </div>

              <div className="products">
                <div className="product" id="product-1">
                  <div className="product-detail">
                    <span>98659865</span>
                    <span>ORD-0948</span>
                  </div>
                  <div className="product-type">
                    <img src="images/jacket-svgrepo-com.svg" alt="jacket" />
                  </div>
                </div>

                <div className="product" id="product-2">
                  <div className="product-detail">
                    <span>ARIF</span>
                    <span>ORD-0949</span>
                  </div>
                  <div className="product-type">
                    <img src="images/jacket-svgrepo-com.svg" alt="jacket" />
                    <img src="images/jacket-svgrepo-com.svg" alt="jacket" />
                  </div>
                </div>

                <div className="product" id="product-3">
                  <div className="product-detail">
                    <span>shiyas</span>
                    <span>ORD-0950</span>
                  </div>
                  <div className="product-type">
                    <img src="https://img.icons8.com/cotton/64/000000/cap--v4.png" />
                  </div>
                </div>

                <div className="product" id="product-4">
                  <div className="product-detail">
                    <span>Walk In Customer</span>
                    <span>ORD-0951</span>
                  </div>
                  <div className="product-type">
                    <img src="https://img.icons8.com/external-konkapp-outline-color-konkapp/64/000000/external-shoes-soccer-konkapp-outline-color-konkapp.png" alt="icons"/>
                    <img src="https://img.icons8.com/cotton/64/000000/cap--v4.png" alt="icons"/>
                  </div>
                </div>

                <div className="product" id="product-5">
                  <div className="product-detail">
                    <span>Customer 2</span>
                    <span>ORD-0952</span>
                  </div>
                  <div className="product-type">
                    <img src="images/jacket-svgrepo-com.svg" alt="jacket" />
                    <img src="images/jacket-svgrepo-com.svg" alt="jacket" />
                    <img src="https://img.icons8.com/cotton/64/000000/cap--v4.png" alt="icons"/>
                  </div>
                </div>

                <div className="product" id="product-6">
                  <div className="product-detail">
                    <span>Walk In Customer</span>
                    <span>ORD-0953</span>
                  </div>
                  <div className="product-type">
                    <img src="https://img.icons8.com/external-konkapp-outline-color-konkapp/64/000000/external-shoes-soccer-konkapp-outline-color-konkapp.png" alt="icons"/>
                    <img src="images/jacket-svgrepo-com.svg" alt="jacket" />
                    <img src="images/jacket-svgrepo-com.svg" alt="jacket" />
                    <img src="images/jacket-svgrepo-com.svg" alt="jacket" />
                  </div>
                </div>
              </div>
            </div>

            <div className="overview">
              <div>
                <h3>Overview</h3>
              </div>
              <div className="piechart"></div>
              <div className="piechart-details">
                <div className="overview-detail">
                  <button className="detail-btn" id="btn-1"></button>Pending
                </div>
                <div className="overview-detail">
                  <button className="detail-btn" id="btn-2"></button>Processing
                </div>
              </div>
              <div className="piechart-details">
                <div className="overview-detail">
                  <button className="detail-btn" id="btn-3"></button>Ready To
                  Deliver
                </div>
                <div className="overview-detail">
                  <button className="detail-btn" id="btn-4"></button>Delivered
                </div>
              </div>
              <div className="piechart-details">
                <div className="overview-detail">
                  <button className="detail-btn" id="btn-5"></button>Returned
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
