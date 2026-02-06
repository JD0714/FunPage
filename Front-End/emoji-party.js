function Emoji({id, onRemove}) {
  const emojiList = ["😎","🎉","🔥","🌟","💥"];
  const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  const endX = Math.random() * window.innerWidth;
  const endY = Math.random() * window.innerHeight;

  React.useEffect(() => {
    const timer = setTimeout(() => onRemove(id), 5000);
    return () => clearTimeout(timer);
  }, [id, onRemove]);

  return (
    <div
      className="emoji"
      style={{
        left: `${startX}px`,
        top: `${startY}px`,
        transform: `translate(${endX - startX}px, ${endY - startY}px)`
      }}
    >
      {emoji}
    </div>
  );
}