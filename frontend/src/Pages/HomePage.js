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



{/* Start Fables Navigation */}
<div className="fables-transparent py-3 py-lg-0">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 pr-md-0">                       
        <nav className="navbar navbar-expand-md btco-hover-menu py-lg-2">
         
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#fablesNavDropdown" aria-controls="fablesNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fables-iconmenu-icon text-white font-16" />
          </button>
          <div className="collapse navbar-collapse" id="fablesNavDropdown"> 
          <div className="logoContainer">
          <a className="navbar-brand fables-logo-brand pl-10" href="index.html"><img src="assets/custom/images/LOGO.JPG" id="logoImage" alt="Fables Template" /></a>
          </div>
            <ul className="navbar-nav mx-auto fables-nav">   
          
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="sub-nav1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Home
                </a>
                
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="sub-nav2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Features
                </a>
               
              </li>
           
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="sub-nav4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Nos Services
                </a>
                
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="sub-nav5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Offres
                </a>
               
              </li> 
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="sub-nav6" data-toggle="dropdown"  aria-expanded="false">
                  Nos actualités
                </a>
              
              </li> 
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="sub-nav7" data-toggle="dropdown"  aria-expanded="false">
                  Contact Us
                </a>
              </li> 

              {/* buttons */}
            </ul> 
          </div>
        </nav>
      </div>


      <div className="col-5 col-md-2 pr-md-0 icons-header-mobile">
        <div className="fables-header-icons pt-lg-4 text-right">
        <a href="#" className="btn fables-second-border-color white-color rounded-0 px-md-4 py-2 fables-second-hover-background-color">S'authentifier</a> 
        </div>
      </div>
      <a href="#" className="open-search fables-third-text-color fables-mega-menu-btn px-4  fables-second-hover-color">
            <span className="fables-iconsearch-icon" />
            
          </a>
 
    </div>
  </div>
</div> 
{/* /End Fables Navigation */}

    
{/* Start Header */}

{/* /End Header */}



<div className="fables-header fables-after-overlay overlay-lighter bg-rules" style={{backgroundImage: 'url(assets/custom/images/Hero.jpg)'}}>
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
          <p className="font-14 fables-fifth-text-color mt-2 ml-4">+216 28 315 166</p>
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