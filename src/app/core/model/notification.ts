import { Order } from './order';

export interface Notification{
    id: string,
    order: Order,
    created_at: Date

}