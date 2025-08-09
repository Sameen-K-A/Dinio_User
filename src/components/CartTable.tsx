import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { CartItem } from "@/contexts/cart-context";
import { X } from "lucide-react";

interface ICartTableProps {
  cart: CartItem[];
  removeFromCart: (foodId: string) => void;
  updateQuantity: (foodId: string, quantity: number) => void;
};

export default function CartTable({ cart, removeFromCart, updateQuantity }: ICartTableProps) {
  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="px-2 w-8"></TableHead>
            <TableHead className='pe-2'>Item</TableHead>
            <TableHead className="text-end px-1 pe-12">Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.foodId} className='not-odd:bg-muted/50'>
              <TableCell>
                <button
                  className="w-6 h-6 flex items-center justify-center rounded-sm text-destructive hover:bg-destructive/10 transition cursor-pointer"
                  aria-label="Remove item"
                  type="button"
                  onClick={() => removeFromCart(item.foodId)}
                >
                  <X size={15} />
                </button>
              </TableCell>
              <TableCell className='flex items-center gap-2 pe-0'>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-lg object-cover border bg-muted"
                  onError={e => { e.currentTarget.src = '/placeholder/placeholder.svg'; }}
                />
                <span className='text-sm font-bold line-clamp-1'>{item.name}</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-0.5 mt-2 justify-end">
                  <button
                    className="w-8 h-8 border flex items-center justify-center rounded-sm bg-muted hover:bg-muted-foreground/10 transition cursor-pointer"
                    aria-label="Decrease quantity"
                    type="button"
                    onClick={() => updateQuantity(item.foodId, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" >
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    className="w-15 text-center border rounded-sm bg-background text-base font-semibold text-primary px-2 py-1 focus:outline-none shadow-none"
                    readOnly
                  />
                  <button
                    className="w-8 h-8 border flex items-center justify-center rounded-sm bg-muted hover:bg-muted-foreground/10 transition cursor-pointer"
                    aria-label="Increase quantity"
                    type="button"
                    onClick={() => updateQuantity(item.foodId, item.quantity + 1)}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
};