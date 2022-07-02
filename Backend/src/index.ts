import api from '././api';

const PORT = 3001;

const server = api.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;