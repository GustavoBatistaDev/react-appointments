type Props = {
  handleSideOpen: () => void;
};

export const Navbar = ({ handleSideOpen }: Props) => {
  return (
    <nav className="navbar">
      <div onClick={handleSideOpen} className="container-hamburguer">
        <i className="fa-solid fa-bars "></i>
      </div>
      <div className="container-input-search">
        <input placeholder="Busca..." className="search" type="search" />
        <i className="fa-solid icon-color fa-magnifying-glass"></i>
      </div>
      <div className="info-logged-user">
        <div className="container-photo-user">
          <img className="user-photo" src="/jovem.avif" alt="" />
        </div>
        <div className="mb-invisible" style={{ marginLeft: "4px" }}>
          <h4 className="username">Gustavo Batista</h4>
          <div>
            <img style={{ marginRight: "4px" }} src="/online.svg" alt="" />
            <span className="online">online</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
