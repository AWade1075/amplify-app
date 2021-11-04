function Home() {
  const links = [{ label: 'TODO List', path: '/todos' }];

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {links.map((link) => (
            <a href={link?.path}>{link?.label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
