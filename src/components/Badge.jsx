import '../styles/Badge.scss'

const Badge = ({ badge }) => {
  return (
    <>
      <div className="intro-badge border1 m-4 p-4 d-flex flex-column align-items-center">
        <img src={badge.icon} alt={badge.alt} width="128"/>
        <h4>{badge.blurb}</h4>
      </div>
    </>
  );
}

export default Badge;