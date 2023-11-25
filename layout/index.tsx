import styles from "./index.module.css";
import { UserLoginSVG } from "../assets/svg/userloginsvg";
import Link from "next/link";
import ReactSelectUI from "../components/r-select";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Router, { useRouter } from "next/router";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { useEffect, useState } from "react";
import { api } from "../common/api";

type LayoutProps = {
  children: any; //still
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [user, setuser] = useState<null | { name: string; tel: string }>(null);
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(3);

  async function fetchUser() {
    api.setHeader(
      "Authorization",
      "Bearer " + localStorage.getItem("agent") || ""
    );
    const respose = await api.get("user/info");
    setuser(respose);
  }

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("agent")) {
      fetchUser();
    }
  }, [typeof window !== "undefined" && localStorage.getItem("agent")]);

  const router = useRouter();
  if (router.pathname === "/login") {
    return <>{children}</>;
  }
  return (
    <>
      <header className={styles.header + " wrapper"}>
        <div>
          <a href="tel:+9942001030">Dəstək: (+994) 200 10 30</a>
          <div
            className={styles.headerRIght}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ReactSelectUI width="77px" />

            <div className={styles.headerRIghtChild}>
              <span {...buttonProps}>
                <UserLoginSVG />
              </span>
              <span
                onClick={() => Router.push("/dashboard")}
                onMouseOver={() => setIsOpen(true)}
              >
                {user?.name?.slice(0, 6) || user?.tel}
              </span>
              {user?.tel ? (
                <div
                  className={isOpen ? styles["visible"] : styles["hidden"]}
                  role="menu"
                >
                  <Link
                    href={{
                      pathname: "/dashboard",
                      query: { param: "Elanlar" },
                    }}
                  >
                    Elanlarım{" "}
                  </Link>
                  <Link
                    href={{
                      pathname: "/dashboard",
                      query: { param: "Ödənişlər" },
                    }}
                  >
                    Balans artımı{" "}
                  </Link>
                  <a href="" onClick={() => localStorage.removeItem("agent")}>
                    Çıxış
                  </a>
                </div>
              ) : (
                <Link href={user?.tel ? "/dashboard" : "/login"}>
                  {user?.name?.slice(0, 6) || user?.tel || "Giriş"}
                </Link>
              )}
              {/* <Link href={'/dashboard'}>{ (user?.name?.slice(0,6)||user?.tel)} </Link> */}
            </div>
          </div>
        </div>
      </header>
      <Nav user={user} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
