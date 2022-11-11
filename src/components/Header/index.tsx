import Image from "next/image"
import { HeaderComponent } from "./styles"
import logoSvg from "../../assets/logo.svg"
import { Cart } from "../Cart"
import { Handbag } from "phosphor-react"

export function Header() {
  return (
    <HeaderComponent>
      <Image src={logoSvg} alt="" />

      <button type="button" title="OpenCart">
        <Handbag size={32} />
      </button>
    </HeaderComponent>
  )
}