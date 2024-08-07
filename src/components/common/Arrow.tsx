const arrowStyle = {
  width: 0,
  height: 0,
  borderLeft: "10px solid transparent",
  borderRight: "10px solid transparent",
  borderTop: "20px solid white",
  animation: "bounce 2s infinite",
};

const keyframes = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
  `;

const Arrow = () => {
  return (
    <>
      <style>{keyframes}</style>
      <div style={arrowStyle}></div>
    </>
  );
};

export default Arrow;
