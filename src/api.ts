import axios from "axios"

const API_URL = 'https://lenxdelivery-api.onrender.com/v1/lenxdelivery'

export default function fetchOrders() {
    return axios(`${API_URL}/order/list/`)
}

export function confirmDelivery(orderId: number) {
    return axios.put(`${API_URL}/order/${orderId}/deliver`)
}