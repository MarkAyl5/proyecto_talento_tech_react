import { Link } from "react-router-dom"
type FooterLinksProps = {
    link1: string
    text1: string
    link2: string
    text2: string
    link3: string
    text3: string
}

export default function FooterLinks({link1, text1, link2, text2, link3, text3} : FooterLinksProps) {
  return (
    <div className="flex flex-col ">
      <ul className="flex flex-col gap-6 [&_li]:text-light-white [&_li]:font-poppins">
        <li>
          <Link to={link1}>
          {text1}
          </Link>
        </li>
        <li>
          <Link to={link2}>
          {text2}
          </Link>
        </li>
        <li>
          <Link to={link3}>
          {text3}
          </Link>
        </li>
      </ul>
    </div>
  )
}
