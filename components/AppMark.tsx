import Link from 'next/link'

export function AppMark({ href = '/' }: { href?: string }) {
  return <Link href={href} className="brand"><span>i</span>IELTS<span className="brand-dot">.</span></Link>
}
