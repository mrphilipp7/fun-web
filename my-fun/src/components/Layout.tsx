type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="relative flex h-screen bg items-center">{children}</main>
    </>
  );
};

export default Layout;
