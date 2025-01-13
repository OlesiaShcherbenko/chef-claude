import chefClaudeLogo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img src={chefClaudeLogo} alt="Logo Chef Claude" />
      <h1>Chef Claude</h1>
    </header>
  );
}
