from sqlalchemy import Column, String, Integer, engine
from db import Base, engine


class Producto(Base):
    __tablename__ = 'productos'
    id = Column(Integer,autoincrement=True)
    sku = Column(String(70), unique=True, primary_key=True)
    category =  Column(String(70))
    name = Column(String(70))
    description = Column(String(70))
    stock = Column(Integer)
    value = Column(Integer)

Base.metadata.create_all(engine)