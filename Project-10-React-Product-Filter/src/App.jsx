import { useState } from "react";

const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 55000
    },
    {
        id: 2,
        name: "Headphones",
        category: "Electronics",
        price: 2000
    },
    {
        id: 3,
        name: "Notebook",
        category: "Stationery",
        price: 100
    },
    {
        id: 4,
        name: "Pen",
        category: "Stationery",
        price: 20
    }
];

function App() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    // TODO:
    // Create filteredProducts.
    //
    // A product should remain when:
    // 1. Its name matches the search
    // AND
    // 2. Its category matches the selected category,
    //    unless category is "All"


    return (

        <div>

            <h1>Products</h1>

            <input aria-label="Search products"
                placeholder="Search products"
                value={search}
                onChange={(event) => {
                    // TODO
                }}
            />

            <select aria-label="Category"
                value={category}
                onChange={(event) => {
                    // TODO
                }}
            >

                <option value="All">All</option>

                <option value="Electronics">
                    Electronics
                </option>

                <option value="Stationery">
                    Stationery
                </option>

            </select>

            <div>

                {/* TODO:
                    Display filteredProducts here.
                */}

            </div>

        </div>

    );
}

export default App;
