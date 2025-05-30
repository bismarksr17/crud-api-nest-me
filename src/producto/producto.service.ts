import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
    
    private titulo: string = "Mi Servicio";
    private productos: Producto[] = [
        { id: 1, nombre: "Teclado", precio: 25.50, estado: true },
        { id: 2, nombre: "Mouse", precio: 15.00, estado: true }
    ];
    private id = 3;

    listar(): Producto[] {
        return this.productos;
    }

    guardar(datos: any): Producto {
        const nuevoProducto: Producto = {
            id: this.id++,
            ...datos
        }
        this.productos.push(nuevoProducto);
        return nuevoProducto
    }

    mostrar(id: number): Producto {
        const prod = this.productos.find(p => p.id == id);
        if (!prod) {
            throw new NotFoundException(`Producto no encontrado`);
        }
        return prod;
    }

    modificar(id: number, dato: any): string {
        return "Esto es el modificar producto desde ProductoService: " + id;
    }

    eliminar(id: number): string {
        return "Esto es el eliminar producto desde ProductoService: " + id;
    }
}
