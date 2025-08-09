export default function Order() {
  return (
    <div className="py-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[70dvh]">
        <h2 className="text-2xl font-semibold mb-2">Your Order is Empty</h2>
        <p className="text-muted-foreground text-center mb-4">
          Start adding items to your cart to place an order.
        </p>
      </div>
    </div>
  );
};