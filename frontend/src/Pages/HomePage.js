import React from "react";
import { useLocation   } from 'react-router-dom'
import Hero from "../Components/Hero";
import { Helmet } from 'react-helmet';


const HomePage=()=> {
  const location = useLocation();
    return (
   
      <div id="HomePage">
        <div> 
  <div className="search-section">
  <a className="close-search" href="#" />
  <div className="d-flex justify-content-center align-items-center h-100">
    <form method="post" action="#" className="w-50">
      <div className="row">
        <div className="col-10">
          <input type="search" defaultValue className="form-control palce bg-transparent border-0 search-input" placeholder="Search Here ..." /> 
        </div>
        <div className="col-2 mt-3">
          <button type="submit" className="btn bg-transparent text-white"> <i className="fas fa-search" /> </button>
        </div>
      </div>
    </form>
  </div>
</div>

<div className="fables-forth-background-color fables-top-header-signin">
  <div className="container">
    <div className="row" id="top-row">
      <div className="col-12 col-sm-2 col-lg-5">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle border-0 bg-transparent font-13 lang-dropdown-btn pl-0" type="button" id="dropdownLangButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            language
          </button>
          <div className="dropdown-menu p-0 fables-forth-background-color rounded-0 m-0 border-0 lang-dropdown" aria-labelledby="dropdownLangButton">
            <a className="dropdown-item white-color font-13 fables-second-hover-color" href="#">
              <img src="assets/custom/images/england.png" alt="england flag" className="mr-1" /> English</a>
            <a className="dropdown-item white-color font-13 fables-second-hover-color" href="#">
              <img src="assets/custom/images/France.png" alt="england flag" className="mr-1" /> French</a> 
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-5 col-lg-4 text-right">
        <p className="fables-third-text-color font-13"><span className="fables-iconphone" /> Phone :  (888) 6000 6000 - (888) 6000 6000</p>
      </div>
      <div className="col-12 col-sm-5 col-lg-3 text-right">
        <p className="fables-third-text-color font-13"><span className="fables-iconemail" /> Email: Design@domain.com</p>
      </div>
    </div>
  </div>
</div>



<div className="fables-navigation fables-main-background-color py-3 py-lg-0">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 col-lg-9 pr-md-0">                       
        <nav className="navbar navbar-expand-md btco-hover-menu py-lg-2">
          <a className="navbar-brand pl-0" href="index.html"><img src="assets/custom/images/fables-logo.png" alt="Fables Template" className="fables-logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#fablesNavDropdown" aria-controls="fablesNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fables-iconmenu-icon text-white font-16" />
          </button>
          <div className="collapse navbar-collapse" id="fablesNavDropdown"> 
            <ul className="navbar-nav mx-auto fables-nav">   
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="sub-nav1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="sub-nav1">
                  <li><a className="dropdown-item" href="home1.html">Home 1</a></li>
                  <li><a className="dropdown-item" href="home2.html">Home 2</a></li>
                  <li><a className="dropdown-item" href="home3.html">Home 3</a></li>
                  <li><a className="dropdown-item" href="home4.html">Home 4</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="sub-nav2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Features
                </a>
                <ul className="dropdown-menu" aria-labelledby="sub-nav2">
                  <li><a className="dropdown-item dropdown-toggle" href="#">Headers</a>
                    <ul className="dropdown-menu">  
                      <li><a className="dropdown-item dropdown-toggle" href="#">Header 1</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="header1-transparent.html">Header 1 Transparent</a></li>
                          <li><a className="dropdown-item" href="header1-light.html">Header 1 Light</a></li>
                          <li><a className="dropdown-item" href="header1-dark.html">Header 1 Dark</a></li><li><a className="dropdown-item" href="header-megamenu.html">Header Mega menu</a></li>
                        </ul>
                      </li>
                      <li><a className="dropdown-item dropdown-toggle" href="#">Header 2</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="header2-transparent.html">Header 2 Transparent</a></li>
                          <li><a className="dropdown-item" href="header2-light.html">Header 2 Light</a></li>
                          <li><a className="dropdown-item" href="header2-dark.html">Header 2 Dark</a></li>
                        </ul>
                      </li>
                      <li><a className="dropdown-item dropdown-toggle" href="#">Header 3</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="header3-transparent.html">Header 3 Transparent</a></li>
                          <li><a className="dropdown-item" href="header3-light.html">Header 3 Light</a></li>
                          <li><a className="dropdown-item" href="header3-dark.html">Header 3 Dark</a></li>
                        </ul>
                      </li>
                      <li><a className="dropdown-item dropdown-toggle" href="#">Header 4</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="header4-transparent.html">Header 4 Transparent</a></li>
                          <li><a className="dropdown-item" href="header4-light.html">Header 4 Light</a></li>
                          <li><a className="dropdown-item" href="header4-dark.html">Header 4 Dark</a></li>
                        </ul>
                      </li>
                      <li><a className="dropdown-item dropdown-toggle" href="#">Header 5</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="header5-transparent.html">Header 5 Transparent</a></li>
                          <li><a className="dropdown-item" href="header5-light.html">Header 5 Light</a></li>
                          <li><a className="dropdown-item" href="header5-dark.html">Header 5 Dark</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item dropdown-toggle" href="#">Footers</a>
                    <ul className="dropdown-menu">  
                      <li><a className="dropdown-item dropdown-toggle" href="#">Footer 1</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="footer1-bg-img.html">Footer 1 Transparent</a></li>
                          <li><a className="dropdown-item" href="Footer1-light.html">Footer 1 Light</a></li>
                          <li><a className="dropdown-item" href="Footer1-dark.html">Footer 1 Dark</a></li>
                        </ul>
                      </li>
                      <li><a className="dropdown-item dropdown-toggle" href="#">Footer 2</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="footer2-bg-img.html">Footer 2 Transparent</a></li>
                          <li><a className="dropdown-item" href="footer2-light.html">Footer 2 Light</a></li>
                          <li><a className="dropdown-item" href="footer2-dark.html">Footer 2 Dark</a></li>
                        </ul>
                      </li>
                      <li><a className="dropdown-item dropdown-toggle" href="#">Footer 3</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="footer3-bg-img.html">Footer 3 Transparent</a></li>
                          <li><a className="dropdown-item" href="footer3-light.html">Footer 3 Light</a></li>
                          <li><a className="dropdown-item" href="footer3-dark.html">Footer 3 Dark</a></li>
                        </ul>
                      </li>
                      <li><a className="dropdown-item dropdown-toggle" href="#">Footer 4</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="footer4-bg-img.html">Footer 4 Transparent</a></li>
                          <li><a className="dropdown-item" href="footer4-light.html">Footer 4 Light</a></li>
                          <li><a className="dropdown-item" href="footer4-dark.html">Footer 4 Dark</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a className="dropdown-item" href="team.html">Team Members</a></li>
                  <li><a className="dropdown-item" href="pricing-table.html">Pricing Table</a></li>
                  <li><a className="dropdown-item" href="testimonials.html">testimonials</a></li>
                  <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                  <li><a className="dropdown-item" href="counters.html">Counters</a></li>
                  <li><a className="dropdown-item" href="image-hover-effects.html">Image Hover Effects</a></li> 
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="sub-nav3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  About
                </a>
                <ul className="dropdown-menu" aria-labelledby="sub-nav3">
                  <li><a className="dropdown-item" href="about1.html">About 1</a></li>
                  <li><a className="dropdown-item" href="about2.html">About 2</a></li>
                  <li><a className="dropdown-item" href="about3.html">About 3</a></li> 
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="sub-nav4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Store
                </a>
                <ul className="dropdown-menu" aria-labelledby="sub-nav4">
                  <li><a className="dropdown-item" href="store_grid_list.html">Product Category </a></li>
                  <li><a className="dropdown-item" href="store_single.html">Product Single</a></li> 
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="sub-nav5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Blog
                </a>
                <ul className="dropdown-menu" aria-labelledby="sub-nav5">
                  <li><a className="dropdown-item" href="blog-cat1.html">Blog Cat 1</a></li>
                  <li><a className="dropdown-item" href="blog-cat2.html">Blog Cat 2</a></li>
                  <li><a className="dropdown-item" href="blog-cat3.html">Blog Cat 3</a></li>
                  <li><a className="dropdown-item" href="blog-cat-masonry.html">Blog Cat Masonry</a></li> 
                  <li><a className="dropdown-item" href="blog-details1.html">Blog Details 1</a></li> 
                  <li><a className="dropdown-item" href="blog-details2.html">Blog Details 2</a></li> 
                  <li><a className="dropdown-item" href="blog-details3.html">Blog Details 3</a></li> 
                  <li><a className="dropdown-item" href="blog-single-img.html">Blog Single image</a></li> 
                  <li><a className="dropdown-item" href="blog-single-slider.html">Blog Single Slider</a></li>
                  <li><a className="dropdown-item" href="blog-single-video.html">Blog Single Video</a></li> 
                  <li><a className="dropdown-item" href="blog-timeLine.html">Blog Timeline</a></li>
                </ul>
              </li> 
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="sub-nav6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="sub-nav6">
                  <li><a className="dropdown-item" href="404.html">404</a></li>
                  <li><a className="dropdown-item" href="comming-soon.html">Comming Soon</a></li>
                  <li><a className="dropdown-item" href="gallery.html">Gallery</a></li>
                  <li><a className="dropdown-item" href="gallery-filter.html">Gallery Filter</a></li> 
                  <li><a className="dropdown-item" href="gallery-filter-masonry.html">Gallery Filter Masonry</a></li>
                  <li><a className="dropdown-item" href="gallery-history.html">Gallery History</a></li>
                  <li><a className="dropdown-item" href="gallery-history2.html">Gallery History 2</a></li>
                  <li><a className="dropdown-item" href="gallery-single.html">Gallery Single</a></li>
                  <li><a className="dropdown-item" href="gallery-timeline.html">Gallery Timeline </a></li>
                  <li><a className="dropdown-item" href="gallery-timeline2.html">Gallery Timeline 2</a></li>
                </ul>
              </li> 
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="sub-nav7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Contact Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="sub-nav7">
                  <li><a className="dropdown-item" href="contactus1.html">Contact Us 1</a></li>
                  <li><a className="dropdown-item" href="contactus2.html">Contact Us 2</a></li>
                  <li><a className="dropdown-item" href="contactus3.html">Contact Us 3</a></li> 
                </ul>
              </li>  
            </ul> 
          </div>
        </nav>
      </div>
      <div className="col-12 col-md-2 col-lg-3 pr-md-0 icons-header-mobile">
        <div className="fables-header-icons">
          <div className="dropdown"> 
            <a href="#_" className="fables-third-text-color dropdown-toggle right px-3 px-md-2 px-lg-4 fables-second-hover-color top-header-link max-line-height position-relative" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="fables-iconcart-icon font-20" />
              <span className="fables-cart-number fables-second-background-color text-center">3</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <div className="p-3 cart-block">
                <p className="fables-second-text-color semi-font mb-4 font-17">(2) Items in my cart</p>
                <div className="row mx-0 mb-3">
                  <div className="col-4 p-0">
                    <a href="#"><img src="assets/custom/images/sml1.jpg" alt className="w-100" /></a>
                  </div>
                  <div className="col-8">
                    <h2><a href="#" className="fables-main-text-color font-13 d-block fables-main-hover-color">LUIS LEATHER DRIVING</a></h2>
                    <p className="fables-second-text-color font-weight-bold">$ 100.00</p>
                    <p className="fables-forth-text-color">QTY : 1</p>
                  </div>
                </div>
                <div className="row mx-0 mb-3">
                  <div className="col-4 p-0">
                    <a href="#"><img src="assets/custom/images/sml1.jpg" alt className="w-100" /></a>
                  </div>
                  <div className="col-8">
                    <h2><a href="#" className="fables-main-text-color font-13 d-block fables-main-hover-color">LUIS LEATHER DRIVING</a></h2>
                    <p className="fables-second-text-color font-weight-bold">$ 100.00</p>
                    <p className="fables-forth-text-color">QTY : 1</p>
                  </div>
                </div>
                <span className="font-16 semi-font fables-main-text-color">TOTAL</span>
                <span className="font-14 semi-font fables-second-text-color float-right">$200.00</span>
                <hr />
                <div className="text-center">
                  <a href="#" className="fables-second-background-color fables-btn-rounded  text-center white-color py-2 px-3 font-14 bg-hover-transparent border fables-second-border-color fables-second-hover-color">View my cart</a> 
                  <a href="#" className="fables-second-text-color border fables-second-border-color fables-btn-rounded text-center white-color p-2 px-4 font-14 fables-second-hover-background-color">Checkout</a>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="open-search fables-third-text-color right  top-header-link px-3 px-md-2 px-lg-4 fables-second-hover-color border-0 max-line-height">
            <span className="fables-iconsearch-icon" />
          </a>
          <a href="signin.html" className="fables-third-text-color fables-second-hover-color font-13 top-header-link px-3 px-md-2 px-lg-4 max-line-height"><span className="fables-iconuser" /></a>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="fables-header fables-after-overlay overlay-lighter bg-rules" style={{backgroundImage: 'url(assets/custom/images/header.jpg)'}}>
  <div className="container overflow-hidden">  
    <div className="owl-carousel owl-theme default-carousel fables-sqr-nav dots-0 wow fadeInUpBig" data-wow-duration="2s">
      <div>
        <h1 className="white-color bold-font mt-lg-5 mb-4">CONSULTING SERVICE FOR ALL <br /> 
          <span className="fables-second-text-color">KIND OF BUSINESSES</span>
        </h1>  
        <p className="fables-third-text-color mt-3 mb-5 light-font fables-header-slider-details">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </p>
        <a href="#" className="btn fables-second-background-color fables-second-border-color white-color rounded-0 mr-4 px-md-4 py-2 btn-bg-hover white-color-hover">Our Services</a>
        <a href="#" className="btn fables-second-border-color white-color rounded-0 px-md-4 py-2 fables-second-hover-background-color">Learn More</a>  
      </div> 
      <div>
        <h1 className="white-color bold-font mt-lg-5 mb-4">CONSULTING SERVICE FOR ALL <br /> 
          <span className="fables-second-text-color">KIND OF BUSINESSES</span>
        </h1>  
        <p className="fables-third-text-color mt-3 mb-5 light-font fables-header-slider-details">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </p>
        <a href="#" className="btn fables-second-background-color fables-second-border-color white-color rounded-0 mr-4 px-md-4 py-2 btn-bg-hover  white-color-hover">Our Services</a>
        <a href="#" className="btn fables-second-border-color white-color rounded-0 px-md-4 py-2 fables-second-hover-background-color">Learn More</a>  
      </div> 
    </div>
  </div>
</div>

<div className="fables-page-content">  
  <div className="container overflow-hidden">
    <h2 className="text-center fables-main-text-color font-35 my-4 my-lg-5 smaller-head-text">
      We work with the world's leading organizations to provide 
      collaborative solutions to your business
    </h2>
    <div className="row">
      <div className="col-12 col-sm-4 mb-4 wow fadeInUpBig" data-wow-duration="2s">
        <div className="image-container translate-effect-right">
          <a href="#"><img src="assets/custom/images/index1.jpg" alt className="img-fluid w-100" /></a>
        </div>
        <h2 className="font-22 mt-3 mb-2 d-block text-center text-md-left">
          <a href="#" className="fables-second-text-color fables-main-hover-color"> MARKET RESEARCH</a>
        </h2>
        <p className="fables-forth-text-color light-font d-none d-md-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
        </p>
      </div>
      <div className="col-12 col-sm-4 mb-4 wow fadeInUpBig" data-wow-duration="2s">
        <div className="image-container translate-effect-right">
          <a href="#"><img src="assets/custom/images/index2.jpg" alt className="img-fluid w-100" /></a>
        </div>
        <h2 className="font-22 mt-3 mb-2 d-block text-center text-md-left">
          <a href="#" className="fables-second-text-color fables-main-hover-color"> MARKET RESEARCH</a>
        </h2>
        <p className="fables-forth-text-color light-font d-none d-md-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
        </p>
      </div>
      <div className="col-12 col-sm-4 mb-4 wow fadeInUpBig" data-wow-duration="2s">
        <div className="image-container translate-effect-right">
          <a href="#"><img src="assets/custom/images/index3.jpg" alt className="img-fluid w-100" /></a>
        </div>
        <h2 className="font-22 mt-3 mb-2 d-block text-center text-md-left">
          <a href="#" className="fables-second-text-color fables-main-hover-color"> MARKET RESEARCH</a>
        </h2>
        <p className="fables-forth-text-color light-font d-none d-md-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
        </p>
      </div>
    </div>
  </div>
  <div className="container-fluid overflow-hidden">
    <div className="row mt-0 mt-lg-5">
      <div className="col-12 col-md-6 p-0"> 
        <div style={{backgroundImage: 'url(assets/custom/images/overlay1.jpg)'}}>
          <div className="fables-second-color-transparent p-6">
            <h2 className="white-color font-weight-bold mb-4 font-35 wow fadeInLeft">Discover <br />Our Services</h2>
            <p className="fables-third-text-color wow fadeInLeft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac lorem pretium.
              laoreet enim at, malesuada Class aptent taciti sociosqu. Duis congue turpis risus, ac dapibus mi malesuada ut. Duis feugiat nisi orci.Lorem ipsum dolor sit amet, consectetur
            </p>
            <a href="#" className="btn border border-white white-color rounded-0 my-4 py-2 px-5  wow fadeInLeft bg-white-hover fables-second-hover-color">Learn More</a> 
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 px-6">
        <div className="row">
          <div className="col-12 col-sm-6 my-4 text-center text-md-left wow fadeInRight">
            <span className="fables-iconbussiness fables-second-text-color fa-3x" />
            <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
            <p className="fables-forth-text-color font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
            </p>
          </div>
          <div className="col-12 col-sm-6 my-4 text-center text-md-left wow fadeInRight">
            <span className="fables-iconbussiness2 fables-second-text-color fa-3x" />
            <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
            <p className="fables-forth-text-color font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
            </p>
          </div>
          <div className="col-12 col-sm-6 my-4 text-center text-md-left wow fadeInRight">
            <span className="fables-iconbussiness3 fables-second-text-color fa-3x" />
            <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
            <p className="fables-forth-text-color font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
            </p>
          </div>
          <div className="col-12 col-sm-6 my-4 text-center text-md-left wow fadeInRight">
            <span className="fables-iconbussiness4 fables-second-text-color fa-3x" />
            <h2 className="fables-main-text-color font-18 my-2">BUSINESS CONSULTING</h2>
            <p className="fables-forth-text-color font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean 
            </p>
          </div>
        </div> 
      </div>
    </div>
  </div>
  <div className="container">
    <h2 className="fables-main-text-color font-35 font-weight-bold text-center mt-4 mt-lg-5">Select <span className="fables-second-text-color">a Plan</span> Now </h2>
    <p className="fables-forth-text-color text-center mb-4 mb-lg-5">To Get More Done.</p>
    <div className="row mb-0 mb-lg-5 overflow-hidden">
      <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp" data-wow-delay=".3s">
        <div className="table-block table-border-light py-4 py-lg-5 fables-second-hover-border">
          <h2 className="fables-second-text-color bold-font font-35 font-weight-bold position-relative">300 <span className="table-badge fables-fifth-text-color position-absolute">$</span></h2>
          <p className="mb-3 fables-fifth-text-color font-13">Per month</p>
          <h2 className="fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative">Team Plan</h2> 
          <p className="fables-forth-text-color my-4 px-4 line-height-large font-15">
            Wordpress ThemeFree 
            Theme InstallationFree 
            24/7 SupportFree
          </p>
          <a href="#" className="btn fables-second-background-color white-color white-color-hover fables-btn-rounded px-5 py-2">Get Started</a>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp" data-wow-delay=".6s">
        <div className="table-block table-border-light py-4 py-lg-5 fables-second-hover-border">
          <h2 className="fables-second-text-color bold-font font-35 font-weight-bold position-relative">300 <span className="table-badge fables-fifth-text-color position-absolute">$</span></h2>
          <p className="mb-3 fables-fifth-text-color font-13">Per month</p>
          <h2 className="fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative">Team Plan</h2> 
          <p className="fables-forth-text-color my-4 px-4 line-height-large font-15">
            Wordpress ThemeFree 
            Theme InstallationFree 
            24/7 SupportFree
          </p>
          <a href="#" className="btn fables-second-background-color white-color white-color-hover fables-btn-rounded px-5 py-2">Get Started</a>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp" data-wow-delay=".9s">
        <div className="table-block table-border-light py-4 py-lg-5 fables-second-hover-border">
          <h2 className="fables-second-text-color bold-font font-35 font-weight-bold position-relative">300 <span className="table-badge fables-fifth-text-color position-absolute">$</span></h2>
          <p className="mb-3 fables-fifth-text-color font-13">Per month</p>
          <h2 className="fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative">Small Business Plan</h2> 
          <p className="fables-forth-text-color my-4 px-4 line-height-large font-15">
            Wordpress ThemeFree 
            Theme InstallationFree 
            24/7 SupportFree
          </p>
          <a href="#" className="btn fables-second-background-color white-color white-color-hover fables-btn-rounded px-5 py-2">Get Started</a>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3 text-center mb-4 mb-lg-0 wow bounceInUp" data-wow-delay="1.2s">
        <div className="table-block table-border-light py-4 py-lg-5 fables-second-hover-border">
          <h2 className="fables-second-text-color bold-font font-35 font-weight-bold position-relative">300 <span className="table-badge fables-fifth-text-color position-absolute">$</span></h2>
          <p className="mb-3 fables-fifth-text-color font-13">Per month</p>
          <h2 className="fables-forth-text-color text-center bold-font table-title font-17 fables-third-after position-relative">Team Plan</h2> 
          <p className="fables-forth-text-color my-4 px-4 line-height-large font-15">
            Wordpress ThemeFree 
            Theme InstallationFree 
            24/7 SupportFree
          </p>
          <a href="#" className="btn fables-second-background-color white-color white-color-hover fables-btn-rounded px-5 py-2">Get Started</a>
        </div>
      </div>
    </div>
  </div> 
  <div className="fables-testimonial fables-after-overlay bg-rules py-4 py-lg-5" style={{backgroundImage: 'url(assets/custom/images/index-overlay.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2 text-center wow zoomIn position-relative z-index"> 
          <h3 className="fables-second-text-color mb-3 font-30 font-weight-bold">Working towards your business goals</h3>  
          <p className="font-weight-light fables-third-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac lorem pretium laoreet enim at, malesuada Class aptent taciti sociosqu Duis congue turpis risus, ac dapibus mi malesuada ut. Duis feugiat nisi orci.Lorem ipsum dolor sit amet.
          </p>
          <a href="#" className="btn fables-second-border-color fables-second-text-color rounded-0 my-4 py-2 px-5 position-relative z-index fables-second-hover-background-color">Learn More</a> 
        </div> 
      </div>
    </div>
  </div>
  <div className="container my-4 my-lg-5"> 
    <div className="row">
      <div className="col-12 col-md-8 offset-md-2">
        <div className="text-center">
          <h2 className="fables-main-text-color font-35 font-weight-bold mt-0 mb-4 ">Latest Works</h2>
          <p className="fables-forth-text-color mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reiciendis cum aliquid quam, consequatur. quisquam consectetur culpa commodi maxime in harum sunt nam.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right"> 
          <img src="assets/custom/images/blog-slider2.jpg" alt="image" className="img-fluid w-100" /> 
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink " /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider2.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right">
          <img src="assets/custom/images/blog-slider3.jpg" alt="image" className="img-fluid w-100" />
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink" /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider3.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right">
          <img src="assets/custom/images/blog-slider1.jpg" alt="image" className="img-fluid w-100" />
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink" /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider1.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right">
          <img src="assets/custom/images/blog-slider2.jpg" alt="image" className="img-fluid w-100" />
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink " /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider2.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right">
          <img src="assets/custom/images/blog-slider3.jpg" alt="image" className="img-fluid w-100" />
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink" /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider3.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
        <div className="filter-img-block position-relative image-container translate-effect-right">
          <img src="assets/custom/images/blog-slider1.jpg" alt="image" className="img-fluid w-100" />
          <div className="img-filter-overlay fables-main-color-transparent flex-center">
            <a href="#" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconlink mx-2" /></a>
            <a data-fancybox="gallery" href="assets/custom/images/blog-slider1.jpg" className="fables-third-text-color fables-second-hover-color work-icon mx-3"><span className="fables-iconsearch-icon" /></a>
          </div>
        </div>
      </div>
      <a href="#" className="btn fables-second-border-color fables-second-text-color rounded-0 mt-4 mx-auto px-5 py-2 fables-second-hover-background-color">See all projects</a>
    </div> 
  </div>
  <div className="fables-testimonial fables-after-overlay bg-rules py-4 py-lg-5">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8"> 
          <h3 className="position-relative z-index white-color mb-3 font-25 font-weight-bold">We are the best business consulting company ever!!</h3>  
          <p className="position-relative z-index font-weight-light fables-third-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac lorem pretium laoreet enim at, malesuada Class aptent taciti sociosqu.</p>
        </div> 
        <div className="col-12 col-md-4 offset-xl-2 col-xl-2 text-center">
          <a href="contactus1.html" className="btn fables-second-background-color fables-btn-rounded white-color mt-3 position-relative z-index font-19 px-5 white-color-hover">Contact us</a> 
        </div>
      </div> 
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="font-35 font-weight-bold fables-main-text-color my-3 my-lg-5 my-md-4 text-center">Featured News</h2>
      </div>
      <div className="col-12 col-md-4 mb-4 mb-lg-5 wow fadeIn" data-wow-delay=".3s">
        <div className="position-relative"> 
          <div className="image-container translate-effect-right">
            <a href="#"><img src="assets/custom/images/magazine-2559842.jpg" alt className="img-fluid w-100" /></a> 
            <span className="above-date position-absolute text-center fables-second-background-color white-color px-3 py-2">
              <span className="bold-font day">27</span>  <span className="month d-block">JUNE</span>
            </span>
          </div> 
          <h2 className="font-18 my-3"><a href="#" className="fables-main-text-color fables-second-hover-color">Getting to Another Level of Design and Functionality</a></h2>
          <p className="fables-forth-text-color font-14 mb-2">
            When you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality.
          </p>
          <a href className="btn fables-second-text-color fables-main-hover-color p-0 font-15 border-0">Read More  <i className="fas fa-long-arrow-alt-right" /></a> 
        </div> 
      </div>
      <div className="col-12 col-md-4 mb-4 mb-lg-5 wow fadeIn" data-wow-delay=".6s">
        <div className="position-relative"> 
          <div className="image-container translate-effect-right">
            <a href="#"><img src="assets/custom/images/magazine-2559842.jpg" alt className="img-fluid w-100" /></a> 
            <span className="above-date position-absolute text-center fables-second-background-color white-color px-3 py-2">
              <span className="bold-font day">27</span>  <span className="month d-block">JUNE</span>
            </span>
          </div>
          <h2 className="font-18 my-3"><a href="#" className="fables-main-text-color fables-second-hover-color">Getting to Another Level of Design and Functionality</a></h2>
          <p className="fables-forth-text-color font-14 mb-2">
            When you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality.
          </p>
          <a href className="btn fables-second-text-color fables-main-hover-color p-0 font-15 border-0">Read More  <i className="fas fa-long-arrow-alt-right" /></a> 
        </div> 
      </div>
      <div className="col-12 col-md-4 mb-4 mb-lg-5 wow fadeIn" data-wow-delay=".9s">
        <div className="position-relative"> 
          <div className="image-container translate-effect-right">
            <a href="#"><img src="assets/custom/images/magazine-2559842.jpg" alt className="img-fluid w-100" /></a> 
            <span className="above-date position-absolute text-center fables-second-background-color white-color px-3 py-2">
              <span className="bold-font day">27</span>  <span className="month d-block">JUNE</span>
            </span>
          </div>
          <h2 className="font-18 my-3"><a href="#" className="fables-main-text-color fables-second-hover-color">Getting to Another Level of Design and Functionality</a></h2>
          <p className="fables-forth-text-color font-14 mb-2">
            When you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new  website or if you venture on updating your old webpage with a new look and functionality.
          </p>
          <a href className="btn fables-second-text-color fables-main-hover-color p-0 font-15 border-0">Read More  <i className="fas fa-long-arrow-alt-right" /></a> 
        </div> 
      </div>
    </div>
  </div>
  <div className="fables-light-background-color py-3 py-md-4 py-lg-5">
    <div className="container">
      <div className="owl-carousel owl-theme nav-0 carousel-items-6 dots-0">
        <div> 
          <img src="assets/custom/images/brand-4.jpg" alt="Fables Template" className="border-hover fables-partner-carousel-img" />  
        </div>
        <div> 
          <img src="assets/custom/images/brand-4.jpg" alt="Fables Template" className="border-hover fables-partner-carousel-img" />  
        </div>
        <div> 
          <img src="assets/custom/images/brand-4.jpg" alt="Fables Template" className="border-hover fables-partner-carousel-img" />  
        </div>
        <div> 
          <img src="assets/custom/images/brand-4.jpg" alt="Fables Template" className="border-hover fables-partner-carousel-img" />  
        </div>
        <div> 
          <img src="assets/custom/images/brand-4.jpg" alt="Fables Template" className="border-hover fables-partner-carousel-img" />  
        </div>
        <div> 
          <img src="assets/custom/images/brand-4.jpg" alt="Fables Template" className="border-hover fables-partner-carousel-img" />  
        </div>
        <div> 
          <img src="assets/custom/images/brand-4.jpg" alt="Fables Template" className="border-hover fables-partner-carousel-img" />  
        </div>
        <div> 
          <img src="assets/custom/images/brand-4.jpg" alt="Fables Template" className="border-hover fables-partner-carousel-img" />  
        </div>
        <div> 
          <img src="assets/custom/images/brand-4.jpg" alt="Fables Template" className="fborder-hover ables-partner-carousel-img" />  
        </div>
      </div>  
    </div>
  </div>
</div>



<div className="fables-footer-image fables-after-overlay white-color py-4 py-lg-5 bg-rules">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2 mb-5 text-center">
        <h2 className="font-30 semi-font mb-5">Newsletter</h2>
        <form className="form-inline position-relative"> 
          <div className="form-group fables-subscribe-formgroup"> 
            <input type="email" className="form-control fables-subscribe-input fables-btn-rouned" placeholder="Your Email" />
          </div>
          <button type="submit" className="btn fables-second-background-color fables-btn-rouned fables-subscribe-btn">Subscribe</button>
        </form>
      </div>
      <div className="col-12 col-lg-4 mb-4 mb-lg-0">
        <a href="#" className="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-minus-13"><img src="assets/custom/images/fables-logo.png" alt="fables template" /></a>
        <p className="font-15 fables-third-text-color">
          t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. 
          <br /><br />
          t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p> 
      </div>
      <div className="col-12 col-sm-6 col-lg-4">
        <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3">Contact us</h2>
        <div className="my-3">
          <h4 className="font-16 semi-font"><span className="fables-iconmap-icon fables-second-text-color pr-2 font-20 mt-1 d-inline-block" /> Address Information</h4>
          <p className="font-14 fables-fifth-text-color mt-2 ml-4">level13, 2Elizabeth St, Melbourne, Victor 2000</p>
        </div>
        <div className="my-3">
          <h4 className="font-16 semi-font"><span className="fables-iconphone fables-second-text-color pr-2 font-20 mt-1 d-inline-block" /> Call Now </h4>
          <p className="font-14 fables-fifth-text-color mt-2 ml-4">+333 111 111 000</p>
        </div>
        <div className="my-3">
          <h4 className="font-16 semi-font"><span className="fables-iconemail fables-second-text-color pr-2 font-20 mt-1 d-inline-block" /> Mail </h4>
          <p className="font-14 fables-fifth-text-color mt-2 ml-4">adminsupport@website.com</p>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4">
        <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3">EXPLORE OUR SITE</h2>
        <ul className="nav fables-footer-links">
          <li><a href="about1.html">About Us</a></li>
          <li><a href="contactus1.html">Contact Us</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="testimonials.html">Testimonials</a></li>
        </ul>
      </div>
    </div> 
  </div>
</div>


    </div>
      </div>
      
      
    );
  }

  export default HomePage;