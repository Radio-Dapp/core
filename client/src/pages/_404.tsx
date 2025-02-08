import Link from "../shared/components/Link";

export default function Error404() {
  return (
    <section
      className={"min-h-screen flex flex-col items-center justify-center"}
    >
      <h1 className="text-[12rem] uppercase tracking-wider text-muted font-light">
        404
      </h1>

      <Link to="/" className={"text-muted"}>
        Back to Home
      </Link>
    </section>
  );
}
