

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
    },
    {
        title: "Orders",
        path: "/orders",
        subNav: [
            {
                title: "Completed orders",
                path: "/completed orders"
            },
            {
                title: "Abandoned checkouts",
                path: "/abounded checkouts"
            },  
        ]
    },
    {
        title: "Products",
        path: "/products",
        subNav: [
            {
                title: "Inventory",
                path: "/inventory"
            },
            {
                title: "Categories",
                path: "/categories"
            }, 
            {
                title: "Supply",
                path: "/supply"
            }, 
        ]
    },
    {
        title: "Reviews",
        path: "/reviews",
    },
    {
        title: "Reservations",
        path: "/reservations",
        subNav: [
            {
                title: "Reservations",
                path: "/reservations"
            }, 
        ]
    },
    {
        title: "Customers",
        path: "/customers",
    },
    {
        title: "Content",
        path: "/contents",
        subNav: [
            {
                title: "Manage contents",
                path: "/manage contents"
            },                     
        ]
    },
]

export default SidebarData;