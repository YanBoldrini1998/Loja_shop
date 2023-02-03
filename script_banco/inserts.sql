INSERT INTO usuarios (id, nomeusuario, senha, email, perfil_id) VALUES (1, 'Pedro', '123', 'pedro@gmail.com', 1);


INSERT INTO usuarios ( nomeusuario, senha, email, perfil_id) VALUES ( 'joão', '123', 'pedro@gmail.com', 1);

SELECT	id from usuarios;




INSERT INTO perfis (nome_perfil) VALUES ('usuario');

INSERT INTO perfis (nome_perfil) VALUES ('vendedor');

INSERT INTO perfis (nome_perfil) VALUES ('administrador');


SELECT	* from perfis;

DELETE FROM perfis
WHERE id = 4;



INSERT INTO produtos (nome, descricao, preco, estoque) VALUES ('camisa', 'camisa branca', 69.99, 10);

INSERT INTO produtos (nome, descricao, preco, estoque) VALUES ('bota', 'bota masculina', 109.99, 10);

INSERT INTO produtos (nome, descricao, preco, estoque) VALUES ('acessorios', 'brinco', 9.99, 10);

INSERT INTO produtos (nome, descricao, preco, estoque) VALUES ('calca', 'calca jeans', 99.99, 10);



INSERT INTO clientes (nome, email, telefone) VALUES ('Paulo', 'paulo@gmail.com', '69999999999');

INSERT INTO clientes (nome, email, telefone) VALUES ('Marcos', 'marcos@gmail.com', '69999999992');

INSERT INTO clientes (nome, email, telefone) VALUES ('Maria', 'maria@gmail.com', '69999999993');

INSERT INTO clientes (nome, email, telefone) VALUES ('Rose', 'rose@gmail.com', '69999999994');


INSERT INTO estoque (produto_id, quantidade) VALUES (1,10);

INSERT INTO estoque (produto_id, quantidade) VALUES (2,10);

INSERT INTO estoque (produto_id, quantidade) VALUES (3,10);

INSERT INTO estoque (produto_id, quantidade) VALUES (4,10);



SELECT * FROM estoque;

