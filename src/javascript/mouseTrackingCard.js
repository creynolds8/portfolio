
const mouseLeave = (boundingRef) => {
  boundingRef.current = null;
}

const mouseEnter = (boundingRef, e) => {
  boundingRef.current = e.currentTarget.getBoundingClientRect();
}

const mouseMove = (boundingRef, e) => {
  if (!boundingRef.current) return 
  const x = e.clientX - boundingRef.current.left;
  const y = e.clientY - boundingRef.current.top;
  const xPercentage = x / boundingRef.current.width;
  const yPercentage = y / boundingRef.current.height;
  const xRotation = (xPercentage - 0.5) * 20;
  const yRotation = (0.5 - yPercentage) * 20;
  e.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
  e.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
}

export { mouseLeave, mouseEnter, mouseMove };