import "../styles/Icon.scss"

const Icon = ({ icon }) => {
  return (
    <>
      <div className="icon bounce d-flex align-items-center justify-content-center p-2 m-3">
        <img src={ icon.svg } alt={ icon.label } height="64" />
      </div>
    </>
  );
};

export default Icon;