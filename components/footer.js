import T from 'prop-types';
import Card from './card';
import styles from './styles';
import config from '../config';

const links = [{
  href: 'https://discord.gg/MSxYV8a',
  title: 'TC Discord',
}, {
  href: `https://tc.emperorshammer.org/roster.php?type=sqn&id=${config.squadronId}`,
  title: 'Squadron Page',
}, {
  href: `mailto:${config.cmdr.email}`,
  title: 'Email the CMDR',
}, {
  href: 'https://tc.emperorshammer.org/admin.php',
  title: 'TC Personnel Administration',
}, {
  href: 'https://tc.emperorshammer.org/battlecenter.php',
  title: 'Battle Center',
}, {
  href: `https://tc.emperorshammer.org/showreport.php?id=1&nid=${config.squadronId}`,
  title: 'Report Archive',
}];

export default function Footer({ children }) {
  return (
    <Card style={{ borderBottom: 0 }}>
      <h5 style={{ ...styles.h5, marginBottom: '1em' }}>
        Resources
      </h5>

      <ul>
        {links.map(({ href, title }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              style={styles.a}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>

      {children}
    </Card>
  );
}

Footer.propTypes = {
  children: T.node,
};

Footer.defaultProps = {
  children: null,
};
