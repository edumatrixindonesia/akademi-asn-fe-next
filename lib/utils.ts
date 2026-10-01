export { cn } from "cn"

// Matches the site's price format: "Rp1.960.000".
export const formatRupiah = (amount: number) =>
  `Rp${amount.toLocaleString("id-ID")}`;
