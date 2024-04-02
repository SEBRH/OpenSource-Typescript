import { v4 as uuidv4 } from 'uuid';

export class SalesOrderItem{
    private readonly _productId: string;
    private readonly _quantity: number;
    private readonly _unitPrice: number;
    private _id: string;
    private _salesOrderId: string;
constructor(productId: string, salesOrderId: string, quantity: number, unitPrice: number) {
this._quantity = quantity;
this._salesOrderId = salesOrderId;
this._productId = productId;
this._id = uuidv4();
this._unitPrice = unitPrice;
}

    get id(): string {
    return this._id;
    }
    get productId(): string {
        return this._productId;
    }

    get quantity(): number {
        return this._quantity;
    }

    get unitPrice(): number {
        return this._unitPrice;
    }

    calculateItemsPrice = (): number => this._quantity * this._unitPrice;
}