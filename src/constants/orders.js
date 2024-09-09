const all_orders = [
    {
        id: "#1246",
        date: "2 Jun, 11:30 AM",
        email: "emma.smith@reqres.in",
        first_name: "Emma",
        last_name: "Smith",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
        product: "Leather Wallet",
        price: "75,00",
        status: "Paid"
    },
    {
        id: "#1245",
        date: "6 September, 12:00 PM",
        email: "john.doe@reqres.in",
        first_name: "John",
        last_name: "Doe",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        product: "Bluetooth Headphones",
        price: "120,50",
        status: "Shipped"
    },
    {
        id: "#1244",
        date: "3 Nov, 09:00 AM",
        email: "jane.doe@reqres.in",
        first_name: "Jane",
        last_name: "Doe",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
        product: "Smart Watch",
        price: "199,99",
        status: "Delivered"
    },
    {
        id: "#1243",
        date: "4 Nov, 10:00 AM",
        email: "michael.brown@reqres.in",
        first_name: "Michael",
        last_name: "Brown",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
        product: "Gaming Mouse",
        price: "45,00",
        status: "Refunded"
    },
    {
        id: "#1242",
        date: "12 Nov, 11:20 AM",
        email: "lisa.white@reqres.in",
        first_name: "Lisa",
        last_name: "White",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
        product: "Office Chair",
        price: "250,00",
        status: "Canceled"
    },
    {
        id: "#1241",
        date: "30 Aug, 08:15 AM",
        email: "nathan.green@reqres.in",
        first_name: "Nathan",
        last_name: "Green",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
        product: "Tablet Stand",
        price: "30,00",
        status: "Paid"
    },
    {
        id: "#1246",
        date: "2 Nov, 01:00 PM",
        email: "emma.smith@reqres.in",
        first_name: "Emma",
        last_name: "Smith",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
        product: "Leather Wallet",
        price: "75,00",
        status: "Paid"
    },
    {
        id: "#1245",
        date: "2 Nov, 03:00 PM",
        email: "john.doe@reqres.in",
        first_name: "John",
        last_name: "Doe",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        product: "Bluetooth Headphones",
        price: "120,50",
        status: "Shipped"
    },
    {
        id: "#1244",
        date: "15 Nov, 02:30 PM",
        email: "jane.doe@reqres.in",
        first_name: "Jane",
        last_name: "Doe",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
        product: "Smart Watch",
        price: "199,99",
        status: "Delivered"
    },
    {
        id: "#1243",
        date: "5 Nov, 10:30 AM",
        email: "michael.brown@reqres.in",
        first_name: "Michael",
        last_name: "Brown",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
        product: "Gaming Mouse",
        price: "45,00",
        status: "Refunded"
    },
    {
        id: "#1242",
        date: "20 Nov, 09:30 AM",
        email: "lisa.white@reqres.in",
        first_name: "Lisa",
        last_name: "White",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
        product: "Office Chair",
        price: "250,00",
        status: "Canceled"
    },
    {
        id: "#1241",
        date: "15 Nov, 07:00 AM",
        email: "nathan.green@reqres.in",
        first_name: "Nathan",
        last_name: "Green",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
        product: "Tablet Stand",
        price: "30,00",
        status: "Paid"
    },{
        id: "#1241",
        date: "15 Nov, 07:00 AM",
        email: "nathan.green@reqres.in",
        first_name: "Nathan",
        last_name: "Green",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
        product: "Tablet Stand",
        price: "30,00",
        status: "Paid"
    },{
        id: "#1241",
        date: "15 Nov, 07:00 AM",
        email: "nathan.green@reqres.in",
        first_name: "Nathan",
        last_name: "Green",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
        product: "Tablet Stand",
        price: "30,00",
        status: "Paid"
    },{
        id: "#1241",
        date: "15 Nov, 07:00 AM",
        email: "nathan.green@reqres.in",
        first_name: "Nathan",
        last_name: "Green",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
        product: "Tablet Stand",
        price: "30,00",
        status: "Paid"
    },{
        id: "#1241",
        date: "15 Nov, 07:00 AM",
        email: "nathan.green@reqres.in",
        first_name: "Nathan",
        last_name: "Green",
        avatar: "https://reqres.in/img/faces/6-image.jpg",
        product: "Tablet Stand",
        price: "30,00",
        status: "Paid"
    },
    {
        id: "#1242",
        date: "25 Nov, 10:20 AM",
        email: "lisa.white@reqres.in",
        first_name: "Lisa",
        last_name: "White",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
        product: "Office Chair",
        price: "250,00",
        status: "Canceled"
    },
    {
        id: "#1242",
        date: "26 Nov, 11:00 AM",
        email: "lisa.white@reqres.in",
        first_name: "Lisa",
        last_name: "White",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
        product: "Office Chair",
        price: "250,00",
        status: "Canceled"
    },
    {
        id: "#1242",
        date: "27 Nov, 12:30 PM",
        email: "lisa.white@reqres.in",
        first_name: "Lisa",
        last_name: "White",
        avatar: "https://reqres.in/img/faces/5-image.jpg",
        product: "Office Chair",
        price: "250,00",
        status: "Canceled"
    },
];

export default all_orders;
