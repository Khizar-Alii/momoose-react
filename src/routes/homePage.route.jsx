import React from "react";
import Footer from "../components/footer/footer";
import { ContactPage } from "../components/contact/contact.jsx";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="topContainer">
       <div className="container-fluid p-0">
        <div className="d-xl-block d-none" id="section">
            <div className="row m-0">
                <div className="col-12 p-0">
                    <div className="">
                        <img src="Assets/top_banner_bg.png" className="w-100 banner_img" alt="" />
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="row">
                    <div className="col-3 ml-auto">
                        <img src="Assets/logo.png" className="imges" alt="" />
                    </div>
                    <div className="col-8 pr-lg-0">
                        <nav className="navbar navbar-expand-xl navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto" style={{display:'flex',alignItems:'center'}}>
                                    <li className="nav-item ">
                                        <a className="nav-link se text-light" href="#section">
                                            <span>HEM</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        
                                        <a className="nav-link se text-light" href="#section1">
                                            <span>OM OSS</span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                      
                                        <a className="nav-link se text-light" href="#section2">
                                            <span>MENY</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                      
                                        <a className="nav-link se text-light" href="#section3">
                                            <span>GALLERI</span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                       
                                        <a className="nav-link se text-light" href="#section4">
                                            <span>KONTAKT</span>
                                        </a>
                                        
                                    </li>
                                    <button className="cateringmenubtn">
                                        <Link to="/catering-menu">Catering Menu</Link>
                                    </button>
                                    
                                 
                                    <li className="nav-item dropdown ml-lg-3 ml-0">
                                        
                                        <button className="btn btn-light dropdown" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <div className="se">
                                                <img src="Assets/swedish_flag.png" alt="" className="flag" />
                                                <span className="d-inline-block px-2">Svenska</span>
                                                <img className="pr-2" src="Assets/drop_down.png" alt="" />
                                            </div>
                                            <div className="en">
                                                <img src="https://ilunch.nu/public/public_site_assets/images/e-flag.png"
                                                    alt="" className="flag" />
                                                <span className="d-inline-block px-2">English</span>
                                                <img className="pr-2" src="Assets/drop_down.png" alt="" />
                                            </div>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" id="se" href="#se" title="">Svenska</a>
                                            <a className="dropdown-item" id="en" href="#en">English</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5" id="section-2">
                        <div className="col-md-5 mt-lg-5 mt-3">
                            <h1 className="mb-4 en" style={{fontFamily:'belmonte',color:"#096e6c"}}>What is hummus?</h1>
                            <h1 className="mb-4 se" style={{fontFamily:'belmonte',color:"#096e6c"}}>
                                <img src="Assets/log-2.png" className="w-75"/>    
                            </h1>
                            <p className="pera en">Hummus is a savory, creamy, and yummy middle eastern dip.
                                Hummus is traditionally made from mashed chickpeas mixed with fresh lemon juice,
                                minced garlic, and a sesame paste called tahini. Hummus has become incredibly popular as
                                a healthy dip or spread.
                                At Mummus, we decided to take hummus to the next level!</p>
                            <p className="pera se">Hummus är en krämig puré, tillverkad av mosade kikärtor blandad
                                med färsk citronsaft, finhackad vitlök och tahini. Många känner till det som en
                                nyttig dippröra eller ett härligt pålägg, men hos Mummus är hummus så mycket
                                mer!
                            </p>
                            <a href="#section2" className="btn btn-primary bnt mt-lg-5 mt-2 en">View menu</a>
                            <a href="#section2" className="btn btn-primary bnt mt-lg-5 mt-2 se">Vår meny </a>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-3">
                            <img src="Assets/top_banner_img.png" className="w-100 tob_banner_img" alt="" />
                        </div>

                        <div className="col-md-1" id="myScrollspy">
                            <ul className="nav nav-pills flex-column dot_slide">
                                <li className="nav-item">
                                    <a className="nav-link dot active" href="#section"></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dot" href="#section1"></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dot" href="#section2"></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dot" href="#section3"></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dot" href="#section4"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-xl-none d-block" id="section">
            <div className="banner-1">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a href="" className="navbar-brand">
                                <img src="Assets/logo.png" className="w-100" alt="" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                                <ul className="navbar-nav mr-auto text-right" style={{display:'flex',alignItems:'center'}}>
                                    <li className="nav-item ">
                                        <a className="nav-link en text-light" href="#section">
                                            <span>Home</span>
                                        </a>
                                        <a className="nav-link se text-light" href="#section">
                                            <span>HEM</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link en text-light" href="#section1">
                                        <span>About</span>
                                        </a>
                                        <a className="nav-link se text-light" href="#section1">
                                            <span>OM OSS</span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link en text-light" href="#section2">
                                            <span>Menu</span>
                                        </a>
                                        <a className="nav-link se text-light" href="#section2">
                                            <span>MENY</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link en text-light" href="#section3"><span>Gallery</span></a>
                                        <a className="nav-link se text-light" href="#section3"><span>GALLERI</span></a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link en text-light" href="#section4"><span>Contact</span></a>
                                        <a className="nav-link se text-light" href="#section4"><span>KONTAKT</span></a>
                                    </li><br/>
                                    <button className="cateringmenubtn">
                                        <a to="catering-menu">Catering Menu</a>
                                    </button>
                                    <li className="nav-item moblisticons" >
                                        <a href="https://instagram.com/mummus.se?igshid=7toboeu31sp">
                                            <i className="fa fa-instagram mr-lg-1 mr-0"></i>
                                        </a>
                                        <a href="https://www.facebook.com/Mummus-114979863593938/">
                                            <i className="fa fa-facebook-f mr-lg-1 mr-0"></i>
                                        </a>
                                        <a href="mailto:info@mummus.se">
                                            <i className="fa fa-envelope"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown ml-lg-3 ml-0 mt-lg-0 mt-2">
                                        <button className="btn btn-light dropdown" id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <div className="se" style={{display:"block"}}>
                                                <img src="Assets/swedish_flag.png" alt="" className="flag" />
                                                <span className="d-inline-block px-2">Svenska</span>
                                                <img className="pr-2" src="Assets/drop_down.png" alt="" />
                                            </div>
                                            <div className="en" style={{display:"block"}}>
                                                <img src="https://ilunch.nu/public/public_site_assets/images/e-flag.png"
                                                    alt="" className="flag" />
                                                <span className="d-inline-block px-2">English</span>
                                                <img className="pr-2" src="Assets/drop_down.png" alt="" />
                                            </div>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" id="se1" href="#se1" title="">Svenska</a>
                                            <a className="dropdown-item" id="en1" href="#en1">English</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-5 mt-lg-5 mt-3">
                            <h1 className="mb-4 en" style={{fontFamily: 'belmonte', color:"#096e6c",}}>What is hummus?</h1>
                            <h1 className="mb-4 se" style={{fontFamily: 'belmonte', color:"#096e6c",}}>
                                <img src="Assets/log-2.png" className="w-75"/>    
                            </h1>
                            <p className="pera en">Hummus is a savory, creamy, and yummy middle eastern dip.
                                Hummus is traditionally made from mashed chickpeas mixed with fresh lemon juice,
                                minced garlic, and a sesame paste called tahini. Hummus has become incredibly popular as
                                a healthy dip or spread.
                                At Mummus, we decided to take hummus to the next level!</p>
                            <p className="pera se">Hummus är en krämig puré, tillverkad av mosade kikärtor blandad
                                med färsk citronsaft, finhackad vitlök och tahini. Många känner till det som en
                                nyttig dippröra eller ett härligt pålägg, men hos Mummus är hummus så mycket
                                mer!
                            </p>
                            <a href="#section2" className="btn btn-primary bnt mt-lg-5 mt-2 en">View menu</a>
                            <a href="#section2" className="btn btn-primary bnt mt-lg-5 mt-2 se">Vår meny </a>
                        </div>
                        <div className="col-lg-6 mt-md-0 mt-3">
                            <img src="Assets/top_banner_img.png" className="w-100 tob_banner_img" alt="" />
                        </div>

                        <div className="col-md-1">
                            <div className="dot_slide" style={{textAlign:"center"}}>
                                <span className="dot active" id="dot1"></span>
                                <span className="dot" id="dot2"></span>
                                <span className="dot" id="dot3"></span>
                                <span className="dot" id="dot4"></span>
                                <span className="dot" id="dot5"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="p-4 shadow bg-white content" id="section1">
            <div className="en text-center">
            <h1 className="mb-4">
              Welcome to <span>Mummus</span>
            </h1>
            <p className="font-16 pt-4 pb-4 par-we">
              Hummus, claimed by all, owned by none. We believe hummus is
              something that brings us together. Our love for food, passion for
              quality, and sense of creativity is what you will find in our
              kitchen! Besides the original hummus recipe, we offer innovative
              fusion flavours. Flavours that you might never encountered or
              imagined for hummus. We also offer a wide range of delicious add
              ons that make our dishes a hearty meal. Our menu also includes a
              variety of complementary sides including falafel, eggs, drinks ,
              desserts, and more !
            </p>
          </div>
          <div className="se text-center">
            <div className="row" >
              <div className="col-md-6 m-auto">
                <h1 className="mb-4" >
                  <img src="Assets/log.png" className="w-100"  />
                </h1>
              </div>
            </div>
            
            <p className="font-16 pt-4 pb-4 par-we">
              Mycket har skrivits och sagts om hemligheten med hummus men vi
              tror inte att någon känner till den. Vi ser det bara som att det
              är något med hummus som förenar oss. Kärlek till mat och passion
              för kvalitet är det du hittar hos oss! Förutom det ursprungliga
              Hummus-receptet erbjuder vi andra smakkombinationer som du kanske
              aldrig föreställt dig. Vi serverar ett brett utbud av generös och
              välsmakande topping som gör våra rätter till en fullständig
              måltid, kolla vår meny! Du hittar även kompletterande tillbehör
              såsom falafel, ägg, sallad, drycker, desserter och mer!
            </p>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-lg-6 col-md-8 m-auto">
            <img src="Assets/chickpeas_img.png" alt="" className="w-100 mt-4" />
          </div>
        </div>
        <div className="text-center" id="section2">
          <h1 className="mb-4 en">
            <span>Our</span> Menu{" "}
          </h1>
          <h1
            className="mb-4 se homeHeadings"
            style={{
              fontFamily: "belmonte",
              color: "#096e6c",
              fontSize: "50px",
              overflow : "hidden"
            }}
          >
            <span
            >
              Vår
            </span>{" "}
            Meny
          </h1>
        </div>
        <div className="mt-5 mb-5 text-center">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner_1_se hh-100 se pt-5">
                <h1 className="fant-weight-bold hummus mt-1">Hummus</h1>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      <span>Beduin:</span>tahinihummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">75:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      <span>Bohemian: </span>
                      rödbetshummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">85:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      <span>Daredevil: </span>
                      het chilihummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">80:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      <span>Genovese:</span>pestohummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">90:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-lg-0">
                    <h6 className="font-weight-bold font-18">
                      <span>Greek:</span> yoghurt- och vitlökshummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">85:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      <span>Hippie:</span> persilje- och kikärtshummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">95:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col text-left">
                    <h6 className="font-weight-bold font-18">Bröd ingår. </h6>
                  </div>
                </div>
              </div>
              <div className="banner_1_en hh-100 en pt-5">
                <h1 className="fant-weight-bold hummus mt-1">Hummus</h1>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      <span>Beduin:</span>tahini hummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">75:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      <span>Bohemian: </span>
                      beetroot hummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">85:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      <span>Daredevil: </span>
                      spicy hummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">80:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      <span>Genovese:</span>pesto hummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">90:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-lg-0">
                    <h6 className="font-weight-bold font-18">
                      <span>Greek:</span> garlic & yogurt hummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">85:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-md-2 pr-0">
                    <h6 className="font-weight-bold font-18">
                      <span>Hippie:</span> parsley & chickpeas hummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">95:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Bread is included.{" "}
                    </h6>
                  </div>
                </div>
              </div>
              {/* <img src="Assets/more_bg.png" className="w-100 en" alt="" />
                    <img src="Assets/more_se_bg.PNG" className="w-100 se" alt="" /> */}
            </div>
            <div className="col-lg-6 mt-xll-0 ">
              {/* <img src="Assets/add_ons_bg.png" className="w-100 en" alt="" />
                    <img src="Assets/add_one_se_bg.PNG" className="w-100 se" alt="" /> */}

              <div className="banner_2_se hh-100 se pt-5">
                <div className="text-center">
                  <h1 className="fant-weight-bold hummus">Tillägg</h1>
                </div>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Sucukkorv & paprika
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">75:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Entrecôte i bitar
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">95:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Kyckling och soltorkade tomater
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">80:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Halloumi och gurka
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">75:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width  text-left">
                    <h6 className="font-weight-bold font-18">
                      Rostade pinjenötter och mandlar
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">60:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Champinjoner och timjan{" "}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">65:-</h6>
                  </div>
                </div>
              </div>
              <div className="banner_2_en hh-100 en pt-5">
                <div className="text-center">
                  <h1 className="fant-weight-bold hummus">Add Ons</h1>
                </div>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Sucuk & paprika
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">75:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width  text-left">
                    <h6 className="font-weight-bold font-18">
                      Chopped entrecote
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">95:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Chicken & sundried tomatoes
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">80:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Halloumi & cucumber{" "}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">75:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-lg-0">
                    <h6 className="font-weight-bold font-18">
                      Pine nuts & almonds{" "}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">65:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Mushrooms & thyme{" "}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">65:-</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-2 col-6 mt-lg-0 mt-1">
              <img src="Assets/menu-img-1.png" className="w-100" alt="" />
            </div>
            <div className="col-md-2 d-md-block d-none"></div>
            <div className="col-md-2 col-6 mt-lg-0 mt-1">
              <img src="Assets/menu-img-2.png" className="w-100" alt="" />
            </div>
            <div className="col-md-2 col-6 mt-lg-0 mt-1">
              <img src="Assets/menu-img-3.png" className="w-100" alt="" />
            </div>
            <div className="col-md-2 d-md-block d-none"></div>
            <div className="col-md-2 col-6 mt-lg-0 mt-1">
              <img src="Assets/menu-img-4.png" className="w-100" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="banner_2_se hh-100 se pt-5">
                <div className="text-center">
                  <h1 className="fant-weight-bold hummus">Mer</h1>
                </div>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Falafel 3 st</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Labneh ost 3 st
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Oliver</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">30:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-lg-0">
                    <h6 className="font-weight-bold font-18">
                      Makdous Inlagd aubergine
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">40:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Mini sallad </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
              </div>
              <div className="banner_2_en hh-100 en pt-5">
                <div className="text-center">
                  <h1 className="fant-weight-bold hummus">More</h1>
                </div>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Falafel 3ps</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Labneh 3ps</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Olives</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">30:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-lg-0">
                    <h6 className="font-weight-bold font-18">
                      Makdous pickled aubergines
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">40:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Mini salad </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
              </div>
              {/* <img src="Assets/section-1_bg.png " className="w-100 en" alt="" />
                    <img src="Assets/section.png " className="w-100 se" alt="" />  */}
            </div>
            <div className="col-lg-6 mt-xll-0">
              <div className="banner_2_se hh-100 se pt-5">
                <div className="text-center">
                  <h1 className="fant-weight-bold hummus">Något sött</h1>
                </div>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Halva</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">40:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Baklava</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">50:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Kaffe, espresso
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">40:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-lg-0">
                    <h6 className="font-weight-bold font-18">
                      Te (kardemumma, saffran, mint)
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Läsk, Ayran, juicer och kolsyrat vatten{" "}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">30:-</h6>
                  </div>
                </div>
              </div>
              <div className="banner_2_en en hh-100 pt-5">
                <div className="text-center">
                  <h1 className="fant-weight-bold hummus">After</h1>
                </div>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Halva</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">40:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Baklava</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">50:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Coffee, espresso
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">40:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-lg-0">
                    <h6 className="font-weight-bold font-18">
                      Tea (cardamom, saffron, mint )
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      Sodas, Ayran, juices & sparkling wate
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">30:-</h6>
                  </div>
                </div>
              </div>
              {/* <!-- <img src="Assets/section_bg.png " className="w-100 en" alt="">
                    <img src="Assets/section-1.png" className="w-100 se" alt=""> --> */}
            </div>
          </div>
        </div>
        <div className="grly mb-5 row m-0" id="section3">
          <div className="text-center mb-3 col-12">
            <h1 className="mb-4 en">
              <span>Our</span> Gallery{" "}
            </h1>
            <h1 className="mb-4 se homeHeadings">
              <span>Vårt </span> Galleri
            </h1>
          </div>

          <div className="col-12 text-center mt-5">
            {/* <!-- <h1 className="en" ><span
                        >Coming</span> Soon...</h1> -->
                <!-- <h1 className="se" ><span
                        >Kommer </span> Snart...</h1> --> */}
            <div className="container gallery">
              <div className="row mb-15px">
                <a
                  href="Assets/food1.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food1.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food2.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food2.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food3.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food3.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food7.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food8.jpg" className="img-fluid rounded" />
                </a>
              </div>
              <div className="row mb-15px">
                <a
                  href="Assets/food4.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food4.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food5.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food5.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food6.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food6.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food8.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food8.jpg" className="img-fluid rounded" />
                </a>
              </div>
              <div className="row mb-15px">
                <a
                  href="Assets/food9.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food9.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food10.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food10.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food11.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food11.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food12.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food12.jpg" className="img-fluid rounded" />
                </a>
              </div>
              <div className="row mb-15px">
                <a
                  href="Assets/food13.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food13.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food14.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food14.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food16.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food16.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food17.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food17.jpg" className="img-fluid rounded" />
                </a>
              </div>
              <div className="row mb-15px">
                <a
                  href="Assets/food18.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food18.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food19.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food19.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food20.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food20.jpg" className="img-fluid rounded" />
                </a>
                <a
                  href="Assets/food21.jpg"
                  data-toggle="lightbox"
                  data-gallery="gallery"
                  className="col-md-3"
                >
                  <img src="Assets/food21.jpg" className="img-fluid rounded" />
                </a>
              </div>
            </div>
          </div>
        </div>

              <div id="section4">
              <ContactPage />
              </div>
      </div>
      <Footer />
     

      <script type="text/javascript">
        {`
          $(document).on("click", '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
          });
        `}
      </script>
    </div>
  );
};

export default HomePage;
