import { Box } from "./Box";

export const App = () => {
  return (
    <Box as="main"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      My Phonebook
    </Box>
  );
};
