$(document).ready(main);

function main(){    
    var info_products = [
    ["img/cocacola_15.jpg","Coca-cola 600 ml",2000,2],
    ["img/platano.jpg","Platano verde 90 gr",1400,4],
    ["img/burbuja.jpg","Dulce de chocolate",350,7],
    ["img/Kumis.jpg","Kumis 200 gr",2000,3],
    ["img/huevos.jpg","Cubeta de huevos",5000,2]
    ];
    
    var product = document.getElementById("products-descript");
    var total = document.getElementById("price-total");
    var cant_products = info_products.length;
    var sum_temp =0;
    var quantity_products = document.getElementById("quantity-products");

    for(i=0;i<cant_products;i++){
        var new_products = document.createElement("div");
        new_products.className = "products";
        var new_item_product = document.createElement("div");
        new_item_product.className  = "item-product";
        var new_img_product = document.createElement("img");
        var new_p_product = document.createElement("p");
        var new_item_price = document.createElement("div");
        new_item_price.className = "item-price";
        var new_p_price = document.createElement("p");
        var new_item_quantity = document.createElement("div");
        new_item_quantity.className = "item-quantity";
        var new_sum = document.createElement("div");
        new_sum.className = "sum";
        var new_p_sum = document.createElement("p");
        var new_number = document.createElement("div");
        new_number.className = "number";
        var new_p_number = document.createElement("p");
        var new_subtraction = document.createElement("div");
        new_subtraction.className = "subtraction";
        var new_p_subtraction = document.createElement("p");
        var new_item_total = document.createElement("div");
        new_item_total.className = "item-total";
        var new_p_total = document.createElement("p");
        
        new_img_product.setAttribute("src",info_products[i][0]);
        new_item_product.appendChild(new_img_product);
        new_p_product.appendChild(document.createTextNode(info_products[i][1]));
        new_item_product.appendChild(new_p_product);
        new_p_price.appendChild(document.createTextNode("$"+info_products[i][2]));
        new_item_price.appendChild(new_p_price);
        new_p_sum.appendChild(document.createTextNode("+"));
        new_sum.appendChild(new_p_sum);
        new_item_quantity.appendChild(new_sum);
        new_p_number.appendChild(document.createTextNode(info_products[i][3]));
        new_number.appendChild(new_p_number);
        new_item_quantity.appendChild(new_number);
        new_p_subtraction.appendChild(document.createTextNode("_"));
        new_subtraction.appendChild(new_p_subtraction);
        new_item_quantity.appendChild(new_subtraction);
        new_p_total.appendChild(document.createTextNode("$"+info_products[i][2]*info_products[i][3]));
        new_item_total.appendChild(new_p_total);
        
        
        
        new_products.appendChild(new_item_product);
        new_products.appendChild(new_item_price);
        new_products.appendChild(new_item_quantity);
        new_products.appendChild(new_item_total);
        product.appendChild(new_products);
        
        sum_temp = sum_temp + (info_products[i][2]*info_products[i][3]);
        
    }
    quantity_products.appendChild(document.createTextNode(cant_products));
    total.appendChild(document.createTextNode("$" + sum_temp));
}
