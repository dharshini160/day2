<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Product List</title>
</head>
<body>
    <button onclick="loadData()">Load Products</button>
    <div id="loadData">Loading...</div>

    <script>
        function loadData() {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => {
                    const list = data.map(product => `
                        <li>
                            <img src="${product.image}" width="50" alt="${product.title}" />
                            <div class="list">
                                <h5>${product.title}</h5>
                                <p>Price: $${product.price}</p>
                                <p>Category: ${product.category}</p>
                                <p>Description: ${product.description}</p>
                            </div>
                        </li>
                    `).join("");

                    document.getElementById("loadData").innerHTML = `<ul>${list}</ul>`;
                })
                .catch(error => {
                    document.getElementById("loadData").innerText = "Failed to load data.";
                    console.error('Error fetching data:', error);
                });
        }
    </script>
</body>
</html>
