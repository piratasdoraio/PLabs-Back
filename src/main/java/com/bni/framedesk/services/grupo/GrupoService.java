package com.bni.framedesk.services.grupo;

import java.util.List;
import java.util.UUID;

import com.bni.framedesk.http.requests.grupo.AtualizarGrupoRequest;
import com.bni.framedesk.http.requests.grupo.SalvarGrupoRequest;
import com.bni.framedesk.http.responses.GrupoResponse;

import com.bni.framedesk.models.Grupo;
import com.bni.framedesk.models.mappers.GrupoMapper;

import com.bni.framedesk.repositories.GrupoRepository;
import com.bni.framedesk.services.grupo.interfaces.IGrupoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GrupoService implements IGrupoService {

    @Autowired
    private GrupoRepository grupoRepository;

    private GrupoMapper grupoMapper = new GrupoMapper();

    @Override
    @Transactional(readOnly = true)
    public List<GrupoResponse> listar() {
        List<Grupo> grupos = grupoRepository.findAll();
        return grupoMapper.toResponse(grupos);
    }

    @Override
    @Transactional(readOnly = true)
    public GrupoResponse buscar(UUID id) {
        Grupo grupo = grupoRepository.findById(id).get();
        return grupoMapper.toResponse(grupo);
    }

    @Override
    @Transactional
    public GrupoResponse salvar(SalvarGrupoRequest request) {
        Grupo grupo = grupoMapper.toModelSave(request);
        grupo = grupoRepository.save(grupo);
        return grupoMapper.toResponse(grupo);
    }

    @Override
    @Transactional
    public GrupoResponse atualizar(AtualizarGrupoRequest request, UUID id) {
        Grupo grupo = grupoMapper.toModelUpdate(request);
        grupo.setId(id);
        if (grupoRepository.existsById(id)) grupo = grupoRepository.save(grupo);
        return grupoMapper.toResponse(grupo);
    }

    @Override
    public void deletar(UUID id) {
        grupoRepository.deleteById(id);
    }
}