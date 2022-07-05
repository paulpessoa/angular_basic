(function (angular) {
  'use strict';
  var app = angular.module("listaTelefonica", ['ngMessages']);
  app
    .controller("listaTelefonicaCtrl", function ($scope) {
      $scope.app = "Lista Telefonica";
      $scope.contatos = [
        {
          nome: "Maria",
          telefone: "88888-8888",
          data: "02/12/2019",
          operadora: { nome: "Oi" },
          cor: "Blue",
        },
        {
          nome: "João",
          telefone: "77777-7777",
          data: new Date(),
          operadora: { nome: "Claro" },
          cor: "purple",
        },
        {
          nome: "Raimunda",
          telefone: "66666-6666",
          data: "05/03/2016",
          operadora: { nome: "Vivo" },
          cor: "green",
        },
      ];
      $scope.operadoras = [
        { nome: "Oi", codigo: 14, categoria: "Celular" },
        { nome: "Vivo", codigo: 15, categoria: "Celular" },
        { nome: "Tim", codigo: 16, categoria: "Fixo" },
        { nome: "Claro", codigo: 17, categoria: "Fixo" },
      ];
      $scope.cores = [
        { nome: "Azul", valor: "blue" },
        { nome: "Verde", valor: "green" },
        { nome: "Vermelho", valor: "red" },
        { nome: "Amarelo", valor: "yellow" },
      ];
      $scope.colunas = [
        { nome: "Nome", valor: "nome" },
        { nome: "Telefone", valor: "telefone" }
      ];
      $scope.adicionarContato = function (contato) {
        $scope.contatos.push(
          angular.copy(contato)
          //    nome: $scope.nome,
          //    telefone: $scope.telefone,
        );
        delete $scope.contato;
        $scope.contatoForm.$setPristine()
      };
      $scope.classe1 = "selecionado";
      $scope.classe2 = "negrito";
      $scope.apagarContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
          if (!contato.selecionado) return contato;
        });
      };
      $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
          return contato.selecionado;
        });
        console.log(isContatoSelecionado);
      };
    });
})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/