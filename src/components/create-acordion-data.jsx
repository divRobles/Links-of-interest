export   const CreateAcordionData = ({ data }) => {
    const { id, href, linkTitle, icon } = data;
    return (
      <section className="acordion-data" key={id}>
        <img src={icon} />
        <a href={href} target="_blank">
          {linkTitle}
        </a>
      </section>
    );
  };