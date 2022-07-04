DROP SCHEMA IF EXISTS Ebytr;
CREATE SCHEMA IF NOT EXISTS Ebytr;

CREATE TABLE Ebytr.List (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  stats TEXT NOT NULL,
  task TEXT NOT NULL,
);

/* INSERT INTO Ebyts.List (stats, task) VALUES('em andamento', 'Terminar o Projeto'); */