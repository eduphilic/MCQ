import {
  LayoutDashboard,
  LayoutDashboardProps,
  LoadingSpinner,
} from "@join-uniform/components";
import {
  AdminLayoutDashboardContainerLogoUrlHOC,
  AdminLayoutDashboardContainerLogoUrlProps,
} from "@join-uniform/graphql";
import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import React, { ReactElement, ReactNode } from "react";
import { createResponsiveImageUrl } from "../lib/utils";

type Props = {
  children?: ReactNode;
  title: string;
  appBarButtons?: LayoutDashboardProps["buttons"];
};

export const AdminLayoutDashboardContainer = AdminLayoutDashboardContainerLogoUrlHOC<
  Props
>(undefined)(AdminLayoutDashboardContainerBase);

function AdminLayoutDashboardContainerBase(
  props: AdminLayoutDashboardContainerLogoUrlProps & Props,
) {
  const { children, title, appBarButtons, data } = props;

  if (!data || data.loading || data.error || !data.logoConfig) {
    return <LoadingSpinner />;
  }
  const {
    logoConfig: { url: logoUrl },
  } = data;

  return (
    <>
      <Head>
        <title>Join Uniform - {title}</title>
      </Head>

      <LayoutDashboard
        title={title}
        buttons={appBarButtons}
        drawerTheme="admin"
        drawerLinks={links}
        drawerLogoSrc={createResponsiveImageUrl(logoUrl, {
          w: "48",
          h: "48",
        })}
        DrawerLinkComponent={DrawerLink}
        onLogoutButtonClick={handleLogoutButtonClick}
      >
        {children}
      </LayoutDashboard>
    </>
  );

  function handleLogoutButtonClick() {
    /* tslint:disable-next-line:no-console */
    console.error("Logout button not implemented.");
  }
}

/**
 * Wraps the Next Link component. It adds the "active" class to the child
 * component when the current route matches the provided "href". The layout
 * drawer uses the class.
 */
const DrawerLink = withRouter<{
  children: (active: boolean) => ReactNode;
  href: string;
}>(props => {
  const { children, router, href } = props;

  return (
    <Link href={href} prefetch>
      {children(router!.pathname === href) as ReactElement<any>}
    </Link>
  );
});

const links: LayoutDashboardProps["drawerLinks"] = [
  {
    href: "/admin",
    title: "Dashboard",
  },
  {
    href: "/admin/entry-manager",
    title: "Entry Manager",
  },
  {
    href: "/admin/entry-manager/edit-category",
    title: "Edit Category",
    hiddenSubPage: true,
  },
  {
    href: "/admin/entry-manager/edit-entry",
    title: "Edit Entry",
    hiddenSubPage: true,
  },
  {
    href: "/admin/entry-manager/new",
    title: "New Entry",
    hiddenSubPage: true,
  },
  {
    href: "/admin/test-manager",
    title: "Test Manager",
  },
  {
    href: "/admin/index-manager",
    title: "Index Manager",
  },
  {
    href: "/admin/plan-manager",
    title: "Plan Manager",
  },
  {
    href: "/admin/question-manager",
    title: "Question Manager",
  },
  {
    href: "/admin/user-manager",
    title: "User Manager",
  },
  {
    href: "/admin/revenue-manager",
    title: "Revenue Manager",
  },
];
