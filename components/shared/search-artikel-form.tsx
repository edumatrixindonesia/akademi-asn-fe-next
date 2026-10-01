import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type SearchArtikelFormProps = {
  label: string;
  placeholder: string;
};

// A native GET form: no client JS.
const SearchArtikelForm = ({ label, placeholder }: SearchArtikelFormProps) => (
  <form method="get" action="/blog/cari" role="search" className="flex gap-2">
    <label htmlFor="cari-artikel" className="sr-only">
      {label}
    </label>
    <Input id="cari-artikel" type="search" name="q" required placeholder={placeholder} />
    <Button type="submit" size="icon" aria-label={label}>
      <SearchIcon />
    </Button>
  </form>
);

export default SearchArtikelForm;
