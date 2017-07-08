//cria um modulo novo chamado app
var app = angular.module('app', [])

//cria um controller novo para esse modulo
app.controller('controller', function($scope){
  //cria uma variavel de escopo, no nosso caso, um array vazio
  $scope.tasks = []
  //cria um metodo de escopo
  $scope.add = function(){
    //cria um objeto
    var task = {
      title: $scope.novoitem,
      created_at: new Date()
    }
    //adiciona no array do escopo
    $scope.tasks.push(task)
    //zera a model novoitem
    $scope.novoitem = ""
  }
})
