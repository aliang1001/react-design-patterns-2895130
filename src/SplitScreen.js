import styles from 'styled-components';

const Container = styles.div`
  display:flex;
`;

const Pane = styles.div`
  flex:${(props) => props.width}
`;

export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane width={leftWidth}>{left}</Pane>
      <Pane width={rightWidth}>{right}</Pane>
    </Container>
  );
};
