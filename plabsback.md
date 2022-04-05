# BNI DOCUMENTAÇÃO
> Aqui conterá toda informação para entendimento do projeto tanto do back-end quanto do front-end, assim deixando explicações das dúvidas que se surgiram ou problemas que tivemos no desenvolvimento do projeto, vale ressaltar também que poderão ser  dúvidas e problemas também poderão ser minimizados com a usabilidade e escalabilidade deste documento.
---
## Regras back-end (swagger)

> **Legenda**
> 
> variável (dependente)
> 
> Exemplo:
> cards (users)
>   
>   cards depedente de um user
---
* default  
	* POST   
		* /auth/login
* users (*default*)
	* GET  
		* /users  
		``Retonar todos usuários``  
	* POST  
		* /users  
		``Insere um novo usuário``  
	* GET  
		* /users/{id}  
		``Retonar usuário pelo id``  
	* DELETE  
		* /users{id}  
		``Deletar usuário pelo id``  

* cards (*users*)
	* GET  
		* /cards/{id}  
			`` Retorna um card pelo id do user`` 
	* POST  
		* /cards  
			* `` Insere um novo card`` 
* columns (*users*)
	* GET  
		* /columns/{id}  
			``Retorna uma coluna pelo id do user`` 
	* DELETE  
		* /columns/{id}  
		`` Deleta uma coluna pelo id do user`` 
	* POST  
		* /columns  
			``Insere uma nova coluna`` 
* quadros (*users*)  
	* GET  
	* DELETE  
* groups   (*users*)
	* GET  
		* /groups/{id}  
			``Retorna um grupo por id``
	* DELETE  
		* /groups/{id}  
			``Deleta um grupo por id``
	* POST
		* /groups  
			`` Insere um novo grupo``


