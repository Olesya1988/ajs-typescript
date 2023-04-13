import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }    

    priceWithoutDiscount(): number {
        return this._items.reduce((acc: number, item: Buyable) => acc + item.price, 0);
    }

    discountPrice(discount: number): number {
        return this.priceWithoutDiscount() - discount;
    }
    
    removeObject(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}