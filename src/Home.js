import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB$28684220.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="345345"
                        title="fifa 20"
                        price={56}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81%2BomykvrIL._SL1500_.jpg"
                    />
                    <Product
                        id="345445"
                        title="God Of War"
                        price={57}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81YBJ4RWDOL._SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="34556345"
                        title="Marvel's Spider Man (PS4) - Game of the Year Edition (PS4)"
                        price={36}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81XEnkqC6KL._SL1500_.jpg"
                    />
                    <Product
                        id="34534435"
                        title="PS4 The Last of Us Part II (PS4)"
                        price={76}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/81l%2BhkZEABL._SL1500_.jpg"
                    />
                    <Product
                        id="3325345"
                        title="
                        Grand Theft Auto V - Premium Edition (PS4)
                        "
                        price={86}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81cvVRtcznL._SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="335625345"
                        title="
                        Uncharted 4 TE Hit (PS4)
                    "
                        price={96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/91hfZvix6TL._SL1500_.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Home;
