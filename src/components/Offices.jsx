import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Talin" invert={invert}>
          Paju 1a, Tartu,<br/> Tartu county 50603,<br/> Estonia
        </Office>
      </li>
      <li>
        <Office name="Sarajevo" invert={invert}>
         Tešanjska 1,<br/> Sarajevo 71000,<br/> Bosnia and Herzegovina
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
