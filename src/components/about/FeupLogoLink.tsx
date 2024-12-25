import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { logoFeup } from "@/images/logos/resume"

type Props = {
  className?: string
  width?: number
  height?: number
}

export function FeupLogoLink({ className, width = 28, height = 28 }: Props) {
  return (
    <Link
      href="https://sigarra.up.pt/feup/en/cur_geral.cur_planos_estudos_view?pv_plano_id=31204&pv_tipo_cur_sigla=&pv_origem=CUR&pv_ano_lectivo=2024"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        "inline-flex items-center justify-center transition-opacity duration-300 ease-in-out hover:opacity-80",
      )}
    >
      <Image src={logoFeup} alt="FEUP" width={width} height={height} />
    </Link>
  )
}
