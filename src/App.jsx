import { useMemo, useState } from "react";
import { INFO, MENU } from "./menu.js";

const NONVEG = /chicken|egg|fish|omelet|tangdi|lollypop/i;

function Price({ value }) {
  const [a, b] = value.split("/");
  return (
    <span className="price">
      <small>₹</small>
      <b>{a}</b>
      {b && (<> / <b>{b}</b></>)}
    </span>
  );
}

function Item({ name, price, desc, nonveg }) {
  return (
    <li>
      <div className="row">
        <span
          className={nonveg ? "mark nv" : "mark v"}
          role="img"
          aria-label={nonveg ? "Non-veg" : "Veg"}
        />
        <span className="name">{name}</span>
        <span className="dots" aria-hidden="true" />
        <Price value={price} />
      </div>
      {desc && <div className="desc">{desc}</div>}
    </li>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("");
  const term = query.trim().toLowerCase();

  const sections = useMemo(
    () =>
      MENU.map((c) => ({
        ...c,
        items: term
          ? c.items.filter(([n]) => `${n} ${c.title}`.toLowerCase().includes(term))
          : c.items,
      })).filter((c) => c.items.length),
    [term]
  );

  const jump = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="wrap">
      <header>
        <h1>{INFO.name}</h1>
        <div className="tag">{INFO.tagline}</div>
        <div className="calls">
          <a href={`tel:${INFO.phone.tel}`}>Call {INFO.phone.label}</a>
          <a className="alt" href={INFO.facebook} target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </header>

      <div className="bar">
        <input
          className="search"
          type="search"
          placeholder="Search dishes, like paneer or pizza"
          aria-label="Search the menu"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {!term && (
          <div className="chips">
            {MENU.map((c) => (
              <button
                key={c.id}
                className="chip"
                aria-pressed={active === c.id}
                onClick={() => jump(c.id)}
              >
                {c.icon} {c.title.replace(/ \(.*\)/, "")}
              </button>
            ))}
          </div>
        )}
      </div>

      <main>
        <p className="note">{INFO.delivery}</p>
        {sections.length === 0 ? (
          <div className="empty">No dishes match “{query}”. Try a shorter word.</div>
        ) : (
          sections.map((c) => (
            <section key={c.id} id={c.id}>
              <h2>
                <span className="ic" aria-hidden="true">{c.icon}</span>
                {c.title}
              </h2>
              {c.cols && <div className="cols">{c.cols.join(" / ")}</div>}
              <ul>
                {c.items.map(([name, price, desc]) => (
                  <Item
                    key={name}
                    name={name}
                    price={price}
                    desc={desc}
                    nonveg={c.nonveg || NONVEG.test(name)}
                  />
                ))}
              </ul>
            </section>
          ))
        )}
      </main>

      <footer>
        <div>{INFO.delivery}</div>
        <div>{INFO.tagline}. Call {INFO.phone.label}</div>
        <div className="credit">
          {INFO.credit.text}{" "}
          <a href={INFO.credit.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          {" or "}
          <a href={`tel:${INFO.credit.phone.tel}`}>{INFO.credit.phone.label}</a>
        </div>
      </footer>
    </div>
  );
}
