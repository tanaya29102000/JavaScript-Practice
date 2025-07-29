<script>
  const orderHistory = [
    { orderId: 1, productName: "Apple Watch", quantity: 2, price: 2000 },
    { orderId: 2, productName: "Pants", quantity: 1, price: 800 },
    { orderId: 3, productName: "Apple Watch", quantity: 2, price: 2000 },
    { orderId: 4, productName: "shirt", quantity: 2, price: 2000 },
    { orderId: 5, productName: "Apple Watch", quantity: 2, price: 2000 }
  ];

  function filterOrdersByProductName(orderHistory, productName) {
    return orderHistory.filter(
      (order) =>
        order.productName.trim().toLowerCase() ===
        productName.trim().toLowerCase()
    );
  }

  console.log(filterOrdersByProductName(orderHistory, "shirt"));
</script>
