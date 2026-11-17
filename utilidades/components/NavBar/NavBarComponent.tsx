import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ButtonComponent } from "../Button/ButtonComponent";
import style from "./NavBar.module.css";

export function NavBarComponent() {
    const router = useRouter()
    const url = usePathname()

    return (
        <nav className={style.navbar}>
            <Link href="/"><Image src="/logo.svg" alt="Logo" width={200} height={100} style={{ background: "transparent" }} /></Link>
            <div className={style.botoes}>
                {
                    url !== "/" && <ButtonComponent type="link" action={() => { router.push('/') }} text='Início' />
                }
                <ButtonComponent type="link" action={() => { router.push('/perfil') }} text={<p style={{ display: "flex", alignItems: "center", gap: "5px", background: "transparent" }}>
                    Perfil <AccountCircleOutlinedIcon sx={{ background: 'transparent' }} />
                </p>} />

            </div>
        </nav>
    )
}