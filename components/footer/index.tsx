export default function Footer() {
  return (
    <footer className="flex flex-col px-5 md:px-10 md:flex-row gap-5 justify-around py-10">
      <div className="flex flex-col gap-3 border-b pb-5 md:border-none">
        <h3 className="text-sm font-semibold">Navigation</h3>

        <p className="text-xs text-muted-foreground">Browse Popular</p>
        <p className="text-xs text-muted-foreground">Browse Popular</p>
        <p className="text-xs text-muted-foreground">Browse Popular</p>
        <p className="text-xs text-muted-foreground">Browse Popular</p>
        <p className="text-xs text-muted-foreground">Browse Popular</p>
      </div>

      <div className="flex flex-col gap-3 border-b pb-5 md:border-none">
        <h3 className="text-sm font-semibold">Connect With Us</h3>

        <p className="text-xs text-muted-foreground">Youtube</p>
        <p className="text-xs text-muted-foreground">Facebook</p>
        <p className="text-xs text-muted-foreground">Twitter</p>
        <p className="text-xs text-muted-foreground">Instagram</p>
        <p className="text-xs text-muted-foreground">TikTok</p>
      </div>

      <div className="flex flex-col gap-3 border-b pb-5 md:border-none">
        <h3 className="text-sm font-semibold">Crunchyroll</h3>

        <p className="text-xs text-muted-foreground">About</p>
        <p className="text-xs text-muted-foreground">Help/FAQ</p>
        <p className="text-xs text-muted-foreground">Terms of Use</p>
        <p className="text-xs text-muted-foreground">Privacy Policy</p>
      </div>

      <div className="flex flex-col gap-3 border-b pb-5 md:border-none">
        <h3 className="text-sm font-semibold">Account</h3>

        <p className="text-xs text-muted-foreground">Create Account</p>
        <p className="text-xs text-muted-foreground">Log In</p>
      </div>
    </footer>
  );
}
