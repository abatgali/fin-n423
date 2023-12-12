import "@/styles/globals.css";
import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu, Icon, Input, Button } from "semantic-ui-react";
import Link from "next/link";
import { AppProvider } from "../../useHooks/useAppState";

export default function App({ Component, pageProps }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <AppProvider>
      <Menu>
        <Menu.Item as={Link} href="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={Link} href="/favorites">
          <Icon name="chart line" />
          Track Gas Prices
        </Menu.Item>{" "}
        {/* <Menu.Item as={Link} href="/signin">
          <Icon name="sign in alternate" />
          Sign In/Sign Up
        </Menu.Item> */}
        <Menu.Item>
          <div className="ui icon input">
            <Input
              type="text"
              placeholder="Search...(Enter state code AK, AL, WA.)"
              style={{ width: "500px" }}
              value={inputValue}
              required
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Link
              href={`/gas/${inputValue}`}
              className="search icon w-24 h-12 bg-gray-200 py-4 px-1 decoration-black"
            >
              <span>
                <Icon name="search" /> Search
              </span>
            </Link>
          </div>
        </Menu.Item>
      </Menu>
      <Component {...pageProps} />
    </AppProvider>
  );
}
