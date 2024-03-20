import clsx from "clsx"
import Link from "next/link"

export const Tabs: React.FC<TabsProps> = ({ selected }) => (
  <ul className="inline-flex gap-10">
    <li className={clsx((selected === "CARDS") && "underline underline-offset-2")}>
      <Link href="/cartoes">
        Cartões
      </Link>
    </li>

    <li className={clsx((selected === "BENEFITS") && "underline underline-offset-2")}>
      <Link href="/beneficios">
        Benefícios
      </Link>
    </li>

    <li className={clsx((selected === "DISCOUNTS") && "underline underline-offset-2")}>
      <Link href="/descontos">
        Descontos
      </Link>
    </li>
  </ul>
)

/** types */
type TabsProps = {
  selected?: "CARDS" | "BENEFITS" | "DISCOUNTS"
}
