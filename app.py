from flask import Flask, jsonify, request
from sqlalchemy.orm import session
from db import Session, engine
from models import Producto
import json


app = Flask(__name__)


sessiona = Session()

@app.route('/nuevo',methods=['GET'])
def nuevo():
    print("request es: ---")
    print(request.data)
    return jsonify({'mesaje':"Endpoint desde Hola"})

    

@app.route('/create',methods=['POST'])
def create_product():

    data = json.loads(request.data)

    if 'sku' not in data:
        return jsonify({'respuesta ':"No se esta enviando el sku"})
    elif 'category' not in data:
        return jsonify({'respuesta ':"No se esta enviando la categoria de producto"})
    elif 'name' not in data:
        return jsonify({'respuesta ':"No se esta enviando el nombre del producto"})
    elif 'value' not in data:
        return jsonify({'respuesta ':"No se esta enviando el valor del producto"})
    elif 'stock' not in data:
        return jsonify({'respuesta ':"No se esta enviando la cantidad del producto"})
    elif len(data["sku"]) == 0:
        return jsonify({'respuesta ':"sku no puede enviar vacio"})

    with engine.connect() as con:
        nuevo_product = Producto(sku = data["sku"], category=data["category"],name=data["name"]
        ,description=data["description"],value=data["value"],stock=data["stock"]) 
        sessiona.add(nuevo_product)
        try:
            sessiona.commit()
        except:
            return jsonify({'respuesta ':"Producto ya se encuentra creado"})
    return jsonify({'mesaje':"Producto creado correctamente!!"})





@app.route('/get',methods=['GET'])
def get_product():
    data = json.loads(request.data)
    if 'sku' not in data:
        return jsonify({'respuesta ':"SKU no enviado, validar datos!!"})
    with engine.connect() as con:
        get_prd = f"select * from productos where sku = '{data['sku']}'"
        respuesta = con.execute(get_prd).one()
        print(respuesta)

        return jsonify({'value':respuesta[0],"sku":respuesta[1],"category":respuesta[2],"name":respuesta[3]
        ,"description":respuesta[4],"stock":respuesta[5]})

@app.route('/del',methods=['DELETE'])
def del_product():
    data = json.loads(request.data)
    if 'sku' not in data:
        return jsonify({'respuesta ':"SKU no enviado, validar datos!!"})
    with engine.connect() as con:
        prd = f"delete from productos where sku = '{data['sku']}'"
        respuesta = con.execute(prd)
        print(respuesta)
    return "delete succesfull"

@app.route('/edit',methods=['PUT'])
def edit_product():
    data = json.loads(request.data)
    if 'sku' not in data:
        return jsonify({'respuesta ':"SKU no enviado, validar datos!!"})
    with engine.connect() as con:
        prd = f"update productos set sku = '{data['sku']}'\
        , category='{data['category']}',name='{data['name']}'\
        , description='{data['description']}',value='{data['value']}'\
        , stock='{data['stock']}' where sku = '{data['sku']}'"
        respuesta = con.execute(prd)
        print(respuesta)
    return "update succesfull"


if __name__ == "__main__":
    app.run(debug=True)
