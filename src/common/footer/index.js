import Support from "./Support";
import Information from "./Information";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <React.Fragment>
      <Support />
      <footer class="d-none d-sm-block">
        <Information />
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
