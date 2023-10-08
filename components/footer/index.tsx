import { Account, Navigation, Site, Socials } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="flex flex-col px-5 md:px-10 md:flex-row gap-5 justify-around py-10">
      <div className="flex flex-col gap-3 border-b pb-5 md:border-none">
        <h3 className="text-medium font-semibold">Navigation</h3>
        {Navigation.map((item: string) => (
          <p className="text-sm text-muted-foreground">{item}</p>
        ))}
      </div>

      <div className="flex flex-col gap-3 border-b pb-5 md:border-none">
        <h3 className="text-medium font-semibold">Connect With Us</h3>

        {Socials.map((item: string) => (
          <p className="text-sm text-muted-foreground">{item}</p>
        ))}
      </div>

      <div className="flex flex-col gap-3 border-b pb-5 md:border-none">
        <h3 className="text-medium font-semibold">Crunchyroll</h3>

        {Site.map((item: string) => (
          <p className="text-sm text-muted-foreground">{item}</p>
        ))}
      </div>

      <div className="flex flex-col gap-3 border-b pb-5 md:border-none">
        <h3 className="text-medium font-semibold">Account</h3>

        {Account.map((item: string) => (
          <p className="text-sm text-muted-foreground">{item}</p>
        ))}
      </div>
    </footer>
  );
}
