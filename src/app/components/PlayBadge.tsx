/** Google Play style download badge (generic, no trademarked logo). */
export function PlayBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="#download"
      className={`group inline-flex transition transform hover:scale-[1.03] active:scale-[0.98] ${className}`}
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
        alt="Get it on Google Play" 
        className="h-12 object-contain" 
      />
    </a>
  );
}
