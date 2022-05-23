let arrProduct = ["SonyXperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note4"];

function addProduct() {
    let productName = document.getElementById("nameProduct").value;
    arrProduct.push(productName);
    displayProduct();
}

function displayProduct() {
    let result = "<tr><th colspan='3'>Tên sản phẩm</th></tr>";
    for (let i = 0; i < arrProduct.length; i++) {
        result += "<tr><td>" + arrProduct[i] + "</td>"
            + "<td><button type='button' onclick='editProduct(" + i + ");'>Edit</button></td>"
            + "<td><button type='button' onclick='deleteProduct(" + i + ");'>Delete</button></td>";
    }
    document.getElementById("list").innerHTML = result;
}

function deleteProduct(index) {
    arrProduct.splice(index, 1);
    displayProduct();
}

function editProduct(index) {
    let nameProduct = prompt("Nhập tên sản phẩm");
    arrProduct[index] = nameProduct;
    alert("Bạn đã chỉnh sửa xong sản phẩm");
    displayProduct();
}

onload = displayProduct();