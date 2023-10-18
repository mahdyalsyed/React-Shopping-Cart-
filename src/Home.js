import React from "react";
import ItemCard from "./ItemCard";
import data from "./data";

const Home = () => {
    return (
        <>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 container">
                <div className="row just-content-center">
                    {data.productdata.map((item, index) => {
                        return (
                            <ItemCard
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Home;
