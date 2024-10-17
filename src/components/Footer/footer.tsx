import Link from "next/link"
// import { Input } from "@//ui/input"
// import { Button } from "@//ui/button"
import { Facebook, Instagram, Twitter, Github, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-primary">
            <img
            src="../images/logo2.png"
            className="max-h-20 max-w-40 object-cover"
            alt="logo"
          />
              <span className="sr-only">Your Company</span>
            </Link>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Marketing</Link></li>
              <li><Link href="#" className="hover:underline">Analytics</Link></li>
              <li><Link href="#" className="hover:underline">Commerce</Link></li>
              <li><Link href="#" className="hover:underline">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Pricing</Link></li>
              <li><Link href="#" className="hover:underline">Documentation</Link></li>
              <li><Link href="#" className="hover:underline">Guides</Link></li>
              <li><Link href="#" className="hover:underline">API Status</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
              <li><Link href="#" className="hover:underline">Jobs</Link></li>
              <li><Link href="#" className="hover:underline">Press</Link></li>
              <li><Link href="#" className="hover:underline">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Claim</Link></li>
              <li><Link href="#" className="hover:underline">Privacy</Link></li>
              <li><Link href="#" className="hover:underline">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <div className="grid md:grid-cols-1 gap-8">
            <div className="md:text-right">
              <div className="flex justify-start md:justify-end space-x-5">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-6 w-6 " />
                  <span className="sr-only bg-red-900">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <p className="text-sm  mb-4">© 2024 Your Company, Inc. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}