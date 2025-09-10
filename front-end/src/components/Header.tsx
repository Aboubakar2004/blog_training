function Header() {
  return (
    <div className="flex justify-around p-4 bg-[#216869] text-white">
      <div>
        <h1>Blog</h1>
      </div>
      <div className="flex gap-20">
        <h1>Acceuil</h1>
        <h1>Rechercher</h1>
      </div>
      <div>
        <h1>Poster</h1>
      </div>
    </div>
  );
}

export default Header;
