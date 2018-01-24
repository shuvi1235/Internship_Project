import React from 'react'
import Link from 'gatsby-link'
import Data from './../data/data.yaml'

const IndexPage = () => (
  <div>
      <div>
        <img src={require("./../images/banner.jpg")} width="100%"/>
      </div>

      <div className="pt-5 pb-5" style={{align:"centre"}}>
          <h2 className="text-center">
            WE ARE THE CRAZY ONES WHO BELIEVE IN YOU!
          </h2>
          <p className="card-text">
          {Data.About1}
          </p>
          <p>
            {Data.About2}
          </p>
      </div>


      <div className="text-center pt-5 pb-5" style={{background:"#cbf4e1"}}><h2>HOW DOES IT WORK</h2></div>

      <div  style={{background:"#cbf4e1", padding:"0px 0px 0px 40px"}}>
        <div className="row">
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/Step1.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">DOWNLOAD THE APP</figcaption>
            </figure>
          </div>
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/Step2.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">VERIFY PERSONAL DETAILS</figcaption>
            </figure>
          </div>
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/Step3.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">ORDER & CONFIRM</figcaption>
            </figure>
          </div>
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/Step4.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">RECEIVE YOUR ORDER</figcaption>
            </figure>
          </div>
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/Step5.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">PAY MONTHLY BY CASH OR ONLINE</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="containe pt-5 pb-5">
        <h2 className="text-center p-5">IS IT SAFE?</h2>
        <div className="row p-4">
          <div className="col-sm">
            <p><h3>PRIVACY</h3></p>
            <p>
              {Data.privacy}
            </p>
          </div>
          <div className="col-sm">
            <p><h3>BUYER’S GUARANTEE</h3></p>
            <p>
              {Data.guarantee}
            </p>
          </div>
        </div>
        <div className="row p-4">
          <div className="col-sm">
            <p><h3>24*7 PROTECTION & SUPPORT</h3></p>
            <p>
                {Data.protection}
            </p>
          </div>
          <div className="col-sm">
            <p><h3>LEGAL COMPLIANCE</h3></p>
            <p>
                {Data.legal}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-5 pb-5" style={{background:"#cbf4e1"}}><h2>SERVICES</h2></div>

      <div  style={{background:"#cbf4e1",padding:"0px 0px 0px 40px"}}>
        <div className="row">
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/shopping.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">SHOPPING</figcaption>
            </figure>
          </div>
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/movies.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">MOVIES</figcaption>
            </figure>
          </div>
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/food.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">FOOD</figcaption>
            </figure>
          </div>
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/transport.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">TRANSPORT</figcaption>
            </figure>
          </div>
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/events.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">EVENTS</figcaption>
            </figure>
          </div>
          <div className="col-sm">
            <figure className="figure">
              <img src={require("./../images/recharge.svg")} className="rounded mx-auto d-block"/>
              <figcaption className="figure-caption text-center">RECHARGE</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 pb-5"><h2>WE SUPPORT THE FOLLOWING PARTNERS AND HUNDREDS MORE!</h2></div>

      <div>
        <div className="row pt-5 pb-5">
          <div className="col-sm">
            <img src={require("./../images/flipkart.svg")} className="rounded mx-auto d-block"/>
          </div>
          <div className="col-sm">
            <img src={require("./../images/myntra.svg")} className="rounded mx-auto d-block"/>
          </div>
          <div className="col-sm">
            <img src={require("./../images/paytm.svg")} className="rounded mx-auto d-block"/>
          </div>
          <div className="col-sm">
            <img src={require("./../images/amazon.svg")} className="rounded mx-auto d-block"/>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-5" style={{background:"#cbf4e1"}}>
        <h4 className="text-center">Internship_Assignment</h4>
        <p className="text-center">created by Shubham Singh Bisht</p>
        <p className="text-center">Email-id: shuvi1235@gmail.com</p>
      </div>
  </div>
)

export default IndexPage
