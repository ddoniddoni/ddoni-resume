import Link from "next/link";
import { siteConfig } from "@/content/site";
import "@/styles/layout/site-footer.scss";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="footer-meta">© 2026 {siteConfig.name}</p>
        <Link className="footer-link" href="/contact">
          Contact <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </footer>
  );
}
