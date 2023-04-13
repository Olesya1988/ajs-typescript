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
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }

    discountPrice(discount: number): number {
        return (this.priceWithoutDiscount() - discount);
    }
    
    removeObject(id: number): void {
        const idOfCart = this._items.findIndex(item => item.id === id);

        if (idOfCart !== -1) {
            this._items.splice(idOfCart, 1)
        }
    }
}