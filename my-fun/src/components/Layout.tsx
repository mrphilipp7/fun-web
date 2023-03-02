type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="relative flex h-screen bg items-center">{children}</main>
      <footer className="flex-1 bg-gray-500">Content</footer>
    </>
  );
};

export default Layout;
