import { List, Section, Item, Title, Number } from './Statistics.styled';
import { getRandomHexColor } from '../../additional/randomHex';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ label, percentage, id }) => {
          return (
            <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <span>{label}</span>
              <Number>{percentage}% </Number>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};
