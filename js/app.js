//cria um modulo novo chamado agenda
var app = angular.module('agenda', [])
//
// //cria um controller novo para esse modulo
 app.controller('main', function($scope){

//   //cria uma variavel de escopo, no nosso caso, um array vazio
   $scope.contacts = []
//   //cria um metodo de escopo
   $scope.add = function(valid){
     //cria um objeto
     if (valid) {
       var contact = {
         name: $scope.name,
         last_name: $scope.last_name,
         email: $scope.email
       }

       //adiciona no array do escopo
       $scope.contacts.push(contact)

       $scope.name = ""
       $scope.last_name = ""
       $scope.email = ""
     }
     else{
       $scope.error = "Formulario invalido, preencha os campos"
     }
   }
 })
