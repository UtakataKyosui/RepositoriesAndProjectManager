import AutoBreadcrumb from "@/components/common/auto-breadcrumb";
import Header from "@/components/common/header";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <AutoBreadcrumb />
            {children}
        </>
    );
}
