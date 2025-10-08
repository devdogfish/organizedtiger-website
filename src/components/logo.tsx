export default function Logo() {
  const homepage = window.location.origin;
  return (
    <a
      href={homepage}
      className="flex items-center gap-3"
      rel="noopener noreferrer"
      onContextMenu={(e) => e.preventDefault()} // prevent right-click on entire link
    >
      <img
        src="/logo.jpg"
        alt="Organized Tiger logo - a tiger with a graduation cap"
        className="w-10 h-10 rounded-lg text-primary-foreground"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()} // prevents right-click saving
        style={{ cursor: "pointer", userSelect: "none" }} // makes it non-selectable
      />
      <span className="font-semibold text-xl">Organized Tiger</span>
    </a>
  );
}
