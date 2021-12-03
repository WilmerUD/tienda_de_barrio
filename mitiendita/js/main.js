$(document).ready(main);

function main(){    
    var info_products = [
    ["#","../img/cocacola_15.jpg","Bebida Gaseosa","Coca-cola","600 ml",2000,10],
    ["#","../img/jugo_hit.jpg","Bebida Natural","Jugo Hit","600 ml",2500,20],
    ["#","../img/agua.jpg","Bebida","Agua Cristalina","600 ml",1400,20],   
    ["#","../img/papas.jpg","Papas Fritas Margarita","Papas de pollo","150 gr",1600,20],
    ["#","../img/platano.jpg","Tajaditas Ramo","Platano verde","90 gr",1400,20],
    ["#","../img/roscas.jpg","Rosquitas Caseritas","Rosquitas de maiz","50 gr",1500,20],  
    ["#","../img/menta.jpg","Golosinas","Mentas","Unidad",100,20],
    ["#","../img/burbuja.jpg","Bombon","Dulce de chocolate","14 gr",350,20],
    ["#","../img/trident.jpg","Golosinas","Goma de mascar","30 gr",200,20],  
    ["#","../img/yogurt.jpg","Bebida Láctea","Yogurt","200 gr",2700,20],
    ["#","../img/kumis.jpg","Bebida Láctea","Kumis","200 gr",2000,20],
    ["#","../img/alpin.jpg","Bebida Láctea","Alpin","200 gr",1850,20],
    ["#","../img/bonyurt.jpg","Bebida Láctea","Bonyurt","170 gr",3100,20],
    ["#","../img/salchicha.jpg","Embutidos","Salchicha Ranchera","5 Unidades",4800,20],
    ["#","../img/huevos.jpg","Canasta familia","Cubeta de huevos","30 Unidades",5000,20]
    ];           
    
    var product = document.getElementById("products-category");
    var cant_products = info_products.length;
    var quantity_products = document.getElementById("quantity-products");
    
    quantity_products.appendChild(document.createTextNode(5));
    
    for(i=0;i<cant_products;i++){
        var new_container_products = document.createElement("div");
        var new_a_container_products = document.createElement("a");
        var new_category_img_product = document.createElement("div");
        var new_img_product = document.createElement("img");
        var new_div_add = document.createElement("div");
        var new_p_add = document.createElement("p");
        var new_category_price_product = document.createElement("div");
        var new_p_category = document.createElement("p");
        var new_p_product = document.createElement("p");
        var new_p_presentation = document.createElement("p");
        var new_span_price = document.createElement("span");
        var new_span_b_price = document.createElement("b");
        var new_span_status = document.createElement("span");
        
        new_img_product.setAttribute("src",info_products[i][1]);
        new_category_img_product.className = "category-img-product";
        new_category_img_product.appendChild(new_img_product);
        new_div_add.className = "add";
        new_p_add.appendChild(document.createTextNode("+"));
        new_div_add.appendChild(new_p_add);
        new_category_img_product.appendChild(new_div_add);
        
        
        new_p_category.appendChild(document.createTextNode(info_products[i][2]));
        new_p_product.appendChild(document.createTextNode(info_products[i][3]));
        new_p_presentation.appendChild(document.createTextNode(info_products[i][4]));
        info_products[i][5] = "$"+info_products[i][5]+" COP";
        new_span_b_price.appendChild(document.createTextNode(info_products[i][5]));
        if(info_products[i][6]==0){
            new_span_status.appendChild(document.createTextNode("Agotado"));
        }else{
            new_span_status.appendChild(document.createTextNode("Disponible"));                           
        }
        
        new_category_price_product.className = "category-price-product";
        new_category_price_product.appendChild(new_p_category);
        new_category_price_product.appendChild(new_p_product);
        new_category_price_product.appendChild(new_p_presentation);
        new_category_price_product.appendChild(new_span_price);
        new_span_price.appendChild(new_span_b_price);
        new_category_price_product.appendChild(new_span_status);

        new_a_container_products.setAttribute("href",info_products[i][0]);
        new_a_container_products.setAttribute("target","_blank");
        new_a_container_products.appendChild(new_category_img_product);
        new_a_container_products.appendChild(new_category_price_product);

        new_container_products.className = "container-products";
        new_container_products.appendChild(new_a_container_products);

        product.appendChild(new_container_products);
    }
}