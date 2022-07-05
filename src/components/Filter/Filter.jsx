import { Box } from 'components/Box';

export const Filter = ({ name, onChange }) => {
  return (
    <Box>
      <label htmlFor="find">Find contacts by name</label>
      <input type="text" name="find" value={name} onChange={onChange} />
    </Box>
  );
};
