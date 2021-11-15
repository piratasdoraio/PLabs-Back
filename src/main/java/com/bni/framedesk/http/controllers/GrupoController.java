package com.bni.framedesk.http.controllers;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

import javax.validation.Valid;

import com.bni.framedesk.http.requests.grupo.AtualizarGrupoRequest;
import com.bni.framedesk.http.requests.grupo.SalvarGrupoRequest;
import com.bni.framedesk.http.responses.GrupoResponse;
import com.bni.framedesk.models.Grupo;
import com.bni.framedesk.services.grupo.GrupoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping
public class GrupoController {

    @Autowired
    private GrupoService grupoService;

    public GrupoController(GrupoService grupoService) {
        this.grupoService = grupoService;
    }

    @ApiOperation(
            value = "Listar grupos",
            response = Grupo.class)
    @GetMapping(path = "/grupos")
    @ResponseBody
    public ResponseEntity<List<GrupoResponse>> listar() throws IOException {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(grupoService.listar());
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e.getCause());
        }
    }

    @ApiOperation(
            value = "Buscar um grupo",
            response = Grupo.class)
    @GetMapping(path = "/grupos/{id}")
    @ResponseBody
    public ResponseEntity<GrupoResponse> buscar(@Validated @PathVariable UUID id) throws IOException {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(grupoService.buscar(id));
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e.getCause());
        }
    }

    @ApiOperation(
            value = "Salvar um grupo",
            response = Grupo.class)
    @PostMapping(path = "/grupos")
    @ResponseBody
    public ResponseEntity<GrupoResponse> salvar(@Valid @RequestBody SalvarGrupoRequest request) throws IOException {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(grupoService.salvar(request));
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e.getCause());
        }
    }

    @ApiOperation(
            value = "Atualizar um grupo",
            response = Grupo.class)
    @PutMapping(path = "/grupos/{id}")
    @ResponseBody
    public ResponseEntity<GrupoResponse> atualizar(@Valid @RequestBody AtualizarGrupoRequest request, @Validated @PathVariable UUID id) throws IOException {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(grupoService.atualizar(request, id));
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e.getCause());
        }
    }

    @ApiOperation(
            value = "Deletar um grupo",
            response = Grupo.class)
    @DeleteMapping(path = "/grupos/{id}")
    @ResponseBody
    public ResponseEntity<GrupoResponse> deletar(@Validated @PathVariable UUID id) throws IOException {
        try {
            grupoService.deletar(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getLocalizedMessage());
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e.getCause());
        }
    }
}
