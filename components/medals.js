import styles from './styles';

export const medals = {
  IS_BR: 'is-br',
  IS_BW: 'is-bw',
  IS_SR: 'is-sr',
  IS_SW: 'is-sw',
  IS_GR: 'is-gr',
  IS_GW: 'is-grw',
  IS_PW: 'is-pw',
  LOC: 'loc',
  LOS: 'los',
  MOC_BOC: 'moc-boc',
  MOC_SOC: 'moc-soc',
  COB: 'cob',
  MOI: 'moi',
  ISM: 'ism',
  IC: 'ic',
  PC: 'pc',
  BS: 'bs',
  SS: 'ss',
  GS: 'gs',
  OOR: 'oor',
  GOE: 'goe',
  MOH: 'moh',
};

export const medalImages = Object.values(medals).reduce((acc, medal) => ({
  ...acc,
  [medal]: () => (
    <img
      src={`/medals/${medal}.jpg`}
      alt={`Icon for ${medal}`}
      style={styles.medal}
    />
  ),
}), {});
