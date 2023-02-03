SELECT usuarios.id, usuarios.nomeusuario, usuarios.perfil_id AS nome_perfil
FROM usuarios
INNER JOIN perfis ON usuarios.perfil_id = perfis.id;


-- consulta de usuariosne seus perfis